#!/usr/bin/env node

const spawn = require('child_process').spawn;
const exec = require('child_process').execSync;
const open = require('open');

var args = process.argv;
var port = parseInt(args[2]);

if (args.find(a => a === '-f')) { const npm_install = exec('npm install -f'); }

if (port) { spawn('node', ['node_modules/node-red/red.js', '-p', port, '-userDir', '.'], {stdio:'inherit'}); }
else { spawn('node', ['node_modules/node-red/red.js', '-userDir', '.'], {stdio:'inherit'}); }

(async () => { await open('http://localhost:'+(port || 1880)); })();
