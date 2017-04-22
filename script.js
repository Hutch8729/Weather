var lat = '';
var lon = '';
var f = true;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
				
    } 
	}
  function showPosition(position) {
		var tester = document.getElementById('tester');
    tester.innerHTML = "Latitude: " + position.coords.latitude + "</br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude
    lon = position.coords.longitude
 	}

document.getElementById('tempType').addEventListener('click', function () {
  if(f){
    f = false;
    $('#farenheit').show();
    $('#celsius').hide();
  }
  else {
    f = true;
    $('#farenheit').hide();
    $('#celsius').show();
  }
});

$('#weather').click(function(){
  var apiurl = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e6b16395e0d9e609c012595f72cef7a4"
  //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=e6b16395e0d9e609c012595f72cef7a4", function(a){
      $.getJSON(apiurl, function(a){
        var farTemp = ((a.main.temp-273.15) * (9/5) + 32).toFixed();
        $('#farenheit').text(farTemp + " F");
        var celTemp = (a.main.temp-273.15).toFixed(1);
        $('#celsius').text(celTemp + " C");
        $('#tempIcon').attr('src', 'http://openweathermap.org/img/w/' + a.weather[0].icon + '.png');
        $('#locName').text(a.name);
        if(a.weather[0].id > 199 && a.weather[0].id < 300){
          $(".body").css("background-color", "DimGray !important");
        }
        else if(a.weather[0].id > 299 && a.weather[0].id < 400){
          $(".body").css("background-color", "DeepSkyBlue !important");
        }
        else if(a.weather[0].id > 499 && a.weather[0].id < 600){
          $(".body").css("background-color", "SteelBlue !important");
        }
        else if(a.weather[0].id > 599 && a.weather[0].id < 700){
          $(".body").css("background-color", "#e6e6e6 !important");
        }
        else if(a.weather[0].id > 799 && a.weather[0].id < 900){
          console.log("fuck this shit");
          $(".body").css("background-color", "#262626 !important");
          if(a.dt > a.sys.sunrise && a.dt < a.sys.sunset){
            console.log("maybe not?");
            $(".body").css("background-color", "PaleGoldenRod !important");
          }
          else {
            $(".body").css("background-color", "#262626 !important");
          }
        }

    		console.log(a);
        console.log
      }
             )
}
)