({
    baseUrl: ".",
    paths: {
        "css-parser": "../lib/css-parser"
    },
    name: "../node_modules/almond/almond",
    include: ["styner"],
    out: "../lib/styner.min.js",
    wrap: {
        startFile: "./api.start.frag.js",
        endFile: "./api.end.frag.js"
    }
})
