let fonctionnalites = {links: true, nameAndText: false, attributes: false, dbpedia: true}


require("@babel/polyfill");
const chrome = require("selenium-webdriver/chrome");
const {Builder, By, Key,}  = require("selenium-webdriver");
const {assert} = require("assert");
const { path } = require("chromedriver");
let driver = null;
const chromeOptions = new chrome.Options().headless();
const axios = require('axios');

let fs = require('fs');

// var path = require('path')
// var fs = require('fs')
// var assert = require('assert')
var argv = require('optimist').demand('config').argv
var configFilePath = argv.config
// assert.ok(fs.existsSync(configFilePath), 'config file not found at path: ' + configFilePath)
var config = require('nconf').env().argv().file({file: configFilePath})
var apiConfig = config.get('api')
var url = apiConfig.url
var name = apiConfig.name

console.log('\n\n##########\nExploration de : '+name)
console.log('- url in '+configFilePath+": "+ url)
console.log('##########\n')

console.log("start")
let pages = {}

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

  await driver.get('https://pad.lamyne.org/s/BkEqHEh-W#');
  // Returns base64 encoded string
  let encodedString = await driver.takeScreenshot();
  let filename = new Date().getTime()+".png"
  console.log("date",filename)

  await fs.writeFileSync('./images/'+filename, encodedString, 'base64');


  if (fonctionnalites.links)  await links()



  let body = await driver.findElements(By.tagName("body"));
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

  console.log("nombre de childs",childs.length)

  await driver.quit();
}())


async function links(){
  let links = await driver.findElements(By.tagName("a"));
//  console.log("links",links)


  for (const link of links){
    let text = await link.getText()
    let href = await link.getAttribute('href')
    console.log(text,"->", href)
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
