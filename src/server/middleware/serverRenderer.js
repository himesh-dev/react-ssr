import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../../shared/App';
import Html from '../components/HTML';
export default function serverRenderer(req, res) {
  const html = renderToString(<App />);

  // res.send('<!doctype html>' + renderToString(<Html>{html}</Html>));
  const UpdatedHtml = Html(html);
  console.log('UpdatedHtml ---->', UpdatedHtml);
  res.send(UpdatedHtml);
}
