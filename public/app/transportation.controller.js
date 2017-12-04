(function() {
  'use strict';

  angular
    .module('transportation')
    .controller('TransportationController', TransportationController);

  TransportationController.$inject = ['TransportationService'];

  function TransportationController(TransportationService) {

    console.log('trans');
    var vm = this;

    vm.buses = {};
    vm.getBuses = getBuses;

    activate();

    ////////////////////////////////////////////
    ////////////////////////////////////////////

    function activate() {
      console.log('stiv');
      vm.getBuses();
    }

    function getBuses() {

      TransportationService.getBuses()
        .success(function(data) {

          console.log(data);

        }).error(function(err){
          console.log(err);
        });

    }

  }

})();