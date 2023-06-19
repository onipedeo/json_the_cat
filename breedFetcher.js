const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //catch error of broken link
    if (error) {
      callback(error, null);
      return;
    }
    //IF status is not 200, then there is trouble
    if (response.statusCode !== 200) {
      callback('There is an issue that needs your attention', null);
      return;
    }
    //converting my data to an array and object
    const data = JSON.parse(body);
    const dataObj = data[0];

    //check if the breed doesn't exist
    if (data.length === 0) {
      callback(`${breedName} breed doesn't exist`, null);
      return;
    }
    callback(null, dataObj.description);
  });
};


module.exports = { fetchBreedDescription };