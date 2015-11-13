$(document).ready(function() {
  initialize(41.876465
,-87.621887);

});

//get random integer function :
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


var lat = 54.978252;
var long = -1.617780;

$('#go').click (function (){
  lat = document.getElementById('latValue').value;
  long = document.getElementById('longValue').value;
  console.log('new lat is '+lat);
  console.log('new long is '+long);
  initialize(lat, long);
  });










var extraMarkerSRCs = ['extras/1.png','extras/2.png', 'extras/3.png', 'extras/4.png', 'extras/5.png', 'extras/6.png', 'extras/7.png', 'extras/8.png'];


  //this is what should happen when a location is put in
function initialize(lat, long) {
          var mainLocations = [];

          var mapCanvas = document.getElementById('map-canvas');

          var currentPlace = new google.maps.LatLng(lat,long);

          //REQUIRED arguements for Google Map: mapCanvas, mapOptions
          var mapOptions = {

            center: currentPlace,
            zoom: 11,
            mapTypeID: google.maps.MapTypeId.SATELLITE,
            minZoom: 11,
            maxZoom: 15
          }

          var map = new google.maps.Map(mapCanvas, mapOptions);



          var request1 = {
           location: currentPlace,
           radius: '10000',
           types: ['atm']
         }

         var request2 =  {
         location: currentPlace,
         radius: '10000',
         types: ['cafe']
        };

          var request3 = {
             location: currentPlace,
             radius: '10000',
             types: ['store']
          }

        var request4 =  {
        location: currentPlace,
        radius: '10000',
        types: ['train_station']
        };

        var request5 = {
          location: currentPlace,
          radius: '10000',
          types: ['bus_station']
        }

        var request6 = {
          location: currentPlace,
          radius: '10000',
          types: ['park']
        }

        var requestMain = {
          location: currentPlace,
          radius: '7000',
          types: ['school']
        }

         service = new google.maps.places.PlacesService(map);
         service.nearbySearch(request1, callback);
         service.nearbySearch(request2, callback);
         service.nearbySearch(request3, callback);
         service.nearbySearch(request4, callback);
         service.nearbySearch(request5, callback);
         service.nearbySearch(request6, callback);

         service.nearbySearch(requestMain, callbackWaldo);
         service.nearbySearch(requestMain, callbackWenda);
         service.nearbySearch(requestMain, callbackWhitebeard);
         service.nearbySearch(requestMain, callbackOdlaw);
         service.nearbySearch(requestMain, callbackWoof);


         function addExtraMarker(place) {
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: extraMarkerSRCs[getRandomInt(0,7)]
          })};



          console.log (extraMarkerSRCs[getRandomInt(0,7)]);

         function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              var place = results[i];
              addExtraMarker(place);
            }
          }}


          function callbackWaldo(results, status) {
           if (status == google.maps.places.PlacesServiceStatus.OK) {
               var place = results[2];
               addWaldoMarker(place);
           }};

           function callbackWenda(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                var place = results[5];
                addWendaMarker(place);
            }};

            function callbackWhitebeard(results, status) {
             if (status == google.maps.places.PlacesServiceStatus.OK) {
                 var place = results[9];
                 addWhitebeardMarker(place);
             }};

             function callbackOdlaw(results, status) {
              if (status == google.maps.places.PlacesServiceStatus.OK) {
                  var place = results[13];
                  addOdlawMarker(place);
              }};

              function callbackWoof(results, status) {
               if (status == google.maps.places.PlacesServiceStatus.OK) {
                   var place = results[3];
                   addWoofMarker(place);
                   console.log('callbackcomplete');

               } else {
                 console.log("connection failed");
               }};



           function addWaldoMarker(place) {
            var waldo = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              icon: 'waldo.png'
            })
            console.log('waldo has been added');
          };

          function addWendaMarker(place) {
           var wenda = new google.maps.Marker({
             map: map,
             position: place.geometry.location,
             icon: 'wenda.png'
           })
           console.log('wenda has been added');
         };

         function addWhitebeardMarker(place) {
          var whitebeard = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            icon: 'whitebeard.png'
          })
          console.log('whitebeard has been added');
        };

        function addOdlawMarker(place) {
         var odlaw = new google.maps.Marker({
           map: map,
           position: place.geometry.location,
           icon: 'odlaw.png'
         })
         console.log('odlaw has been added');
       };

       function addWoofMarker(place) {
        var woof = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: 'woof.png'
        })
        console.log('Woof has been added');
      };

};
