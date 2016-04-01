import Express from 'express';

const PORT = 3000;
const app = Express();
const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Webpack and React</title>
          </head>
          <body>
            <div id="reactDiv" />
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;

app.use('/dist', Express.static('dist'));

app.use((req, res) => {
    res.end(htmlString);
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});