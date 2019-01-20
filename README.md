# Url Shortener

## The project

A url shortening service

On the web: <https://basic-url-shortener.herokuapp.com>

Android app: <>

This is a url shortening service with `Meteor` Backend and `React` frontend.

Enter a url in the input box and press enter. Voila! Your url is saved and a shortened version is displayed. A list of all root domains is also displayed.

You can filter by domain simply by clicking on a domain button.

## Installing and running the project

1. Install `meteor` by following the instructions on the meteor site: <https://www.meteor.com/install>
1. Clone this repo
1. `cd` into the project directory on your command line and issue the command `meteor npm install`
1. After the installation, start the application by issuing the command `meteor`
1. Go to http://localhost:3000 to view your project.
1. To view in another port use `meteor --port <port_number>`

## Assignment requirements checklist

### Mandatory requirements

1. The frontend web application displays a URL input form for users to enter a long URL, and open submitting the form a shortened URL is registered and displayed. It is implemented in `React.js`
1. The matching backend persists the data and handles redirect. It is implemented with `Meteor.js`

### Additional requirements

1. Statistics about the number of shortened URLs and the number of unique domains is displayed.
1. A few tests is written for the app and can be run with the following command `meteor test --once --full-app --driver-package meteortesting:mocha`
1. Five improvements

    1. The system maintains a collection of root domains where each is unique.
    1. It is possible to filter URLs based on their root domains.
    1. The application has an android build which reads from the same database as the desktop app.

1. A docker image is not included, but the app is accessible here <https://basic-url-shortener.herokuapp.com>
