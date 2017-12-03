(function() {

  function getBusData() {
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      'app',
      true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);

        console.log(data);
      } else {
        console.log('ERROR');
      }
    };
    request.onerror = function (err) {
      console.log(err);
    };

    request.send();
  }

  function generateDisplay(data) {

  }

  getBusData();


}());