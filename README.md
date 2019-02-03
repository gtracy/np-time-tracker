# NP Time Tracker
A simple SMS app that facilitates the tracking of individual runner times for November Project's PR days. 

The app receives SMS to record times. It sends SMS to inform and inspire runners.

The repo depends on an interface with [Airtable](https://airtable.com) as the datastore for the data. Why? Why not... There are probably never going to be more than 100 runners. When/If this scales to other cities, we can revisit the implementation. In the mean time, let's go free.

If you are forking and deploying your own app, you just need to update the ```config.js``` file with your API keys for Airtable. 

## Deployed via AWS
I'm deploying the app to Lambda via [Claudia](https://claudiajs.com/) but it's just a node process so you could probably run it anywhere.

`claudia update --handler lambda.handler --deploy-proxy-api --region us-east-2`

## Get Started Locally

`npm install`

`node app.local.js`

When running locally, you'll need to setup a local tunnel like [ngrok](https://ngrok.com) to route traffic to your local machine.

