/**
 * importing dependencies
 * */
const fetch = require("node-fetch");
function mailing(to, time, offset) {
  return new Promise(function (resolve, reject) {
    fetch(
      //Using elastic mail api to schedule an email.
      `https://api.elasticemail.com/v2/email/send?apikey=05E12215F2D924F5D7A35A6AD729A37CB0902B70FF7156F26840310EE37C0057B4CAC46A9335496771306BCCD6E24ABE&subject=Its time to leave &from=abhinav.webdj@gmail.com&fromName=Abhinav&sender=abhinav.webdj@gmail.com&senderName=Abhinav&to=${to}&bodyHtml=<h2>Hello </h2><br><p>Its time to go!! <br> It will take ${time} minutes to reach your destination so you should leave now.</p>&headers_firstname=firstname: myValueHere&timeOffSetMinutes=${offset}&isTransactional=true&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((err) => console.log(err));
  });
}
//exporting function.
module.exports = { mailing };
