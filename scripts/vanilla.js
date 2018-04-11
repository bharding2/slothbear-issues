var mainEl = document.getElementsByTagName('main')[0];
var httpRequest = new XMLHttpRequest();

httpRequest.addEventListener('load', () => {
  var issues = JSON.parse(httpRequest.response);

  issues.forEach((issue) => {
    createIssue(issue, mainEl);
  });

  if (location.hash) document.getElementById(location.hash.replace('#', '')).scrollIntoView();
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
  bylineEl.textContent = `Posted by ${issue.user.login} at ${issue.created_at}`;
  articleEl.appendChild(bylineEl);

  var bodyEl = document.createElement('pre');
  bodyEl.innerHTML = issue.body;
  articleEl.appendChild(bodyEl);

  parentEl.appendChild(articleEl);
};
