import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config.dev';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';

const PORT = 3000;
const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
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

app.use(WebpackDevMiddleware(webpackCompiler, {
    publicPath: WebpackConfig.output.publicPath,
    noInfo: true
}));
app.use(WebPackHotMiddleware(webpackCompiler));

app.use((req, res) => {
    res.end(htmlString);
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});