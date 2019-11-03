'use strict';

import { main, section, h1, div } from '@emphori/fui/html';

import { repoList } "./main.css";
import repoCard from './components/repo-card/repo-card';
import { getRepos, GitHubRepo } from './services/github-api';

;(async () => {
  const repos = await getRepos();

  const app = main
    .add(section
      .add(h1.text('chaffity'))
      .lift<GitHubRepo[]>((repos) => repos.reduce((elem, repo) => {
        return elem.add(repoCard.scope(() => repo))
      }, div.attr("class", repoList)))
    );

  document.querySelector('body').appendChild(app(repos));
})();
