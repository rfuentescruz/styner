# styner #

**`v0.2.3-alpha`**
> A CSS style inliner


## Installation ##

`styner` requires [nodejs](https://nodejs.org) v0.8 or higher

Install `styner` with:

```bash
npm install
```


## Usage ##

`styner` projects require a `Stynerfile.json` in the project's top-level directory. You may create a `Stynerfile.json` in the current directory by running:

```bash
styner init
```

This will also create the required directory structure for your project. See the documentation for `Stynerfile.json` for details on how to change the default directories used by `styner`.

To generate a build of the current document, run:

```bash
styner build [filename]
```

This generates a file your build in the build directory of the project with the specified **filename** or the default build filename set in the `Stynerfile.json` if unspecified

`styner` may also be put in **watch** mode by running:

```bash
styner watch
```

This mode will run the build everytime a file in the source directory changes


## Stynerfile.json ##

The `Stynerfile.json` contains config parameters that will be used in every `styner` build. The default values for each may be found [here](https://github.com/rfuentescruz/styner/blob/master/files/Stynerfile-defaults.json)

### srcDir ###

Specifies where all the source files of the project will reside

### srcFilename ###

Specifies the filename of the main HTML document that will be used as source for the build

### buildDir ###

Specifies where all builds will be stored

### buildFilename ###

Specifies the default filename for the build version document

### viewport ###

The emulated viewport dimensions in pixels of the document during the build



Sample `Stynerfile.json`:

```json
{
    "srcFilename": "email.html",
    "buildFilename": "email-build.html",
    "viewport": {
        "width": 600,
        "height": 400
    }
}
```


## Commands ##

### init ###

Create a `Stynerfile.json` in the current directory and the directory structure for a `styner` project

### watch ###

Start a [watch](https://github.com/gruntjs/grunt-contrib-watch) task to generate the HTML build as files in the project are modified

### build [filename]###

Manually generate an HTML build with the specified **filename**

### configdump ###

Dump the config being used by the current project based on the values of in the `Stynerfile.json`

## Known issues ##

 - `styner` doesn't support user / reader styles
 - `styner` only supports Webkit-supported CSS rules
