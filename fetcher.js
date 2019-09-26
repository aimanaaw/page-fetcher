const request = require('request');
const fs = require('fs');

const givenURL = process.argv.slice(2)[0];
const newFile = process.argv.slice(2)[1]

request(givenURL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const content = body;
  fs.writeFile(newFile, body, (err) => {
    if(err) throw err;
      console.log("File created successfully");
  })
});


// localPath = '/Users/aimanaaw/lighthouse/w2/d3-net/page-fetcher'