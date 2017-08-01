# Nashville Historical Markers

![Preview of Map](https://github.com/abbyfleming/nashville-historical-markers/master/screenshot.png)

Ever wonder what the historical markers around Nashville say? Nashville has [open data](https://data.nashville.gov/History/Historic-Markers/vk65-u7my/data) with all of the listings under the Metro Historical's Commission's control. Using their data, markers have been added into Google Maps. When you click on the marker, the title will appear and more information is displayed below the map.

## Setup

* Clone down repo
* [Get an API Key](https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key)
* Add your new key to script at the bottom of index.html file. `src="https://maps.googleapis.com/maps/api/js?key=KEYGOESHERE&callback=initMap"`
* In a new terminal window, run your local server- [http-server](https://www.npmjs.com/package/http-server)
* Browse to your local server (localhost:8080)
* Enjoy!


## Technologies
* Google Maps API
* [https://data.nashville.gov/](https://data.nashville.gov/)
* jQuery

