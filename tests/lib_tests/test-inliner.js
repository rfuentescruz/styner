var fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn,

    assert = require('chai').assert,
    expect = require('chai').expect;

describe('Test inliner', function() {
    it('should fail for invalid arguments', function(done) {
        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [ __dirname + '/../../bin/inliner' ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.equal(err, 3);
            done();
        });
    });

    it('should fail for invalid arguments', function(done) {
        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [ __dirname + '/../../bin/inliner', 'abc' ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.equal(err, 3);
            done();
        });
    });

    it('should produce the outfile specified', function(done) {
        var infile = path.resolve(__dirname, '../fixtures/inliner-test-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile, outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function() {
            assert.equal(fs.existsSync(outfile), true);
            done();
        });
    });

    it('should produce the outfile specified', function(done) {
        var infile = path.resolve(__dirname, '../fixtures/inliner-test-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile, outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function() {
            assert.equal(fs.existsSync(outfile), true);
            done();
        });
    });

    it('should apply inlining to the output file', function(done) {
        var infile = path.resolve(__dirname, '../fixtures/inliner-test-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile, outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function() {
            fs.readFile(outfile, function(err, data) {
                if (err) done(err);

                assert.equal(
                    data.toString().match(/id=(['"])header\1\s*style=(['"])color:\s*red/).length,
                    3
                );
                done();
            });
        });
    });

    it('should be able to process file URLs', function(done) {
        var infile = 'file://' + path.resolve(__dirname, '../fixtures/inliner-test-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile, outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function() {
            fs.readFile(outfile, function(err, data) {
                if (err) done(err);

                assert.equal(
                    data.toString().match(/id=(['"])header\1\s*style=(['"])color:\s*red/).length,
                    3
                );
                done();
            });
        });
    });

    it('must reject non-existent files', function(done) {
        var infile = path.resolve(__dirname, Date.now() + '/non-existent.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile, outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.equal(err, 1);
            assert.isFalse(fs.existsSync(outfile));
            done();
        });
    });

    it('must fail when outfile is un-writable', function(done) {
        var infile = path.resolve(__dirname, '../fixtures/inliner-test-page.html');
        var outfile = '/foo.html';

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile,
                outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.isFalse(fs.existsSync(outfile));
            done();
        });
    });

    it('must have a default viewport size', function(done) {
        var infile = 'file://' + path.resolve(__dirname, '../fixtures/inliner-test-media-query-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile,
                outfile
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.equal(err, 0);
            fs.readFile(outfile, function(err, data) {
                if (err) done(err);

                assert.equal(
                    data.toString().match(/id=(['"])header\1\s*style=(['"])color:\s*red/).length,
                    3
                );
                done();
            });
        });
    });

    it('must be able to apply a specified viewport size', function(done) {
        var infile = 'file://' + path.resolve(__dirname, '../fixtures/inliner-test-media-query-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile,
                outfile,
                '300:600'
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.equal(err, 0);
            fs.readFile(outfile, function(err, data) {
                if (err) done(err);
                expect(data.toString().match(/id=(['"])header\1\s*style=(['"])color:\s*blue/)).to.have.length.above(1);
                done();
            });
        });
    });

    it('should fail for invalid viewport dimensions', function(done) {
        var infile = 'file://' + path.resolve(__dirname, '../fixtures/inliner-test-media-query-page.html');
        var outfile = path.resolve(__dirname, '../tmp/' + Date.now() + '.html');

        var inliner = spawn(
            __dirname + '/../../node_modules/.bin/phantomjs',
            [
                __dirname + '/../../bin/inliner',
                infile,
                outfile,
                'abc'
            ],
            { stdio: 'inherit' }
        );

        inliner.on('exit', function(err) {
            assert.equal(err, 3);
            assert.isFalse(fs.existsSync(outfile));
            done();
        });
    });
});

