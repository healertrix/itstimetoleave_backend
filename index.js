/**
 * importing dependencies
 * */
const express = require("express");
const app = express();
const cors = require("cors");
const util_distance = require("./distance.js");


app.use(cors()); // Using global cors policy.
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const port = 3000; //Port number.

app.post("/schedule", async (req, res) => {
  let obj = req.body;
  let input = distanceinput(obj); //prepares input for distanceapi

  let api_Response = await util_distance.distanceapi(
    input,
    obj.email,
    obj.time
  ); // Sending input to Google maps matrix api and waiting for Response
console.log("response",api_Response);
  // Handling api response and sending status to user
  if (api_Response.value == true) {
    res.json(api_Response)
  }
  if (api_Response == "Google_api_failed") {
    res.status(500).send({
      success: false,
      status: 500,
      message: "Google Maps API failed",
    });
  }
  if (api_Response.value == false) {
    res.status(500).send({
      success: false,
      status: 500,
      message: "Unable to send Email",
    });
  }
  //
});

//server listening at port
app.listen(port, () => {
  console.log(`Server started and available at http://localhost:${port}`);
});

// util function provides input in required format for distanceapi function
function distanceinput(obj) {
  return {
    source: `${obj.source_lat},${obj.source_long}`,
    destination: `${obj.destination_lat},${obj.destination_long}`,
  };
}






