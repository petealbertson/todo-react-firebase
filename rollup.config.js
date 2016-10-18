require('dotenv').load({ silent: true });
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const buble = require('rollup-plugin-buble');

const env = {
  API_HOST: process.env.API_HOST,
  NODE_ENV: (process.env.NODE_ENV || 'development')
};

module.exports = {
  moduleName: 'Todo React Firebase',
  sourceMap: (process.env.NODE_ENV !== 'production'),
  entry: 'client/index.js',
  dest: 'public/app.js',
  format: 'iife',
  plugins: [
    {intro () {
      return `window.process = {env:${JSON.stringify(env)}};`
    }},
    resolve({
      main: true,
      jsnext: true,
    }),
    commonjs({
      include: ['./node_modules/**'],
      namedExports: {
        'react': ['Component', 'PropTypes', 'Children', 'createElement'],
        'react-dom': ['render'],
      }
    }),
    json(),
    buble({
      objectAssign: 'Object.assign'
    })
  ]
};
