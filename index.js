/**
 * New Relic Agent
 * Must be the at the top otherwise it will not work properly
 */
require('newrelic'); // eslint-disable-line

/**
 * Babel register
 */
require('@babel/register')({ // eslint-disable-line import/no-extraneous-dependencies
  ignore: ['node_modules'],
});

/**
 * Module dependencies
 */
const ragnar = require('nordic/ragnar');

/**
 * Configuration
 */
const config = require('nordic/config');

/**
 * Routers
 */
const api = require('./api');
const app = require('./app/server');

/**
 * Expose Ragnar server instance
 */
module.exports = ragnar({
  config: config.ragnar,
  apiRouter: api,
  appRouter: app,
});
