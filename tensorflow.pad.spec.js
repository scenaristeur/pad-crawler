let fonctionnalites = {links: false, nameAndText: false, attributes: false, dbpedia: false, analyse: true}

require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');
require("@babel/polyfill");
const chrome = require("selenium-webdriver/chrome");
const {Builder, By, Key,}  = require("selenium-webdriver");
const {assert} = require("assert");
const { path } = require("chromedriver");
let driver = null;
const chromeOptions = new chrome.Options().headless();
const axios = require('axios');

let fs = require('fs');

console.log("#start#")
let sentences = []

// on limite les tests dbpedia à 100 opérations tant que ce n'est pas totalement calé
var test_count

(async function example() {
  test_count = 100
  console.log("#count#",test_count)
  try{
    driver = await new Builder()
    .forBrowser('chrome')
    .build();
  }catch(e){
    console.log(e)
  }

  await driver.get('https://pad.lescommuns.org/D6vKppj_SvqaYBjDOsgp-Q#'
/*https://pad.lamyne.org/s/BkEqHEh-W#*/);
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
  if (fonctionnalites.analyse) await analyse(child)


  //  console.log("==========================================")
}



console.log("nombre de childs",childs.length)



console.log("sentences", sentences)

if (fonctionnalites.analyse){
// Load the model.
use.load().then(model => {
  // Embed an array of sentences.
  const sentences = [
    'Hello.',
    'How are you?'
  ];
  model.embed(sentences).then(embeddings => {
    // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
    // So in this example `embeddings` has the shape [2, 512].
    embeddings.print(true /* verbose */);
  });
});
}



await driver.quit();
}())


async function links(){
  let links = await driver.findElements(By.tagName("a"));
  //  console.log("links",links)


  for (const link of links){
    let text = await link.getText()
    let href = await link.getAttribute('href')
    console.log('#link# ', text,"->", href)
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

async function analyse(element){
// https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder

  let text = await element.getText()
  text = text.trim()
  if (text.length > 0){
    console.log("#text# ",text)
    //sentences.push(text)
    sentences.indexOf(text) === -1 ? sentences.push(text) : ""// console.log("This item already exists");
  }


}


async function dbpedia(element){


  let text = await element.getText()
  //console.log(text)
  if (text.length > 10 && text.length <100){ // pb url too long
    console.log("db",test_count, text)

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
        console.log("#resp# ",response.data);
      })
      .catch(function (error) {
        // handle error
        console.log("#err# ", error);
      })
      .then(function () {
        // always executed
      });

    }


  }
}
