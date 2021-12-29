require("@babel/polyfill");
const chrome = require("selenium-webdriver/chrome");
const {Builder, By, Key,}  = require("selenium-webdriver");
const {assert} = require("assert");
const { path } = require("chromedriver");
let driver = null;
const chromeOptions = new chrome.Options().headless();
const axios = require('axios');

// IPFS
// based on https://github.com/ipfs-examples/js-ipfs-examples/blob/master/examples/ipfs-101/index.js
const IPFS = require('ipfs-core')
const all = require('it-all')
const { concat: uint8ArrayConcat } = require('uint8arrays/concat')
const { fromString: uint8ArrayFromString } = require('uint8arrays/from-string')
const { toString: uint8ArrayToString } = require('uint8arrays/to-string')

let fs = require('fs');
let dirs = ['./images', './restit']
for (let dir of dirs){
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
var Bar = require('progress-barjs');

// var path = require('path')
// var fs = require('fs')
// var assert = require('assert')
var argv = require('optimist').demand('config').argv
var configFilePath = argv.config
// assert.ok(fs.existsSync(configFilePath), 'config file not found at path: ' + configFilePath)
var config = require('nconf').env().argv().file({file: configFilePath})
var apiConfig = config.get('api')
let params = config.get('params')
let fonctionnalites = config.get('fonctionnalites')
let output = config.get('output')

let debug = params.debug
var url = apiConfig.url
var name = apiConfig.name


// var test_count = apiConfig.test_count

console.log('\n\n##########\nExploration de : '+name)
console.log('- url in '+configFilePath+": "+ url)
console.log('- params :' + JSON.stringify(params))
console.log('- fonctionnalites', fonctionnalites)
console.log('- output :' + JSON.stringify(output))
console.log('##########\n')

if (debug == 10 ){
  console.log('debug mode 10')

  return
}
let date = new Date().getTime()




console.log("start")
let pages = {}
pages.date = date

// on limite les tests dbpedia à 100 opérations tant que ce n'est pas totalement calé
var test_count

(async function example() {
  test_count = 100
  console.log("cont",test_count)
  try{
    driver = await new Builder()
    .forBrowser('chrome')
    .build();
  }catch(e){
    console.log(e)
  }
  await driver.get(url);

  let title = await driver.getTitle()
  let potential_redirect= await driver.getCurrentUrl()
  console.log("potential", potential_redirect)
  pages.root = {url: url, name: name, title: title}
  if (url != potential_redirect){
    pages.root.redirect = potential_redirect
  }
  // Returns base64 encoded string
  let encodedString = await driver.takeScreenshot();
  let filename = date+".png"
  //  console.log("date",filename)
  if (fonctionnalites.screenshot == true){await fs.writeFileSync('./images/'+filename, encodedString, 'base64');}
  if (fonctionnalites.base64_screenshot == true){pages.root.base64_screenshot = encodedString}
  if (fonctionnalites.links)  await links()

  //let body = await driver.findElements(By.tagName("body"));
  //console.log("body", body)
  var childs = await driver.findElements(By.xpath("//*"));
  //console.log(childs)

  for await (const child of childs){
    // Différentes fonctions pour récupérer les informations des différents élements
    if (fonctionnalites.nameAndText) await nameAndText(child)
    if (fonctionnalites.attributes) await attributes(child)
    if (fonctionnalites.dbpedia) await dbpedia(child)
    //  console.log("==========================================")
  }
  console.log("pages ", pages )
  console.log("nombre de childs",childs.length)
  //  console.log("root", pages.root)
  let path = './restit/'+name+" "+title+" "+date+'.json'
  try{
    await fs.writeFileSync(path, JSON.stringify(pages, null, 2), 'utf-8');
  }catch(e){
    console.log(e)
  }

  console.log("will quit")
  await driver.quit();

  if (output.ipfs ==  true){await storeOnIpfs()}
}())

async function storeOnIpfs(path){

  const node = await IPFS.create()
  const version = await node.version()

  console.log('IPFS Version:', version.version)

  try{
    // let data = 'Hello, <YOUR NAME HERE>'
    //
    // // add your data to to IPFS - this can be a string, a Buffer,
    // // a stream of Buffers, etc
    // const results = node.add(data)
    //
    // // we loop over the results because 'add' supports multiple
    // // additions, but we only added one entry here so we only see
    // // one log line in the output
    // for await (const { cid } of results) {
    //   // CID (Content IDentifier) uniquely addresses the data
    //   // and can be used to get it again.
    //   console.log(cid.toString())
    //   console.log("https://ipfs.io/ipfs/"+cid.toString())
    // }


    const file = await node.add({
      path: path,
      content: uint8ArrayFromString(JSON.stringify(pages))
    })

    console.log('Added file:', file.path, file.cid.toString())

    const data = uint8ArrayConcat(await all(node.cat(file.cid)))

    //console.log('Added file contents:', uint8ArrayToString(data))
    console.log("See/share it at https://ipfs.io/ipfs/"+file.cid.toString())
  }catch(e){
    console.log('err',e)
  }

}


async function links(){
  pages.links = []
  let links = await driver.findElements(By.tagName("a"));
  let options = {
    info: 'Links',
    total: links.length,
  };

  try{
    let bar = Bar(options);
    let i = 1;
    for (const link of links){
      let text = await link.getText()
      //let content = await link.getContent()
      let url = await link.getAttribute('href')
      let l = {url: url, text: text, order: i/* content: content*/}
      pages.links.push(l)
      bar.tick('Link number ' + i);
      i++
    }
  }catch(e){
    console.log("err",e)
  }
}
async function nameAndText(element){
  let tagname = await element.getTagName()
  let text = await element.getText()

  console.log("------",tagname, ":::", text)
}

async function attributes(element){

  try{
    let attributes = await element.getProperty('attributes')

    attributes.forEach((att) => {
      console.log("____",att.name,"->", att.value)
    });
  }catch(e){
    console.error("error",e)
  }
}


async function dbpedia(element){


  let text = await element.getText()
  //console.log(text)
  if (text.length > 10 && text.length <100){ // pb url too long
    console.log(test_count, text)

    if (test_count > 0){
      test_count --
      //  curl -X GET "https://api.dbpedia-spotlight.org/en/annotate?text=

      // Make a request for a user with a given text
      // https://www.dbpedia-spotlight.org/api
      axios.get('https://api.dbpedia-spotlight.org/fr/annotate?text='+encodeURIComponent(text))
      //  axios.get('https://api.dbpedia-spotlight.org/en/spot?text='+encodeURIComponent(text))
      //  axios.get('https://api.dbpedia-spotlight.org/en/candidates?text='+encodeURIComponent(text))
      // axios({
      //   method: 'post',
      //   url: 'https://api.dbpedia-spotlight.org/en/annotate',
      //   data: {
      //     text: text,
      //     //lastName: 'Flintstone'
      //   },
      //
      //     headers: {
      //       // 'application/json' is the modern content-type for JSON, but some
      //       // older servers may use 'text/json'.
      //       // See: http://bit.ly/text-json
      //       'content-type': 'text/json'
      //     }
      //
      // })
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
  }
}
