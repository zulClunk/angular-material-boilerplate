'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialDesignApp
 * @description
 * # angularMaterialBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaterialDesignApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        template: '<amd-dashboard></amd-dashboard>'
      })
      .when('/about', {
        template: '<amd-about></amd-about>'
      })
      .when('/form', {
        template: '<amd-form></amd-form>'
      })
      .when('/pages/login', {
        template: '<amd-login></amd-login>'
      })
      .when('/pages/register', {
        template: '<amd-register></amd-register>'
      })
      .when('/profile', {
        template: '<amd-profile></amd-profile>'
      })
      .when('/table', {
        template: '<amd-table></amd-table>'
      })
      .when('/accordian', {
        template: '<amd-collapse-accordian></amd-collapse-accordian>'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');

    var primaryColorMap = $mdThemingProvider.extendPalette('blue', {
      '500': '#01579b'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('primaryColorMap', primaryColorMap);

    var accentsColorMap = $mdThemingProvider.extendPalette('pink', {
      'A200': '#e91e63'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('accentsColorMap', accentsColorMap);

    $mdThemingProvider.setDefaultTheme('altTheme');

    $mdThemingProvider.theme('altTheme')
      .primaryPalette('primaryColorMap')
      .accentPalette('accentsColorMap');

    // Enable browser color
    $mdThemingProvider.enableBrowserColor({
      theme: 'altTheme', // Default is 'default'
      palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
      hue: '500' // Default is '800'
    });
  });
