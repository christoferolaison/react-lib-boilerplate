
export default ({ app = '', main = '', title = 'react-lib-boilerplate' }) => `
  <!DOCTYPE HTML>
  <html>
    <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
    </head>
    <body style="margin: 0">
      <div id="app">${app}</div>
      <script src=${main}></script>
    </body>
  </html>
`
