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

function createIssue(issue, parentEl) {
  var articleEl = document.createElement('article');
  articleEl.id = issue.number;

  var titleEl = document.createElement('h2');
  titleEl.textContent = issue.title;
  articleEl.appendChild(titleEl);

  var bylineEl = document.createElement('p');
  bylineEl.textConent = `Posted by ${issue.user.login} at ${issue.created_at}`;
  articleEl.appendChild(bylineEl);

  var bodyEl = document.createElement('pre');
  bodyEl.innerHTML = issue.body;
  articleEl.appendChild(bodyEl);

  parentEl.appendChild(articleEl);
};
