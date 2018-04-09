// <article ng-repeat="issue in sbIssues.issues" id="{{ issue.number }}">
//   <h2>{{ issue.title }}</h2>
//   <p>Posted by {{ issue.user.login }} at {{ issue.created_at }}</p>
//   <pre>{{ issue.body }}</pre>
// </article>
var mainEl = document.getElementsByTagName('main');
var httpRequest = new XMLHttpRequest();

httpRequest.addEventListener('load', () => {
  // console.log(httpRequest.response);

});

httpRequest.open('GET', 'https://api.github.com/repos/bharding2/slothbear-issues/issues');

httpRequest.send();


