// import axios from 'axios';
fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=pluto&exchars=500&explaintext=1').then(r => r.text()).then(result => {
    // Result now contains the response text, do what you want...
    console.log(result);
})