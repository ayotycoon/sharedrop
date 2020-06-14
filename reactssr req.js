

// npx babel _app.js --out-file app.js --presets=@babel/env,@babel/react


// Plugin into node's require function
require('@babel/register')({
    presets: ['@babel/env', '@babel/react'],
    plugins: ['@babel/plugin-proposal-class-properties']
});

// provide polyfills
require('@babel/polyfill');

// ignore styles
//require('ignore-styles');

// start server
require('./app');



//


const React = require('react');
const StaticRouter = require('react-router').StaticRouter;
const ReactDOMServer = require('react-dom/server');
import App from './client-src/src/App'



// main css, js
app.use('^/static', express.static(path.resolve(distPath, 'static')));

// service worker files, add other static content by modifying regex below
app.use('*/*.js', express.static(path.resolve(distPath)));

app.get("*", (req, res) => {

    const entry = path.resolve(distPath, 'index.html');

    fs.readFile(entry, 'utf8', (err, htmlData) => {
        if (err) {
            return res.status(404).end();
        }
        const context = {}

        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.baseUrl} context={context}><App /></StaticRouter>
        );

        return res.send(
            htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        );
    });



    // res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

