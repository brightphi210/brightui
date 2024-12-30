'use strict';

var jsxRuntime = require('react/jsx-runtime');

const Button = ({ text }) => {
    return (jsxRuntime.jsx("div", { children: text }));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
