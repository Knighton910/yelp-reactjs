const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const fs = require('fs')

const path = require('path'),
        join = path.join,
        resolve = path.resolve

const getConfig = require('hjs-webpack')

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})

module.exports = config 
