# Ski_Resort_Weather_Report

## Overview

This web application allows a user to search weather forecasts and snow conditions at specified resort. The search also displays an imbeded google map with a location marker and a current twitter feed of the specified resort's twitter handle. All of this information is displayed on the page in an easy to read dashboard format. The styling of the page was done using Google's Materialize CSS framework. In it's current state the application is limited by the subscription tier used with the Weather Unlocked API to a single search, but the app is designed to be scalable with subscription tiers. Forecast information is based on 1:00pm local time for the present day at the resort. 

### Gallery

![Demo](assets/images/shouldiskidemo.gif "Should I Ski Today?")


## Tech and Features Used


| Feature       | Summary                                                                                                  | 
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Materialize CSS Framework | Used Materialize to style and index.html and make it responsive.                              |
| Javascript    | Used Javascript to update main index.html with resort weather information, recent tweets and a google map. |
| JQuery        | Used JQuery to simplify working with DOM and perform ajax API calls.                             |
| Weather Unlocked API | Robust third party weather API that includes snow reports and forecasts for resorts. The subscription tier used meant that we needed to control what resorts users can search. This was done with a drop down that is tied to an array of searchable resorts. |
|Twitter Open API| Twitter open API allowed us to embed tweets from any twitter handle. We tied this to the array of resorts we created to allow us to display tweets from any resort in the future provided they have a twitter handle.|
|Google Maps API| Google maps API allowed us to embed a map that centers around and marks a designated location. This is also controlled by our resorts array. |


## How to use
* Ask yourself "Should I go skiing today?"
* Select ski resort from drop down list of available resorts
* Click "Should I Ski?"
* App presents dashboard info for a selected resort
* decide if you should go skiing today

## Known Bugs


## Hosted

This site is hosted courtesy of github pages.

To view the site please click [here](https://meta-byte.github.io/Ski_Resort_Weather_Report/).


## Contact Info

