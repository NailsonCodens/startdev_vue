'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL:  '"http://abinfrapi.codens.com.br"',
  VERSION:  '"1.0.0"',
})
