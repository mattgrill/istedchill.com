import { h, render, Component } from 'preact';

import ted from 'istedchill';

render(
  <h1>{ted()}</h1>,
  document.getElementById('root')
);
