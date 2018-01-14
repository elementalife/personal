angular.module('app').controller('rootCtrl', function ($scope, $http, $cookies, $interval, $timeout, dataService) {
  $scope.title = 'Trove Debugging Tool'
  $scope.content = 'Trove Debugging Tool'

  // $http.get('https://www.bing.com/search?q=test&format=', {
  //   params: {
  //     q: 'test',
  //     format: 'pbxml'
  //   }
  // }).then(function (resp) {
  //   $scope.resp = resp
  // })
  $scope.cookies = []
  chrome.cookies.getAll({'domain': 'www.bing.com'}, function (cookies) {
    var arr = []
    for (var i in cookies) {
      var c = cookies[i]
      arr.push({
        name: c.name,
        value: c.value
      })
    }
    $scope.cookies = arr
    $scope.$apply()
    console.log(arr)
  })
})
