const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');
var minify = require('html-minifier').minify;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/');
  })

  server.get('/about', (req, res) => {
    renderAndCache(req, res, '/about');
  })

  server.get('/gigs', (req, res) => {
    renderAndCache(req, res, '/coming-soon');
  })

  server.get('/coming-soon', (req, res) => {
    renderAndCache(req, res, '/coming-soon');
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3333, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3333');
  })
})

function getCacheKey (req) {
  return `${req.url}`
}

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */

function renderAndCache (req, res, pagePath, queryParams) {
  // const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  // if (ssrCache.has(key)) {
  //   console.log(`CACHE HIT: ${key}`);
  //   res.send(ssrCache.get(key));
  //   return
  // }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      // console.log(`CACHE MISS: ${key}`)
      const minifiedHtml = minify(html, {
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true
      });
      // ssrCache.set(key, minifiedHtml);

      res.send(minifiedHtml);
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
