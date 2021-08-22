


# TIME TO GO

##### Author: Abhinav Kumar

## Problem statement

Build a web app where you take 4 inputs - Source, Destination, time of the day to reach the destination and Email Address. Assume that source and destination are provided as lat/long and not as addresses (to keep things simple). The app needs to find the exact time a user needs to leave to be at that destination at that time. An email needs to be sent to the above email ID at this time saying, "Time to leave!"
http://link.conwo.co/cs-interview-problem


## Goals

Given goals need to be achieved in the proposed solution
1. A web app which can takes input from the user about their source and final destination along with their email and time of the event 
2. A server application which can calculate the travel time between the given two locations
3. An algorithm to calculate the time to notify the user taking account of the travel time so that the user can reach on time. 
4. A server application which can send email to the user at given time. 

## Non-Goals
1. Not intended to account for delay due to traffic while calculating travel time.

## Assumptions
1. Google maps api provides most accurate data
2. Time to arrive at destination is within today
3. There is always some time to leave

## Design
The application would consist of a web server which would handle api calls and uses the Google matrix api to calculate the time required to reach the destination.
The server then use a Elastic Mail api to schedule the email to send at the calculated time


## Dependencies
1. `` Google maps matrix api``: to calculate the travel time between two destinations.
2. `` Elastic email api``: to send the email to user.


## Constraints / Limitations
1. The application is dependant on Google maps and Elastic mail api, and hence may have to stay within the imposed Rate limits of these service providers.

## System Design and Architecture 

![System design](https://i.ibb.co/5sVRmsx/Web-App-Reference-Architecture-1.png?raw=true)
1. USER enters required data and sends it to the SERVER using the exposed API
2. SERVER uses Google maps api to calculate time of travel
3. SERVER uses ELASTIC MAIL API service to send the email at the desired time

## API documentation

You can find the API documentation at https://github.com/healertrix/itstimetoleave_backend/blob/main/api.md
