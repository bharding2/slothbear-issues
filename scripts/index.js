const slothbearIssues = angular.module('slothbearIssues', []);

slothbearIssues.controller('SlothbearIssuesController', ['$http', function($http) {
  this.issues = [];

  $http.get('https://api.github.com/repos/bharding2/slothbear-issues/issues')
    .then((issues) => {
      this.issues = issues.data;
    });
}]);
