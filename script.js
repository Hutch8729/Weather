var lat = '';
var lon = '';
var f = true;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        // showWeather();
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
				
    } 
	}
  function showPosition(position) {
		var tester = document.getElementById('tester');
    //tester.innerHTML = "Latitude: " + position.coords.latitude + "</br>Longitude: " + position.coords.longitude;
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

$(document).ready(function(){
  getLocation();
  // var apiurl = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e6b16395e0d9e609c012595f72cef7a4"
  // //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=e6b16395e0d9e609c012595f72cef7a4", function(a){
  //     $.getJSON(apiurl, function(a){
  //       var farTemp = ((a.main.temp-273.15) * (9/5) + 32).toFixed();
  //       $('#farenheit').text(farTemp + " F");
  //       var celTemp = (a.main.temp-273.15).toFixed(1);
  //       $('#celsius').text(celTemp + " C");
  //       $('#tempIcon').attr('src', 'http://openweathermap.org/img/w/' + a.weather[0].icon + '.png');
  //       $('#locName').text("The temperature in " + a.name + " is:");
  //       console.log(a.weather[0].id);
  //       if(a.weather[0].id > 199 && a.weather[0].id < 300){
  //         $(".body").css("background-color", "DimGray");
  //       }
  //       else if(a.weather[0].id > 299 && a.weather[0].id < 400){
  //         $(".body").css("background-color", "DeepSkyBlue");
  //       }
  //       else if(a.weather[0].id > 499 && a.weather[0].id < 600){
  //         $(".body").css("background-color", "SteelBlue");
  //       }
  //       else if(a.weather[0].id > 599 && a.weather[0].id < 700){
  //         $(".body").css("background-color", "#e6e6e6");
  //       }
  //       else if(a.weather[0].id > 799 && a.weather[0].id < 900){
  //         $(".body").css("background-color", "#262626");
  //         if(a.dt > a.sys.sunrise && a.dt < a.sys.sunset){
  //           $(".body").css("background-color", "PaleGoldenRod");
  //         }
  //         else {
  //           $(".body").css("background-color", "#262626");
  //           $('celTemp').css("color", "White");
  //           $('farTemp').css("color", "White");
  //           $('locName').css("color", "White");
  //         }
  //       }

  //   		console.log(a);
  //       console.log
  //     }
  //            )
}
)

function showWeather(){
  var apiurl = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=e6b16395e0d9e609c012595f72cef7a4"
  //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=e6b16395e0d9e609c012595f72cef7a4", function(a){
      $.getJSON(apiurl, function(a){
        var farTemp = ((a.main.temp-273.15) * (9/5) + 32).toFixed();
        $('#farenheit').text(farTemp + " F");
        var celTemp = (a.main.temp-273.15).toFixed(1);
        $('#celsius').text(celTemp + " C");
        $('#tempIcon').attr('src', 'http://openweathermap.org/img/w/' + a.weather[0].icon + '.png');
        $('#locName').text("The temperature in " + a.name + " is:");
        console.log(a.weather[0].id);
        if(a.weather[0].id > 199 && a.weather[0].id < 300){
          $(".body").css("background-color", "DimGray");
        }
        else if(a.weather[0].id > 299 && a.weather[0].id < 400){
          $(".body").css("background-color", "DeepSkyBlue");
        }
        else if(a.weather[0].id > 499 && a.weather[0].id < 600){
          $(".body").css("background-color", "SteelBlue");
        }
        else if(a.weather[0].id > 599 && a.weather[0].id < 700){
          $(".body").css("background-color", "#e6e6e6");
        }
        else if(a.weather[0].id > 799 && a.weather[0].id < 900){
          $(".body").css("background-color", "#262626");
          if(a.dt > a.sys.sunrise && a.dt < a.sys.sunset){
            $(".body").css("background-color", "PaleGoldenRod");
          }
          else {
            $(".body").css("background-color", "#262626");
            $('celTemp').css("color", "White");
            $('farTemp').css("color", "White");
            $('locName').css("color", "White");
          }
        }

        console.log(a);
      }
             )
}