import React from 'react';

const HTML = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script></script>
        <script
        src={'/static/bundle.js'}
        ></script>
      </body>
    </html>
  );
};

export default HTML;
