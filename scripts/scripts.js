// google maps + markers

function initMap() {
  // Styles a map in night mode.
  var kennedy = {lat: 28.5728722, lng: -80.6489808};
  var goldLion = {lat: 28.5584096, lng: -80.8075422};
  var irishPub = {lat: 28.5840715, lng: -80.80245839999998};
  var theGrandMartini = {lat: 28.6114212, lng: -80.80730419999998};
  var shamrock = {lat: 28.5574419, lng: -80.8249113};
  var newYork = {lat: 28.5457582, lng: -80.7906453};
  var mamaRosa = {lat: 28.5570833, lng: -80.8043189};
  var sonnys = {lat: 28.5583445, lng: -80.839898};
  var theHeroesGrill = {lat: 28.6081236, lng: -80.81794680000002};
  var ihop = {lat: 28.5492859, lng: -80.85461299999997};
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('googlemap'), {
    center: kennedy,
    zoom: 12,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
  var contentString = document.getElementById('weather');
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var barIcon = {
    url: "./styles/images/beer.png",
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(-10, 40) // anchor
  };
  var landingIcon = {
    url: "./styles/images/spaceship.png",
    scaledSize: new google.maps.Size(60, 60), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 40) // anchor
  };
  var foodIcon = {
    url: "./styles/images/burger.png",
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(-10, 40) // anchor
  };
  var landing = new google.maps.Marker({
    position: kennedy,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: landingIcon
  });
  var bar = new google.maps.Marker({
    position: goldLion,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: barIcon
  });
  var bar = new google.maps.Marker({
    position: irishPub,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: barIcon
  });
  var bar = new google.maps.Marker({
    position: theGrandMartini,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: barIcon
  });
  var bar = new google.maps.Marker({
    position: shamrock,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: barIcon
  });
  var food = new google.maps.Marker({
    position: newYork,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: foodIcon
  });
  var food = new google.maps.Marker({
    position: mamaRosa,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: foodIcon
  });
  var food = new google.maps.Marker({
    position: sonnys,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: foodIcon
  });
  var food = new google.maps.Marker({
    position: theHeroesGrill,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: foodIcon
  });
  var food = new google.maps.Marker({
    position: ihop,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: foodIcon
  });
  landing.addListener('click', function() {
    infowindow.open(map, landing);
    document.getElementById('weather').style.display = "block";
  });
  bar.addListener('mouseover', function() {
    document.getElementById('beer').style.display = "block";
  });
  bar.addListener('mouseout', function() {
    document.getElementById('beer').style.display = "none";
  });
  landing.addListener('click', function() {
    if (landing.getAnimation() !== null) {
      landing.setAnimation(null);
    } else {
      landing.setAnimation(google.maps.Animation.BOUNCE);
    }
  });

  directionsDisplay.setMap(map);

  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
  directionsDisplay.addListener('directions_changed', function() {
    computeTotalDistance(directionsDisplay.getDirections());
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var selectedMode = document.getElementById('mode').value;
  directionsService.route({
    origin: {lat: 28.61688335, lng: -80.69412774},  // Kennedy Lading Strip.
    destination: {lat: 28.5728722, lng: -80.6489808},  // Kennedy Space Center.
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000;
  document.getElementById('total').innerHTML = total + ' km';
}


function getAPIdata() {

  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=cape%20canaveral,us&appid=b0c8dafa512a0134e90df6ece3c2b7a2')

  // parse to JSON format
  .then(function(response) {
    return response.json();
  })

  // render weather per day
  .then(function(response) {

    // render weatherCondition
    onAPISucces(response);
  })

  // catch error
  .catch(function (error) {
    // onAPIError();
    console.error('Request failed', error);
  });
}

function onAPISucces(response) {

  // get all temps (now)
  var now = response.list[0].main;

  // get type of weather in string format
  var type = response.list[0].weather[0].main;

  // get windspeed
  var windspeed = response.list[0].wind.speed;

  // get wind direction
  var winddeg = response.list[0].wind.deg;

  var clouds = response.list[0].clouds.all;

  console.log(response.list[0]);

  // icon forecast
  var forecastIcon = 'http://openweathermap.org/img/w/' + response.list[0].weather[0].icon + '.png';

  // get Celcius
  var degC = Math.floor(now.temp - 273.15);

  // render weather in DOM
  var weatherBox = document.getElementById('weather');
  weatherBox.innerHTML = '<strong><font size="4">Weather</font></strong> <br><br>'
  + '<table>'
  + '<tr><td width="100px"> Temperature </td><td>' + degC + ' ' + '&#8451; </td></tr>'
  + '<tr><td> Forecast </td><td>' + type + '</td></tr>'
  + '<tr><td> Clouds </td><td>' + clouds + ' ' + '&#37; </td></tr>'
  + '<tr><td> Wind Speed </td><td>' + windspeed + ' ' + 'm/s </td></tr>'
  + '<tr><td> Wind Direction </td><td>' + Math.round(winddeg) + '&deg; </td></tr>'
  + '</table>';
}

// init data stream
getAPIdata();
