const request = require("request");
//collect the CLI argument
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  //catch error of broken link
  if (error) {
    console.log('There is an error: ', error);
  }
  //converting my data to an array and object
  const data = JSON.parse(body);
  const dataObj = data[0];
  //Initialise array for iteration to check if the breed exists
  const valueArr = [];
  for (const b in dataObj) {
    //push all vales to the value array
    valueArr.push(dataObj[b]);
    //check if value array has the breed ID/initials.
    if (valueArr.includes(args[0])) {
      return console.log('Description: ', dataObj.description);
    }
  }
  return console.log(`${args[0]} breed doesn't exist`);

});