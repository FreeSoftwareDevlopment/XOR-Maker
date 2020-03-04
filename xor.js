module.exports = function (input, key) {
    var output;
    if (input === 1 && key === 1) {
        output = 0;
    }
    else if (input === 0 && key === 1) {
        output = 1;
    }
    else if (input === 1 && key === 0) {
        output = 1;
    }
    else {
        output = null;
    }
    return output;
};
