const request = require('request');
const argu = process.argv.splice(2);
const breed = argu[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    const firstEntry = data[0];
    if (!firstEntry) {
      console.log("Oops! Breed not found");
    } else {
      const describe = firstEntry.description;
      console.log(describe);
    }
  } else {
    console.log(error);
  }
});