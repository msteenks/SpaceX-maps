// google maps + marker

// function initMap() {
//   var Amsterdam = {lat: 28.5728722, lng: -80.6489808};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: Amsterdam
//   });
//   var marker = new google.maps.Marker({
//     position: Amsterdam,
//     map: map
//   });
// }

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
        var map = new google.maps.Map(document.getElementById('map'), {
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
        var bar = {
          url: "./styles/images/beer.png",
          scaledSize: new google.maps.Size(40, 40), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(-10, 40) // anchor
        };
        var landing = {
          url: "./styles/images/spaceship.png",
          scaledSize: new google.maps.Size(60, 60), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 40) // anchor
        };
        var food = {
          url: "./styles/images/burger.png",
          scaledSize: new google.maps.Size(50, 50), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(-10, 40) // anchor
        };
        var marker = new google.maps.Marker({
          position: kennedy,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: landing
        });
        var marker = new google.maps.Marker({
          position: goldLion,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: bar
        });
        var marker = new google.maps.Marker({
          position: irishPub,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: bar
        });
        var marker = new google.maps.Marker({
          position: theGrandMartini,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: bar
        });
        var marker = new google.maps.Marker({
          position: shamrock,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: bar
        });
        var marker = new google.maps.Marker({
          position: newYork,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: food
        });
        var marker = new google.maps.Marker({
          position: mamaRosa,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: food
        });
        var marker = new google.maps.Marker({
          position: sonnys,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: food
        });
        var marker = new google.maps.Marker({
          position: theHeroesGrill,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: food
        });
        var marker = new google.maps.Marker({
          position: ihop,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: food
        });
      }

     function toggleBounce() {
       if (marker.getAnimation() !== null) {
         marker.setAnimation(null);
       } else {
         marker.setAnimation(google.maps.Animation.BOUNCE);
       }
     }

      function getAPIdata() {

      	// get latest weather
      	fetch('http://api.openweathermap.org/data/2.5/forecast?q=the%20Hague,nl&appid=b0c8dafa512a0134e90df6ece3c2b7a2')

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

      	//console.log(now);

      	// get type of weather in string format
      	var type = response.list[0].weather[0].main

      	//console.log(response.list[0]);

      	// get Celcius
      	var degC = Math.floor(now.temp - 273.15);

      	// render weather in DOM
      	var weatherBox = document.getElementById('weather');
      	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
      }

      // function onAPIError() {
      // 	var weatherBox = document.getElementById('weather');
      // 	weatherBox.className = 'hidden';
      // }

      // init data stream
      getAPIdata();
