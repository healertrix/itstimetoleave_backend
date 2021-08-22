const moment = require("moment");

/**
 * importing dependencies
 * */


function sendtime(n) {
 
    var travelTime = moment().add(n, "minutes").format("hh:mm A"); // it will add 11 mins in the current time and will give time in 03:35 PM format; can use m or minutes
    return travelTime
}

module.exports = {sendtime};