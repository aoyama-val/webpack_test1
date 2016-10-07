module.exports = function(msg) {
    if (typeof(document) === "undefined") {
        console.log("[print] " + msg);
    }
    else {
        document.write("[print] " + msg);
    }
};
