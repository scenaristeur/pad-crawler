```
npm install
npm install -g mocha
mocha pad.spec.js

```


- representer les infos d'un pad tel que https://pad.lescommuns.org/D6vKppj_SvqaYBjDOsgp-Q# sous forme de graphe

# idee
- selenium pour crawler
- mocha ? in browser https://mochajs.org/#running-mocha-in-the-browser


# pad test
- https://pad.lescommuns.org/D6vKppj_SvqaYBjDOsgp-Q#
- https://pad.lescommuns.org/itEyS72eT62ZW5G0bBEtaw#

# ajouter dbpedia spotlight
- https://www.dbpedia-spotlight.org/

// Make a request for a user with a given text
// https://www.dbpedia-spotlight.org/api
  axios.get('https://api.dbpedia-spotlight.org/en/annotate?text='+encodeURIComponent(text))
//axios.get('https://api.dbpedia-spotlight.org/en/spot?text='+encodeURIComponent(text))
//axios.get('https://api.dbpedia-spotlight.org/en/candidates?text='+encodeURIComponent(text))
