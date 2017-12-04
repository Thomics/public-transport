//(function() {
//
//
//  //data.data.entry.arrivalsAndDepartures[0].distanceFromStop // the distance from the stop
//  //data.data.entry.arrivalsAndDepartures[0].predictedArrivalTime // Time in milliseconds of arrival
//  //data.data.entry.arrivalsAndDepartures[0].tripId // trip id
//  //data.data.entry.arrivalsAndDepartures[0].scheduledArrivalTime // time assumed arrival
//
//  function getBusData() {
//    var request = new XMLHttpRequest();
//    request.open(
//      'GET',
//      'app',
//      true);
//
//    request.onload = function () {
//      if (request.status >= 200 && request.status < 400) {
//        // Success!
//        var data = JSON.parse(request.responseText);
//
//        console.log(data);
//        generateDisplay(data);
//
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
//  //function generateDisplay(data) {
//  //
//  //  //document.getElementsByClassName('')
//  //  //document.querySelector('')
//  //
//  //  var buses = data.data.entry.arrivalsAndDepartures;
//  //  var length = buses.length > 3 ? 3 : data.data.entry.arrivalsAndDepartures.length;
//  //
//  //  for (var i = 0; i < length; i++) {
//  //
//  //    console.log(buses[i]);
//  //
//  //    var bus = document.createElement('div');
//  //    bus.className = 'bus';
//  //
//  //    var textnode = document.createTextNode(buses[i].vehicleId + ' | ' + buses[i].tripId);
//  //
//  //    bus.appendChild(textNode);
//  //
//  //
//  //
//  //  //<div class="bus">
//  //  //    <p class='data-item bus-id'>Bus | Trip ID</p>
//  //  //  <p class='data-item bus-distance'>Distance</p>
//  //  //    <p class='data-item bus-arrival'>Arrival Time</p>
//  //  //  <p class='data-item bus-estimated'>Estimated Arrival</p>
//  //  //  </div>
//  //
//  //  }
//  //
//  //
//  //}
//
//  getBusData();
//
//
//}());