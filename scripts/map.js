

// var infowindow = new google.maps.InfoWindow();	

function getData() {
	return $.ajax({
		url: 'https://data.nashville.gov/resource/m4hn-ihe4.json', 
		type: 'GET', 
		dataType: 'JSON'
		}).done(function(data) {
			buildData(data); // buid out markers
		}).fail(function(error) {
			console.log("error-->", error); 
		})
}


function buildData(data) {
	// for each item, create a new marker
	data.forEach(function(item) {
		let latitude = item.latitude;
		let longitude = item.longitude;

		let marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			title: item.title,
			map: map
		})

		marker.addListener('click', function(){
			// open the window
			console.log("item.title.toLowerCase()-->", item.title.toLowerCase()); 
	 		// infowindow.setContent(item.title);
	 		// infowindow.open(map, marker);
	 	});
	});
}


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10, // the lower the number, the more zoomed out
    center: new google.maps.LatLng(36.174465, -86.767960), // center of map (Nashville)
    mapTypeId: 'roadmap' // satellite, hybrid, terrain
  });

  getData();
}

