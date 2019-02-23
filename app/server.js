require('../config/env.config');

const { useStaticRendering } = require('mobx-react');
const compression = require('compression');
const express = require('express')();
const next = require('next');
const routes = require('./routes');

/**
  This makes sure the component won't try to react
  to any future data changes on server side rendering
 */
useStaticRendering(true);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const logout = (req, res) => {
  res.clearCookie('ssrToken');
  // eslint-disable-next-line
  (req.query.redirect !== undefined)
    ? res.redirect(req.query.redirect)
    : res.json({ logout: true });
};

app.prepare()
  .then(() => !dev && express.use(compression()))
  .then(() => express.get('/logout', logout))
  .then(() => express.use(handler).listen(3000));
