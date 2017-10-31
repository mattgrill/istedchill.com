export default ({ body }) => (
  `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Is Ted Chill . Com</title>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `
);
