(function() {
  'use strict';

  angular
    .module('transportation')
    .controller('TransportationController', TransportationController);

  TransportationController.$inject = ['TransportationService'];

  function TransportationController(TransportationService) {

    var vm = this;

    vm.buses = [];
    vm.getBuses = getBuses;

    activate();

    ////////////////////////////////////////////
    ////////////////////////////////////////////

    function activate() {
      vm.getBuses();
    }

    function getBuses() {

      TransportationService.getBuses()
        .success(function(data) {
          var busArr = data.data.entry.arrivalsAndDepartures;
          var bus = {};
          var busTime = new Date();

          for (var i = 0; i < busArr.length; i++) {
            //‘

            bus.vehicleId = busArr[i].vehicleId;
            bus.distanceFromStop = Math.floor(busArr[i].distanceFromStop);
            bus.scheduledArrivalTime = busArr[i].scheduledArrivalTime;
            bus.predictedArrivalTime = d.getUTCMinutes() + ':' + d.getUTCSeconds();
            vm.buses.push(bus);
            bus = {};
          }
          console.log(vm.buses);


        }).error(function(err){
          console.log(err);
        });

    }

  }

})();