var contentHolder = document.querySelector('.pageContent')
var bodyImage = document.querySelector('body')

var crntLat = ''
var crntLong = ''
var crntLoc = ''
var myWeatherKey = '0422dca222e2b33cd7a57d8e09a94ba2/'
var imageAdr = 'url("https://maps.googleapis.com/maps/api/streetview?size=1440x900&location=' + crntLoc + '&key=AIzaSyCM99kn1SXvQyk74BTZQWBdRqUseBL1ME4")'
// THIS STUFF IS FOR LATER
// bodyImage.style.backgroundImage = imageAdr
// THIS IS FOR LATER
var crntTime = new Date()
   crntTime = crntTime.toString()
   crntTime = crntTime.split(' ')
   var day = crntTime[0]
   var dayNumb = crntTime[2]
   var month =  crntTime[1]
   var year = crntTime[3]
   var time = crntTime[4]
      time = time.split(':')
      var hour = time[0]
      var min = time[1]
      var sec = time[2]
      







navigator.geolocation.getCurrentPosition(function getMyWeather(pos){

   crntLat = pos.coords.latitude
   crntLong = pos.coords.longitude

   crntLat = crntLat.replace(/\s/g, '');
   crntLong = crntLong.replace(/\s/g, '');

});

if(crntLat === ''){
   crntLat = '42.3601'
   crntLong = '-71.0589'
}



$.getJSON('https://api.darksky.net/forecast/' + myWeatherKey + crntLat + ',' + crntLong + '?callback=?', function(forecast){
   console.log(forecast)
});

$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + crntLat + ',' + crntLong , function(locData){
   crntLoc = locData.results[0].formatted_address
   crntLoc = crntLoc.split(' ')
   crntLoc = crntLoc.join('+')
   imageAdr = 'url("https://maps.googleapis.com/maps/api/streetview?size=1440x900&location=' + crntLoc + '&key=AIzaSyCM99kn1SXvQyk74BTZQWBdRqUseBL1ME4")'
   fillBasicContent()
})



console.log(crntTime)


var fillBasicContent = function(){




}
