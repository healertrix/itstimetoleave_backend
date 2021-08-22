/**
 * importing dependencies
 * */
const moment = require("moment");

// converts minutes to hours and minutes
function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return [rhours, rminutes];
}

function time(starttime, offsetmin) {
  //Takes starting time and the amount to time to remaining

  var time = moment.duration(
    `${timeConvert(offsetmin)[0]}:${timeConvert(offsetmin)[1]}:00` // Takes in the amount of time we need to subtract
  );

  var startTime = moment(starttime, "HH:mm"); // This is the starting time
  let subs = startTime.subtract(time); //Calculates the time before we need to notify the user
  let now = moment(); // present day time
  let offsetfinal = subs.diff(now); // Finds out the difference between the start time and the present time

  var tempTime = moment.duration(offsetfinal);
  var y = tempTime.hours() * 60 + tempTime.minutes();
  return y; // Returns the time in minutes after which we need to notify the user.
}

//exporting time function

module.exports = { time ,timeConvert};
