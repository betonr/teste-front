'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  marvelKeys: {
    public: '"94609bbac0706e82a6fa9c9490abe617"'
  }
})
