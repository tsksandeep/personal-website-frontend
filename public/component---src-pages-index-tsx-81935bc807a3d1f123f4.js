(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "0Z3b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sandeep-b7da0c71c6cc9285cb7cf557afb5d8df.jpeg";

/***/ }),

/***/ "8+s/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__("q1tI");

var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      } // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;

/***/ }),

/***/ "BPHJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "IconsManifest", function() { return /* reexport */ IconsManifest; });
__webpack_require__.d(__webpack_exports__, "GenIcon", function() { return /* reexport */ GenIcon; });
__webpack_require__.d(__webpack_exports__, "IconBase", function() { return /* reexport */ IconBase; });
__webpack_require__.d(__webpack_exports__, "DefaultContext", function() { return /* reexport */ DefaultContext; });
__webpack_require__.d(__webpack_exports__, "IconContext", function() { return /* reexport */ IconContext; });

// CONCATENATED MODULE: ./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js
var IconsManifest = [{
  "id": "fa",
  "name": "Font Awesome",
  "projectUrl": "https://fontawesome.com/",
  "license": "CC BY 4.0 License",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
}, {
  "id": "io",
  "name": "Ionicons 4",
  "projectUrl": "https://ionicons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
  "id": "io5",
  "name": "Ionicons 5",
  "projectUrl": "https://ionicons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
}, {
  "id": "md",
  "name": "Material Design icons",
  "projectUrl": "http://google.github.io/material-design-icons/",
  "license": "Apache License Version 2.0",
  "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
}, {
  "id": "ti",
  "name": "Typicons",
  "projectUrl": "http://s-ings.com/typicons/",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
}, {
  "id": "go",
  "name": "Github Octicons icons",
  "projectUrl": "https://octicons.github.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
}, {
  "id": "fi",
  "name": "Feather",
  "projectUrl": "https://feathericons.com/",
  "license": "MIT",
  "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
}, {
  "id": "gi",
  "name": "Game Icons",
  "projectUrl": "https://game-icons.net/",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
}, {
  "id": "wi",
  "name": "Weather Icons",
  "projectUrl": "https://erikflowers.github.io/weather-icons/",
  "license": "SIL OFL 1.1",
  "licenseUrl": "http://scripts.sil.org/OFL"
}, {
  "id": "di",
  "name": "Devicons",
  "projectUrl": "https://vorillaz.github.io/devicons/",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ai",
  "name": "Ant Design Icons",
  "projectUrl": "https://github.com/ant-design/ant-design-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "bs",
  "name": "Bootstrap Icons",
  "projectUrl": "https://github.com/twbs/icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "ri",
  "name": "Remix Icon",
  "projectUrl": "https://github.com/Remix-Design/RemixIcon",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}, {
  "id": "fc",
  "name": "Flat Color Icons",
  "projectUrl": "https://github.com/icons8/flat-color-icons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "gr",
  "name": "Grommet-Icons",
  "projectUrl": "https://github.com/grommet/grommet-icons",
  "license": "Apache License Version 2.0",
  "licenseUrl": "http://www.apache.org/licenses/"
}, {
  "id": "hi",
  "name": "Heroicons",
  "projectUrl": "https://github.com/refactoringui/heroicons",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "si",
  "name": "Simple Icons",
  "projectUrl": "https://simpleicons.org/",
  "license": "CC0 1.0 Universal",
  "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
}, {
  "id": "im",
  "name": "IcoMoon Free",
  "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
  "license": "CC BY 4.0 License"
}, {
  "id": "bi",
  "name": "BoxIcons",
  "projectUrl": "https://github.com/atisawd/boxicons",
  "license": "CC BY 4.0 License"
}, {
  "id": "cg",
  "name": "css.gg",
  "projectUrl": "https://github.com/astrit/css.gg",
  "license": "MIT",
  "licenseUrl": "https://opensource.org/licenses/MIT"
}, {
  "id": "vsc",
  "name": "VS Code Icons",
  "projectUrl": "https://github.com/microsoft/vscode-codicons",
  "license": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
}];
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/@react-icons/all-files/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react_default.a.createContext && react_default.a.createContext(DefaultContext);
// CONCATENATED MODULE: ./node_modules/@react-icons/all-files/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react_default.a.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react_default.a.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function elem(conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react_default.a.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react_default.a.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? react_default.a.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
// CONCATENATED MODULE: ./node_modules/@react-icons/all-files/lib/esm/index.js




/***/ }),

/***/ "C6Ny":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/avatar-c5b3250a356b19dc2358dd4c4b71fcae.jpg";

/***/ }),

/***/ "FJ3I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ajith-9e8aae7a9d376f484f16600c0128414e.jpeg";

/***/ }),

/***/ "FPs+":
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__("BPHJ").GenIcon;

module.exports.BiGlobe = function BiGlobe(props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 24 24"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M19.931,11h-2.764 c-0.116-2.165-0.73-4.3-1.792-6.243C17.813,5.898,19.582,8.228,19.931,11z M12.53,4.027c1.035,1.364,2.427,3.78,2.627,6.973H9.03 c0.139-2.596,0.994-5.028,2.451-6.974C11.653,4.016,11.825,4,12,4C12.179,4,12.354,4.016,12.53,4.027z M8.688,4.727 C7.704,6.618,7.136,8.762,7.03,11H4.069C4.421,8.204,6.217,5.857,8.688,4.727z M4.069,13h2.974c0.136,2.379,0.665,4.478,1.556,6.23 C6.174,18.084,4.416,15.762,4.069,13z M11.45,19.973C10.049,18.275,9.222,15.896,9.041,13h6.113 c-0.208,2.773-1.117,5.196-2.603,6.972C12.369,19.984,12.187,20,12,20C11.814,20,11.633,19.984,11.45,19.973z M15.461,19.201 c0.955-1.794,1.538-3.901,1.691-6.201h2.778C19.587,15.739,17.854,18.047,15.461,19.201z"
      }
    }]
  })(props);
};

/***/ }),

/***/ "I97n":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/meta-8c978111515b660e7c74c8ceaea853b1.png";

/***/ }),

/***/ "Nvz/":
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__("BPHJ").GenIcon;

module.exports.BsLaptop = function BsLaptop(props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 16 16",
      "fill": "currentColor"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "fillRule": "evenodd",
        "d": "M13.5 3h-11a.5.5 0 00-.5.5V11h12V3.5a.5.5 0 00-.5-.5zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11z",
        "clipRule": "evenodd"
      }
    }, {
      "tag": "path",
      "attr": {
        "d": "M0 12h16v.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5V12z"
      }
    }]
  })(props);
};

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
var taggedTemplateLiteralLoose = __webpack_require__("MUpH");

// EXTERNAL MODULE: ./node_modules/emotion/dist/emotion.esm.js + 10 modules
var emotion_esm = __webpack_require__("kDDq");

// CONCATENATED MODULE: ./src/components/Intro/Intro.style.ts


var _templateObject;


var Intro_style_IntroComponentStyle = function IntroComponentStyle() {
  return Object(emotion_esm["a" /* css */])(_templateObject || (_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-family: \"Roboto\", sans-serif;\n  padding: 200px 0 100px 0;\n\n  .avatar {\n    width: 200px;\n    height: auto;\n    border-radius: 50%;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  }\n\n  .about-me {\n    margin: 50px 0;\n    font-size: 24px;\n  }\n\n  .avatar-name {\n    background: -webkit-linear-gradient(\n      0deg,\n      #ef178e 10%,\n      #7e47c5 50%,\n      #01ccc9 90%\n    );\n    -webkit-background-clip: text !important;\n    -webkit-text-fill-color: transparent !important;\n    font-size: 32px;\n  }\n\n  .know-me-already {\n    font-size: 18px !important;\n    position: relative;\n    top: 2px;\n    margin-right: 10px;\n  }\n"])));
};
// EXTERNAL MODULE: ./src/assets/img/avatar.jpg
var avatar = __webpack_require__("C6Ny");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// CONCATENATED MODULE: ./src/components/Intro/Intro.tsx





var Intro_Intro = function Intro() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "intro-section"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Intro_style_IntroComponentStyle()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "avatar",
    src: avatar_default.a,
    alt: "avatar.jpg"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "about-me"
  }, /*#__PURE__*/react_default.a.createElement("p", null, "Hello! I am ", /*#__PURE__*/react_default.a.createElement("span", {
    className: "avatar-name"
  }, "Sandeep Kumar"), " ", /*#__PURE__*/react_default.a.createElement("br", null), " I work as a full stack developer. I have passion towards Web and Systems development.")), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("span", {
    className: "know-me-already"
  }, "Know me already ?"), /*#__PURE__*/react_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
    className: "btn btn-outline-primary",
    role: "button",
    to: "/#contact-section"
  }, "HIRE ME")))));
};

/* harmony default export */ var components_Intro_Intro = (Intro_Intro);
// EXTERNAL MODULE: ./src/components/NavBar/NavBar.tsx + 43 modules
var NavBar = __webpack_require__("1ZLU");

// CONCATENATED MODULE: ./src/components/Skills/Skills.style.ts


var Skills_style_templateObject;


var Skills_style_SkillsComponentStyle = function SkillsComponentStyle() {
  return Object(emotion_esm["a" /* css */])(Skills_style_templateObject || (Skills_style_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-family: \"Roboto\", sans-serif;\n  padding: 150px 0;\n\n  .heading {\n    margin-bottom: 50px;\n  }\n\n  .skills-heading {\n    font-size: 2rem;\n  }\n\n  .special-skill-item {\n    padding: 20px;\n    border-radius: 10px !important;\n  }\n\n  .special-skill-item:hover {\n    transform: scale(1.1);\n    transition-duration: 0.5s;\n    z-index: 1;\n  }\n\n  .skills-topic {\n    text-align: left;\n    padding-top: 10px;\n  }\n\n  .progress {\n    height: 8px;\n  }\n\n  .ion-icons {\n    height: 50px !important;\n    width: 50px !important;\n  }\n\n  @media (max-width: 768px) {\n    .custom-skill-col {\n      margin: 40px 10px;\n    }\n    .skills-heading {\n      font-size: 1.4rem;\n    }\n  }\n\n  @media (max-width: 578px) {\n    .special-skill-item:hover {\n      transform: none;\n    }\n  }\n"])));
};
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bi/BiGlobe.js
var BiGlobe = __webpack_require__("FPs+");

// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/bs/BsLaptop.js
var BsLaptop = __webpack_require__("Nvz/");

// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/ai/AiFillCloud.js
var AiFillCloud = __webpack_require__("Y510");

// CONCATENATED MODULE: ./src/components/Skills/Skills.tsx






var Skills_Skills = function Skills() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "skills-section"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Skills_style_SkillsComponentStyle()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "skills-heading"
  }, "SKILLS")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-lg-4 col-md-4 custom-skill-col"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card special-skill-item portfolio-info-card border-0"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-header bg-transparent border-0"
  }, /*#__PURE__*/react_default.a.createElement(BiGlobe["BiGlobe"], {
    fill: "#0ea0ff",
    className: "ion-icons"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "card-title"
  }, "Web Development"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "HTML"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "80%"
    },
    className: "progress-bar html-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "CSS"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "80%"
    },
    className: "progress-bar css-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "JavaScript"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "60%"
    },
    className: "progress-bar js-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "React"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "60%"
    },
    className: "progress-bar react-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Python"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "80%"
    },
    className: "progress-bar python-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Go"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "80%"
    },
    className: "progress-bar go-progress"
  })))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-lg-4 col-md-4 custom-skill-col"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card special-skill-item portfolio-info-card border-0"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-header bg-transparent border-0"
  }, /*#__PURE__*/react_default.a.createElement(BsLaptop["BsLaptop"], {
    fill: "#0ea0ff",
    className: "ion-icons"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "card-title"
  }, "Linux"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Shell Script"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "60%"
    },
    className: "progress-bar html-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Yocto"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "40%"
    },
    className: "progress-bar css-progress"
  })))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-lg-4 col-md-4 custom-skill-col"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card special-skill-item portfolio-info-card border-0"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-header bg-transparent border-0"
  }, /*#__PURE__*/react_default.a.createElement(AiFillCloud["AiFillCloud"], {
    fill: "#0ea0ff",
    className: "ion-icons"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "card-title"
  }, "Cloud"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "AWS"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "60%"
    },
    className: "progress-bar html-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Docker"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "60%"
    },
    className: "progress-bar css-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Kubernetes"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "40%"
    },
    className: "progress-bar html-progress"
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "skills-topic"
  }, "Jenkins"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      width: "35%"
    },
    className: "progress-bar css-progress"
  }))))))))));
};

/* harmony default export */ var components_Skills_Skills = (Skills_Skills);
// EXTERNAL MODULE: ./src/assets/img/siva.jpg
var siva = __webpack_require__("b+Tf");
var siva_default = /*#__PURE__*/__webpack_require__.n(siva);

// EXTERNAL MODULE: ./src/assets/img/ajith.jpeg
var ajith = __webpack_require__("FJ3I");
var ajith_default = /*#__PURE__*/__webpack_require__.n(ajith);

// CONCATENATED MODULE: ./src/components/Recommendation/Recommendation.style.ts


var Recommendation_style_templateObject;


var Recommendation_style_RecommendationComponentStyle = function RecommendationComponentStyle() {
  return Object(emotion_esm["a" /* css */])(Recommendation_style_templateObject || (Recommendation_style_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-family: \"Roboto\", sans-serif;\n  padding: 150px 0;\n\n  .recommendation-heading {\n    font-size: 2rem;\n  }\n\n  .intro {\n    margin-bottom: 50px;\n  }\n\n  .description {\n    margin: 0;\n  }\n\n  .recommendation-box {\n    font-size: 24px;\n    font-weight: lighter;\n    font-style: italic;\n    padding: 15px 15px 75px 15px;\n    border-radius: 10px;\n    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.075);\n    color: white;\n  }\n\n  .recommendation-box .description {\n    font-size: 17px;\n  }\n\n  .recommendation-author {\n    margin-top: -50px;\n  }\n\n  .recommendation-author-circle {\n    padding: 5px;\n    background-color: white;\n    height: 115px;\n    width: 115px;\n  }\n\n  .recommendation-author-name {\n    margin-top: 10px;\n  }\n\n  .item {\n    margin-bottom: 40px;\n  }\n\n  @media (max-width: 768px) {\n    .recommendation-heading {\n      font-size: 1.4rem;\n    }\n  }\n\n  @media (max-width: 576px) {\n    .recommendation-box {\n      margin: 10px;\n    }\n  }\n"])));
};
// CONCATENATED MODULE: ./src/components/Recommendation/Recommendation.tsx





var Recommendation_Recommendation = function Recommendation() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "recommendation-section"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Recommendation_style_RecommendationComponentStyle()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "intro"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center recommendation-heading"
  }, "RECOMMENDATION")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "row people"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-lg-12 col-md-12 item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "box recommendation-box gradient"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "description"
  }, "Sandeep has strong passion for technology. He is dedicated and meticulous in his tasks. His background in electronics enables him to come up with solutions that is not limited to software. I wish him all the best.")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "author recommendation-author"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle recommendation-author-circle",
    src: siva_default.a,
    alt: "siva.jpg"
  }), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "recommendation-author-name"
  }, "Sivachandran Paramasivam"), /*#__PURE__*/react_default.a.createElement("p", {
    className: "recommendation-author-title"
  }, "Product Engineer at Platform.sh"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-lg-12 col-md-12 item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "box recommendation-box gradient"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "description"
  }, "Sandeep is a super quick learner. I know him since he joined Qube Cinema as a Software Engineering Intern. He was able to quickly pick up Go and started delivering critical features to the product in no time. The quality of the code he delivered was on par with other experienced Go developers. He is so focused on improving his skills and putting them into reality.", " ", /*#__PURE__*/react_default.a.createElement("br", null), " ", /*#__PURE__*/react_default.a.createElement("br", null), "On a lighter note, Sandeep is a very fun person to work with. Sandeep's agility to work with multiple technologies, writing quality code and friendly attitude makes him an amazing engineer any team can have.")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "author recommendation-author"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle recommendation-author-circle",
    src: ajith_default.a,
    alt: "ajith.jpeg"
  }), /*#__PURE__*/react_default.a.createElement("h5", {
    className: "recommendation-author-name"
  }, "Ajith Panneerselvam"), /*#__PURE__*/react_default.a.createElement("p", {
    className: "recommendation-author-title"
  }, "Software Engineer at Toyota Connected")))))));
};

/* harmony default export */ var components_Recommendation_Recommendation = (Recommendation_Recommendation);
// EXTERNAL MODULE: ./src/assets/img/sankar.jpeg
var sankar = __webpack_require__("b7eN");
var sankar_default = /*#__PURE__*/__webpack_require__.n(sankar);

// EXTERNAL MODULE: ./src/assets/img/vibeesh.jpeg
var vibeesh = __webpack_require__("jtjL");
var vibeesh_default = /*#__PURE__*/__webpack_require__.n(vibeesh);

// EXTERNAL MODULE: ./src/assets/img/sundar.jpeg
var sundar = __webpack_require__("S0DJ");
var sundar_default = /*#__PURE__*/__webpack_require__.n(sundar);

// EXTERNAL MODULE: ./src/assets/img/sandeep.jpeg
var sandeep = __webpack_require__("0Z3b");
var sandeep_default = /*#__PURE__*/__webpack_require__.n(sandeep);

// CONCATENATED MODULE: ./src/components/Projects/Projects.style.ts


var Projects_style_templateObject;


var Projects_style_ProjectsComponentStyle = function ProjectsComponentStyle() {
  return Object(emotion_esm["a" /* css */])(Projects_style_templateObject || (Projects_style_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-family: \"Roboto\", sans-serif;\n  padding: 150px 0 200px 0;\n\n  .projects-heading {\n    font-size: 2rem;\n  }\n\n  .project-card-wrapper {\n    height: 100%;\n    padding: 20px 10px;\n  }\n\n  .project-card-no-image {\n    border-radius: 5px;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .project-card-heading {\n    text-transform: uppercase;\n  }\n\n  .project-creator-circle {\n    width: 70px;\n    height: auto;\n    margin: 0 10px;\n  }\n\n  @media (max-width: 768px) {\n    .projects-heading {\n      font-size: 1.4rem;\n    }\n  }\n"])));
};
// CONCATENATED MODULE: ./src/components/Projects/Projects.tsx







var Projects_Projects = function Projects() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "projects-section"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Projects_style_ProjectsComponentStyle()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "projects-heading"
  }, "PROJECTS")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6 col-lg-6"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-card-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-card-no-image"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "project-card-heading"
  }, "Fast Torrent"), /*#__PURE__*/react_default.a.createElement("h4", null, "This project enables users to save torrent file contents (with a maximum size of 5 GB) directly to the cloud and download them quickly without worrying about seeds. ", /*#__PURE__*/react_default.a.createElement("br", null), " ", /*#__PURE__*/react_default.a.createElement("br", null), " Tech Stack: React, Go, Python, DynamoDB, RDS PostgreSQL"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-creators"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sandeep_default.a,
    alt: "sandeep.jpeg"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sankar_default.a,
    alt: "sankar.jpeg"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sundar_default.a,
    alt: "sundar.jpeg"
  }))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6 col-lg-6"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-card-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-card-no-image"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "project-card-heading"
  }, "Smart Theatre"), /*#__PURE__*/react_default.a.createElement("h4", null, "This project lets the audience view and switch subtitles to multiple languages in theatres using augmented reality. As of now, the audience can use android phones to experience it. ", /*#__PURE__*/react_default.a.createElement("br", null), " ", /*#__PURE__*/react_default.a.createElement("br", null), " Tech Stack: Go, C#, gRPC, Sqlite3"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-creators"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sandeep_default.a,
    alt: "sandeep.jpeg"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: vibeesh_default.a,
    alt: "vibeesh.jpeg"
  }))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "offset-md-3 col-md-6 offset-lg-3 col-lg-6"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-card-wrapper"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-card-no-image"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "project-card-heading"
  }, "Crypto Health"), /*#__PURE__*/react_default.a.createElement("h4", null, "This project enables hospital managements to store their patient's health data in a blockchain, model ensuring high security. ", /*#__PURE__*/react_default.a.createElement("br", null), " ", /*#__PURE__*/react_default.a.createElement("br", null), " Tech Stack: React, Django, PostgreSQL"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "project-creators"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sandeep_default.a,
    alt: "sandeep.jpeg"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sankar_default.a,
    alt: "sankar.jpeg"
  }), /*#__PURE__*/react_default.a.createElement("img", {
    className: "rounded-circle project-creator-circle",
    src: sundar_default.a,
    alt: "sundar.jpeg"
  })))))))));
};

/* harmony default export */ var components_Projects_Projects = (Projects_Projects);
// CONCATENATED MODULE: ./src/components/Experience/Experience.style.ts


var Experience_style_templateObject;


var Experience_style_ExperienceComponentStyle = function ExperienceComponentStyle() {
  return Object(emotion_esm["a" /* css */])(Experience_style_templateObject || (Experience_style_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-family: \"Roboto\", sans-serif;\n  padding: 150px 0;\n\n  .work-experience {\n    margin: 0 !important;\n    max-width: 100% !important;\n  }\n\n  .experience-heading {\n    font-weight: 400 !important;\n  }\n\n  .role {\n    font-weight: 500 !important;\n    text-align: left;\n  }\n\n  .organization {\n    float: left;\n  }\n\n  .role-description {\n    text-align: left;\n  }\n\n  .bold {\n    font-weight: bold !important;\n  }\n\n  @media (max-width: 768px) {\n    .custom-period {\n      text-align: left;\n    }\n  }\n"])));
};
// CONCATENATED MODULE: ./src/components/Experience/Experience.tsx



var Experience_Experience = function Experience() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "experience-section",
    className: "portfolio-block cv"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Experience_style_ExperienceComponentStyle()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "work-experience group"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center experience-heading"
  }, "Experience")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "role"
  }, "Software Engineer"), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "organization"
  }, "CargoAi - Singapore")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6 custom-period"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "period"
  }, "Aug 2020 - Present"))), /*#__PURE__*/react_default.a.createElement("p", {
    className: "role-description"
  }, "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Subscription Platform"), ": Architected and built a subscription platform for all the services offered by CargoAi. Integrated with RapidAPI to effortlessly subscribe and use the API.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Track and Trace"), ": Designed and developed an extensible end-to-end Track & Trace service for several major Airlines (Air France, British Airways, Etihad, Finnair, etc.) integrated with our application. 1000\u2019s of cargo forwarders use this service for day-to-day tracking of their shipments. ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Carbon Emission Calculator"), ": Designed and developed a 99% accurate carbon emission calculator service for air cargo shipments transported with various carriers. Both airlines and forwarders use this service extensively to calculate carbon emission for shipments and transport it eco-friendly.", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Flight Schedule"), ": Implemented flight schedule service to get real-time schedules of all cargo airlines with the market rate. Helped forwarders to choose the best cost-effective carrier for their shipment.", " ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Website"), ": Designed and developed the company\u2019s website with responsive design and excellent search engine optimization using GatsbyJS.")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "role"
  }, "Software Engineer - Intern"), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "organization"
  }, "Qube Cinema - Chennai")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6 custom-period"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "period"
  }, "May 2019 - Jul 2020"))), /*#__PURE__*/react_default.a.createElement("p", {
    className: "role-description"
  }, "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "XP 4.0"), ": Worked in the development of DCI certified next-generation digital cinema server that enables movie playback in more than 4500 screens around the world. ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Automation Controller"), ": Worked in the development of Automation Controller, which automates around 90% of the manual tasks done when playing movies in theatres. It can be easily integrated with theatre management system for much more automation. ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), " \u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Distributor Asset Manager"), ": Designed and developed distributor asset management service which helps distributor\u2019s to manage their assets in the cloud.")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "role"
  }, "Software Engineer - Intern"), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "organization"
  }, "Qube Cinema - Chennai")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6 custom-period"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "period"
  }, "Aug 2018 - Dec 2018"))), /*#__PURE__*/react_default.a.createElement("p", {
    className: "role-description"
  }, "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "iTunes Publisher"), ": Developed an internal iTunes publisher tool that restructures and publishes digital cinema contents to iTunes. ", /*#__PURE__*/react_default.a.createElement("br", null), /*#__PURE__*/react_default.a.createElement("br", null), "\u2022", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, " ", "HDD health monitor"), ": Developed an HDD health monitor service that monitors the health of the hard disk drives currently in use and sends the periodic reports in slack."))))));
};

/* harmony default export */ var components_Experience_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./src/components/Education/Education.style.ts


var Education_style_templateObject;


var Education_style_EducationComponentStyle = function EducationComponentStyle() {
  return Object(emotion_esm["a" /* css */])(Education_style_templateObject || (Education_style_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-family: \"Roboto\", sans-serif;\n  padding: 150px 0;\n\n  .education {\n    margin: 0 !important;\n    max-width: 100% !important;\n  }\n\n  .education-heading {\n    font-weight: 400 !important;\n  }\n\n  .role {\n    font-weight: 500 !important;\n    text-align: left;\n  }\n\n  .organization {\n    float: left;\n  }\n\n  .role-description {\n    text-align: left;\n  }\n\n  .bold {\n    font-weight: bold !important;\n  }\n\n  @media (max-width: 768px) {\n    .custom-period {\n      text-align: left;\n    }\n  }\n"])));
};
// CONCATENATED MODULE: ./src/components/Education/Education.tsx



var Education_Education = function Education() {
  return /*#__PURE__*/react_default.a.createElement("section", {
    id: "education-section",
    className: "portfolio-block cv"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Education_style_EducationComponentStyle()
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "education group"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "heading"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center education-heading"
  }, "Education")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "role"
  }, "Bachelors of Engineering, Electronics and Communication"), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "organization"
  }, "SSN College of Engineering")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-6 custom-period"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "period"
  }, "2016 - 2020"))), /*#__PURE__*/react_default.a.createElement("p", {
    className: "role-description"
  }, "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Coursework"), ": Networking, FPGA Programming, Digital Electronics, Digital Signal Processing, Antennas and Wave Propagation.")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "item"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "role"
  }, "Science Group"), /*#__PURE__*/react_default.a.createElement("h4", {
    className: "organization"
  }, "Holy Cross School")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "col-md-6 custom-period"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "period"
  }, "2003 - 2016"))), /*#__PURE__*/react_default.a.createElement("p", {
    className: "role-description"
  }, "\u2022", " ", /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      letterSpacing: "0.7px"
    },
    className: "bold"
  }, "Coursework"), ": Biology, Maths, Physics, Chemistry."))))));
};

/* harmony default export */ var components_Education_Education = (Education_Education);
// EXTERNAL MODULE: ./src/components/Footer/Footer.tsx + 19 modules
var Footer = __webpack_require__("sGC4");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// CONCATENATED MODULE: ./src/components/Metatags/Metatags.tsx



var Metatags_Metatags = function Metatags(props) {
  return /*#__PURE__*/react_default.a.createElement(Helmet["a" /* Helmet */], null, /*#__PURE__*/react_default.a.createElement("title", null, props.title), /*#__PURE__*/react_default.a.createElement("meta", {
    name: "title",
    content: props.title
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    name: "description",
    content: props.description
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "og:type",
    content: props.type
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "og:url",
    content: props.url
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "og:title",
    content: props.title
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "og:description",
    content: props.description
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "og:image",
    content: "https://www.tsksandeep.com" + props.image
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "twitter:url",
    content: props.url
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "twitter:title",
    content: props.title
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "twitter:description",
    content: props.description
  }), /*#__PURE__*/react_default.a.createElement("meta", {
    property: "twitter:image",
    content: "https://www.tsksandeep.com" + props.image
  }));
};

/* harmony default export */ var components_Metatags_Metatags = (Metatags_Metatags);
// EXTERNAL MODULE: ./src/assets/img/meta.png
var meta = __webpack_require__("I97n");
var meta_default = /*#__PURE__*/__webpack_require__.n(meta);

// EXTERNAL MODULE: ./src/pages/bootstrap.min.css
var bootstrap_min = __webpack_require__("t3t1");

// EXTERNAL MODULE: ./src/pages/index.css
var pages = __webpack_require__("EDuE");

// CONCATENATED MODULE: ./src/pages/index.tsx














var pages_HomePage = function HomePage() {
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(components_Metatags_Metatags, {
    title: "Sandeep - Website",
    description: "Hello! I am Sandeep Kumar. I work as a full stack developer. I have passion towards Web and Systems development.",
    type: "website",
    url: "https://www.tsksandeep.com/",
    image: meta_default.a
  }), /*#__PURE__*/react_default.a.createElement(NavBar["a" /* default */], null), /*#__PURE__*/react_default.a.createElement(components_Intro_Intro, null), /*#__PURE__*/react_default.a.createElement(components_Experience_Experience, null), /*#__PURE__*/react_default.a.createElement(components_Education_Education, null), /*#__PURE__*/react_default.a.createElement(components_Skills_Skills, null), /*#__PURE__*/react_default.a.createElement(components_Projects_Projects, null), /*#__PURE__*/react_default.a.createElement(components_Recommendation_Recommendation, null), /*#__PURE__*/react_default.a.createElement(Footer["a" /* default */], null));
};

/* harmony default export */ var src_pages = __webpack_exports__["default"] = (pages_HomePage);

/***/ }),

/***/ "S0DJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sundar-d7df5d985d9e15268b691f513adcf458.jpeg";

/***/ }),

/***/ "Y510":
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS AUTO GENERATED
var GenIcon = __webpack_require__("BPHJ").GenIcon;

module.exports.AiFillCloud = function AiFillCloud(props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 1024 1024"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z"
      }
    }]
  })(props);
};

/***/ }),

/***/ "b+Tf":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "b7eN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sankar-a000a894ed10833b790e72afbb61c912.jpeg";

/***/ }),

/***/ "bmMU":
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView; // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    } // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.


    var it;

    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      it = a.entries();

      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      }

      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      return true;
    } // END: Modifications


    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    } // END: fast-deep-equal
    // START: react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element) return false; // custom handling for React/Preact

    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements
        continue;
      } // all other properties should be traversed as usual


      if (!equal(a[keys[i]], b[keys[i]])) return false;
    } // END: react-fast-compare
    // START: fast-deep-equal


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

/***/ }),

/***/ "jtjL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/vibeesh-53e0cab9cfe5716666ea42c1e5cbe068.jpeg";

/***/ }),

/***/ "qhky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelmetExport; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8+s/");
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bmMU");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YVoz");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_4__);





var ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
};
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (encode === false) {
    return String(str);
  }

  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
    });
  }

  var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }

    return innermostBaseTag;
  }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }

    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }

    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase(); // Special rule with link tags, since rel and href are both primary tags, rel takes priority

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        } // Special case for innerHTML which doesn't work lowercased


        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }

      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }

      var value = tag[primaryAttributeKey].toLowerCase();

      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }

      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }

      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }

      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    }); // Update seen tags with tags from this instance

    var keys = Object.keys(instanceSeenTags);

    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }

    return approvedTags;
  }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];

    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }

  return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
    bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
  };
};

var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();

var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }

  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
      bodyAttributes = newState.bodyAttributes,
      htmlAttributes = newState.htmlAttributes,
      linkTags = newState.linkTags,
      metaTags = newState.metaTags,
      noscriptTags = newState.noscriptTags,
      onChangeClientState = newState.onChangeClientState,
      scriptTags = newState.scriptTags,
      styleTags = newState.styleTags,
      title = newState.title,
      titleAttributes = newState.titleAttributes;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
        newTags = _tagUpdates$tagType.newTags,
        oldTags = _tagUpdates$tagType.oldTags;

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }

    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);

  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }

    var indexToSave = attributesToRemove.indexOf(attribute);

    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }

  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};

var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;

  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);

      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(HELMET_ATTRIBUTE, "true"); // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps; // assigning into an array to define toString function on it


  var initProps = (_initProps = {
    key: title
  }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;

    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

      if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(type, mappedTag);
  });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };

    case ATTRIBUTE_NAMES.BODY:
    case ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };

    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
      bodyAttributes = _ref.bodyAttributes,
      encode = _ref.encode,
      htmlAttributes = _ref.htmlAttributes,
      linkTags = _ref.linkTags,
      metaTags = _ref.metaTags,
      noscriptTags = _ref.noscriptTags,
      scriptTags = _ref.scriptTags,
      styleTags = _ref.styleTags,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};

var Helmet = function Helmet(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits(HelmetWrapper, _React$Component);

    function HelmetWrapper() {
      classCallCheck(this, HelmetWrapper);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(this.props, nextProps);
    };

    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }

      switch (child.type) {
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };

        case TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }

      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };

    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _babelHelpers$extends;

      var child = _ref.child,
          arrayTypeChildren = _ref.arrayTypeChildren,
          newChildProps = _ref.newChildProps,
          nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
    };

    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _babelHelpers$extends2, _babelHelpers$extends3;

      var child = _ref2.child,
          newProps = _ref2.newProps,
          newChildProps = _ref2.newChildProps,
          nestedChildren = _ref2.nestedChildren;

      switch (child.type) {
        case TAG_NAMES.TITLE:
          return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

        case TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });

        case TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }

      return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
    };

    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);

      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _babelHelpers$extends4;

        newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
      });
      return newFlattenedProps;
    };

    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}

      return true;
    };

    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;

      var arrayTypeChildren = {};
      react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }

        var _child$props = child.props,
            nestedChildren = _child$props.children,
            childProps = objectWithoutProperties(_child$props, ["children"]);
        var newChildProps = convertReactPropstoHtmlAttributes(childProps);

        _this2.warnOnInvalidChildren(child, nestedChildren);

        switch (child.type) {
          case TAG_NAMES.LINK:
          case TAG_NAMES.META:
          case TAG_NAMES.NOSCRIPT:
          case TAG_NAMES.SCRIPT:
          case TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;

          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });
      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };

    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ["children"]);

      var newProps = _extends({}, props);

      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, newProps);
    };

    createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set$$1(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);
    return HelmetWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component), _class.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]),
    defaultTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    defer: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    encodeSpecialCharacters: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    link: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
    meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
    noscript: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
    onChangeClientState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
    script: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
    style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    titleAttributes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    titleTemplate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();

    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }

    return mappedState;
  }, _temp;
};

var NullComponent = function NullComponent() {
  return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
/* unused harmony default export */ var _unused_webpack_default_export = (HelmetExport);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-tsx-81935bc807a3d1f123f4.js.map