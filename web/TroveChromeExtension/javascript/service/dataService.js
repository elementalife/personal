angular.module('app').service('dataService', function () {
  var self = this

  self.splitCamelCase = function (name) {
    // insert a space before all caps
    return name.replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase()
      })
  }
})
