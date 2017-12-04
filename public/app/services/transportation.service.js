(function() {
  'use strict';

  angular
    .module('transportation')
    .service('TransportationService', TransportationService);

  TransportationService.$inject = ['$http'];

  function TransportationService($http) {

    var vm = this;

    vm.getBuses = getBuses;

    function getBuses() {
      return $http.get('/app');
    }

  }

})();
