## prérequis
- Chrome

```
npm install
npm install -g mocha
mocha pad.spec.js

```

# with config
https://stackoverflow.com/questions/16144455/mocha-tests-with-extra-options-or-parameters
```
mocha params.spec.js --config=configs/config.json

```

with configs/config.json like that
```
{
  "api": {
    "name": "Solid Community Forum",
    "url": "https://forum.solidproject.org/",
    "deep": 12,
    "test_count": 100
  },
  "params": {
    "debug": 0
  },
  "fonctionnalites":{
    "base64_screenshot": false,
    "links": true,
    "nameAndText": false,
    "attributes": false,
    "dbpedia": false
  }
}
```

with debug : level of debug 0 to 10 with  10 : stop after init


# store on ipfs

```
mocha output.spec.js --config=configs/config-ipfsio.json
mocha output.spec.js --config=configs/config-carto-semapps.json

```

- representer les infos d'un pad tel que https://pad.lescommuns.org/D6vKppj_SvqaYBjDOsgp-Q# sous forme de graphe

# idee
- selenium pour crawler https://www.selenium.dev/selenium/docs/api/javascript/index.html
- mocha ? in browser https://mochajs.org/#running-mocha-in-the-browser


# pad test
- https://pad.lescommuns.org/D6vKppj_SvqaYBjDOsgp-Q#
- https://pad.lescommuns.org/itEyS72eT62ZW5G0bBEtaw#
- la myne https://pad.lamyne.org/s/BkEqHEh-W#

# ajouter dbpedia spotlight
- https://www.dbpedia-spotlight.org/

// Make a request for a user with a given text
// https://www.dbpedia-spotlight.org/api
axios.get('https://api.dbpedia-spotlight.org/en/annotate?text='+encodeURIComponent(text))
//axios.get('https://api.dbpedia-spotlight.org/en/spot?text='+encodeURIComponent(text))
//axios.get('https://api.dbpedia-spotlight.org/en/candidates?text='+encodeURIComponent(text))

# world analyse
- https://www.bige.dev/feeds/wordlab-la-base-de-donnee-vectorielle-cree-specialement-pour-bige
- https://www.npmjs.com/package/@landscape/wordlab
- https://github.com/simondelamarre/WordLab

- https://cloud.ibm.com/apidocs/natural-language-understanding#analyze
- https://medium.com/@GeorgePerry/finding-intent-to-buy-from-instagram-comments-with-tensorflow-js-3f764c132be7
- https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder

- https://blog.logrocket.com/natural-language-processing-for-node-js/
