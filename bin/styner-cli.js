#!/usr/bin/env node
var exec = require('child_process').exec,
    extend = require('extend'),
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    spawn = require('child_process').spawn;

var command = process.argv[2];

if (!command || command == 'help') {
    util.error(util.format(
        "Usage: %s %s <command>",
        process.argv[0],
        process.argv[1]
    ));
    process.exit(1);
} else if (command == 'init') {
    var initConfig = require(
        __dirname + '/../files/Stynerfile-defaults.json'
    );
    fs.exists('Stynerfile', function(exists) {
        if (exists) {
            console.log('A "Stynerfile" already exists. Nothing to be done');
            return;
        } else {
            fs.mkdir(initConfig.srcDir, '0755', function(e) {
                if (e && e.code != 'EEXIST') {
                    throw e;
                }
            });
            fs.mkdir(initConfig.buildDir, '0755', function(e) {
                if (e && e.code != 'EEXIST') {
                    throw e;
                }
            });
            fs.writeFileSync(
                'Stynerfile.json',
                fs.readFileSync(__dirname + '/../files/Stynerfile.json')
            );

            var srcFile = util.format(
                '%s/%s',
                initConfig.srcDir,
                initConfig.srcFilename
            );
            fs.exists(srcFile, function(exists) {
                if (!exists) {
                    fs.writeFileSync(srcFile, '');
                }
            });
            console.log('Created a "Stynerfile" in the current dir');
        }
    });
} else {
    fs.exists('Stynerfile.json', function(exists) {
        if (!exists) {
            console.error('No Stynerfile found. Please run "styner init"');
        } else {

            var defaults = require(
                __dirname + '/../files/Stynerfile-defaults.json'
            );

            var config = extend(
                true,
                defaults,
                require(path.resolve(process.cwd() + '/Stynerfile.json'))
            );

            if (command == 'watch') {
                spawn(
                    __dirname + '/../node_modules/.bin/grunt',
                    [
                        '--gruntfile',
                        __dirname + '/../files/Gruntfile.js',
                        '--base',
                        process.cwd()
                    ],
                    {stdio: 'inherit'}
                );
            } else if (command == 'build') {
                var target = process.argv[3] || config.buildFilename;
                spawn(
                    __dirname + '/../node_modules/.bin/grunt',
                    [
                        '--gruntfile',
                        __dirname + '/../files/Gruntfile.js',
                        '--base',
                        process.cwd(),
                        'flatten:' + target
                    ],
                    {stdio: 'inherit'}
                );
            } else if (command == 'configdump') {
                console.log(config);
            }
        }
    });
}
