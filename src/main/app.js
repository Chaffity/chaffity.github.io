'use strict';

const { main, section, div } = require('@chaffity/fui/html');

const app =
  main.add(section
    .add(div.text('Hello World'))
  )

document.body.appendChild(app())
