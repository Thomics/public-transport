//(function() {
//
//  function getBusData() {
//    var request = new XMLHttpRequest();
//    request.open(
//      'GET',
//      'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_7040.json?key=TEST&minutesAfter=20',
//      true);
//
//    request.onload = function () {
//      if (request.status >= 200 && request.status < 400) {
//        // Success!
//        var data = JSON.parse(request.responseText);
//      } else {
//        console.log('ERROR');
//      }
//    };
//    request.onerror = function (err) {
//      console.log(err);
//    };
//
//    request.send();
//  }
//
//  getBusData();
//
//
//}());