# Schedule email
Schedules email for reminding user to leave for a job taking travel time in account

**URL** : `/schedule`

**Method** : `POST`

**Auth required** : None

**Permissions required** : None

### Request Parameters
| Name             | Type   | In   | Description                                                                 |
|------------------|--------|------|-----------------------------------------------------------------------------|
| source_lat       | string | body | Source latitude of the user                                                 |
| source_long      | string | body | Source longitude of the user                                                |
| destination_lat  | string | body | Destination latitude of the user                                            |
| destination_long | string | body | Destination longitude of the user                                           |
| time             | string | body | Time of the event user wants to attend in HH:mm format using 24 hours clock |
| email            | string | body | Email of the user to be notified                                            |


## Success Response

**Code** : `200`
Successful data response.

| Name     | Description                                                                | Example response  |
|----------|----------------------------------------------------------------------------|-------------------|
| value    | status to check if email scheduling was successful. Responds true or false | true              |
| duration | Travel time required to reach destination from source In minutes          | 10                |
| time     | Time at which email will be sent to the user. In HH:mm:a format            | 09:43 PM          |


Example Json object recieved 


```json
{
    "value": true,
    "duration": 10,
    "time": "09:43 PM"
}
```
## Example code JS
Example code sample
```js
  fetch("http://localhost:3000/schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
    "source_lat": "25.597313",
    "source_long": "85.086286",
    "destination_lat": "25.60001544921823",
    "destination_long": "85.08843754612461",
    "time": "21:49",
    "email": "example@gmail.com"
}
  })
```
##### Example response 
Example response from server

```js
 {
    "value": true,
    "duration": 5,
    "time": "09:43 PM"
}
```

## Failed Response
**Code** : `500`
Failed data response.
| Name    | Description                           | Example response       |
|---------|---------------------------------------|------------------------|
| message | Error message to tell what went wrong | Google Maps API failed |
| success | tells if transaction was successful   | false                  |
| status  | Status code of response               | 500                    |

Example Json object recieved
```
{
    "success": false,
    "status": 500,
    "message": "Google Maps API failed"
}
```
## Notes

Known failure messages:
* Google Maps API failed
* Unable to send email

Error may occur
* When entered wrong coordinates.
* If no possible routes from source to final destination is found.

