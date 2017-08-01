
var infowindow;

function getData() {
	
	$.ajax({
		url: 'https://data.nashville.gov/resource/m4hn-ihe4.json', 
		type: 'GET', 
		dataType: 'json'
		}).done(function(data) {
			buildData(data);
		}).fail(function(error) {
			console.log("error-->", error); 
		})
}

function buildData(data) {

	data.forEach(function(item) {
		
		// create the marker
		let marker = new google.maps.Marker({
			position: new google.maps.LatLng(item.latitude, item.longitude),
			title: item.title,
			map: map
		});

		// add event listener
		marker.addListener('click', function(){
			infowindow.setContent(item.title)
			infowindow.open(map, marker);
		});
	});
}

function initMap() {

	// initiate the map
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11, // default zoom
		center: new google.maps.LatLng(36.174465, -86.767960), // center of map (nashville)
		mapTypeId: 'roadmap' // satellite, hybrid, terrain
	});

	// set global variable
	infowindow = new google.maps.InfoWindow({
		content: 'loading'
	});

	// fetch the data
	getData();
}