/**
 * importing dependencies
 * */
require("dotenv").config();
const axios = require("axios");
const util_mailing = require("./mailing.js");
const util_time = require("./time.js");
const util_sendtime = require("./sendtime.js");

const google_Mapsapi = process.env.GOOGLEAPI;      //Using api key from environment variable

async function distanceapi(arr, to, time) {
  let source_loc = arr.source;
  let destination_loc = arr.destination;
  return new Promise(function (resolve, reject) {
    axios
      .get(
        //Using google maps matrix api
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=heading=90:${source_loc}&destinations=${destination_loc}&key=${google_Mapsapi}`
      )
      .then(function (response) {
        let timer = util_time.time(
          time,
          response.data.rows[0].elements[0].duration.value / 60
        ); // Calculating required time after which the email needs to be sent

        util_mailing //Schedules email using elastic email api
          .mailing(
            to, //receiver mail
            response.data.rows[0].elements[0].duration.value / 60, //time required to move
            timer //after how much time mail to be sent
          )
          .then((value) => {
            resolve(
              {
                value: value.success,
                duration: response.data.rows[0].elements[0].duration.value / 60,
                time: util_sendtime.sendtime(timer),
              }
              //  +""+
              //   response.data.rows[0].elements[0].duration.value / 60
            ); // returns response about the success of the Elastic email api call
          });
      })
      .catch(function (error) {
        resolve("Google_api_failed"); // Sends error message if Google api fails
      });
  });
}

//exporting function
module.exports = {
  distanceapi,
};
