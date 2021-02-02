const k = data;

var toFullWidth = function (value) {
    if (!value) return value;
    return String(value).replace(/[!-~]/g, function (all) {
        return String.fromCharCode(all.charCodeAt(0) + 0xFEE0);
    });
};

var result = toFullWidth(k);