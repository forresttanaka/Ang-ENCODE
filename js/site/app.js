/*global angular:false,_:false */

(function() {
'use strict';

    var encodeApp = angular.module('encodeApp', []);

    encodeApp.factory('encodeService', ['$http', function($http) {
        return {
            getEncodeData: function() {
                return $http.get('https://www.encodedcc.org/search/?type=antibody_approval&format=json')
                    .then(function(result) {
                        return result.data;
                    }
                );
            }
        };
    }]);

    encodeApp.controller('EncodeCtrl', ['$scope', 'encodeService', function ($scope, encodeService) {

        encodeService.getEncodeData().then(function(data) {
            $scope.data = data;
        });

    }]);

    encodeApp.filter('sentenceCase', function() {
        return function(text) {
            return (_.capitalize(text.toLowerCase()));
        };
    });

})();