(function () {
    'use strict';

    angular
        .module('app')
        .directive('maskMoney', maskMoney);

    maskMoney.$inject = ['$timeout'];

    function maskMoney($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                model: '=ngModel',
                options: '=maskMoney',
            },
            link: function (scope, element, attrs, ctrl) {

                var options = {
                    prefix: '',
                    suffix: '',
                    affixesStay: true,
                    thousands: '.',
                    decimal: ',',
                    precision: 2,
                    allowZero: true,
                    allowNegative: false
                };

                ctrl.$parsers.push(parser);
                ctrl.$formatters.push(formatter);

                /**
                 * Detects keyup on element (input)
                 */
                $(element).on('keyup', onChange);

                /**
                 * Parser value of ctrl
                 */
                function parser() {
                    var value = $(element).maskMoney('unmasked')[0];
                    return formatter(value);
                }

                /**
                 * Format number by decimals
                 * @param {Number} value 
                 */
                function formatter(value) {
                    if (value) {
                        value = Number(value);
                        value = value.toFixed(options.precision);
                        init();
                    }
                    return value;
                }

                /**
                 * Event input keydown handler
                 * @param {HTMLEvent} event 
                 */
                function onChange(event) {
                    $timeout(function () {
                        var value = $(element).val();

                        if (value) {
                            ctrl.$setViewValue(value);
                            ctrl.$render();
                        }
                    });
                }

                /**
                 * Initilize jQuery component
                 */
                function init() {
                    $timeout(function () {
                        $(element).maskMoney(options);
                        $(element).maskMoney('mask');
                    });
                }

                /**
                 * @listens
                 */
                scope.$watch('options', function (value) {
                    value = value || {};
                    options = angular.extend(options, value);
                    $(element).maskMoney(options);
                }, true);
            }
        };
    }
})();
