const request = require("request");

//collect the CLI argument
const args = process.argv.slice(2);
const breedName = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //catch error of broken link
  if (error) {
    console.log('There is an error: ', error);
  }
  //IF status is not 200, then there is trouble
  if (response.statusCode !== 200) {
    console.log('There is an issue that needs your attention');
  }
  //converting my data to an array and object
  const data = JSON.parse(body);
  const dataObj = data[0];

  //check if the breed doesn't exist
  if (data.length === 0) {
    console.log(`${breedName} breed doesn't exist`);
    return;
  }
  console.log('Description: ', dataObj.description);
});

