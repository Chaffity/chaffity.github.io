'use strict';

import { div, h4, p, a } from '@emphori/fui/html';

import { GitHubRepo } from "../../services/github-api";
import { container, content } from "./repo-card.css";

export default div.lift<GitHubRepo>(({ id, name, description, html_url }) => {
  const r = (id & 0x0000ff);
  const g = (id & 0x00ff00) >> 8;
  const b = (id & 0xff0000) >> 16;

  return div.attr("class", container).attr("style", `--color: rgb(${r},${g},${b})`)
    .add(a.attr("class", content).attr("href", html_url).attr("target", "_blank")
        .add(h4.text(name))
        .add(p.text(description))
    });
});
