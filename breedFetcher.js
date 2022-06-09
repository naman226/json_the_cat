const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    const firstEntry = data[0];
    if (firstEntry === undefined) {
      callback("Oops! Breed not found");
    } else {
      const describe = firstEntry.description;
      callback(null, describe);
    }
  });
};

module.exports = { fetchBreedDescription };

