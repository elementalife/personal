// agGrid.LicenseManager.setLicenseKey('ag-Grid_Evaluation_License_Not_for_Production_1Devs15_November_2017__MTUxMDcwNDAwMDAwMA==3c862d06679ff2da4f8d4ac677bff980')
// agGrid.initialiseAgGridWithAngular1(angular)

angular.module('app', ['ngSanitize', 'ngAnimate', 'ngTouch', 'ngCookies', 'angular-d3-word-cloud', 'ui.bootstrap'])
//'ui.select', 'ngSanitize', 'ngAnimate', 'ngTouch', 'ngCookies','agGrid', 'chart.js', 'angular-d3-word-cloud', 'ui.bootstrap'

angular.element(document).ready(function () {  
    angular.bootstrap(document, ['app']);
});
app = angular.module('app')

