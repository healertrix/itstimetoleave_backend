
# It's time to leave
An app which will notify you when to leave for an event, taking your travel time in account.
It uses Google Maps Matrix api to find the travel time and uses Elastic email api to send the email.
___
***This repository constains the Backend code of the project***

**1. The frontend code is present at this repository -  https://github.com/healertrix/ItsTimeTOLeave_Frontend**

**2. The Live Demo of the app is present at - https://itstimetoleave-frontend.pages.dev/**

**3. The Design Document is present at - https://github.com/healertrix/itstimetoleave_backend/blob/main/designdoc.md**

**4. The API Documentation is present at - https://github.com/healertrix/itstimetoleave_backend/blob/main/api.md**




## Installation

This app requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and start the server.

```sh
git clone https://github.com/healertrix/itstimetoleave_backend.git
cd itstimetoleave_backend
npm i
node index.js
```
Now open the `.env` file and enter your google maps api key.
```sh
GOOGLEAPI = Your api key here

```
This will locally run the Server on your Localhost 3000