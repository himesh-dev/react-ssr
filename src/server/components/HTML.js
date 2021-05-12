// import React from 'react';
import fs from 'fs';
import path from 'path';

const indexPath = path.resolve(
  process.cwd(),
  'build/client/static/',
  'index.html'
);
const HTML = (App) => {
  const data = fs.readFileSync(indexPath, 'utf-8');
  console.log({ data });
  const updatedHtml = data.replace(`{{renderer}}`, App);
  console.log({ updatedHtml });
  return updatedHtml;
};
// const HTML = ({ children }) => {
//   return (
//     <html>
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>React SSR</title>
//       </head>
//       <body>
//         <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
//         <script src={'/static/bundle.js'}></script>
//       </body>
//     </html>
//   );
// };

export default HTML;
