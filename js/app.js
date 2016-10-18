var crntLat = ''
var crntLong = ''
var myWeatherKey = '0422dca222e2b33cd7a57d8e09a94ba2/'

$.ajax({

    url: 'https://api.darksky.net/forecast/' + myWeatherKey + crntLat + ',' + crntLong
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});





navigator.geolocation.getCurrentPosition(function getMyWeather(pos){

   crntLat = pos.coords.latitude
   crntLong = pos.coords.latitude

   $.getJSON('https://api.darksky.net/forecast/' + myWeatherKey + crntLat + ',' + crntLong , function(forecast){
      console.log(forecast)
   })

});
