parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UGrC":[function(require,module,exports) {module.exports=function(n,u){return 1===n&&1===u?0:0===n&&1===u?1:1===n&&0===u?1:null};},{}],"hYlQ":[function(require,module,exports) {"use strict";var r=n(require("./xor.js"));function n(r){return r&&r.__esModule?r:{default:r}}module.exports=function(n,t){var u=n.split(""),e=[];u.forEach(function(r){e.push(parseInt(r))});var l=t.split(""),o=[];l.forEach(function(r){o.push(parseInt(r))});for(var s=u.length,a=0,f=0,i=null,p=[];s>=a;)null==(i=(0,r.default)(e[a],o[f]))||p.push(i),a++,f<o.length?f++:f=0;return p.join("")};},{"./xor.js":"UGrC"}],"qve0":[function(require,module,exports) {"use strict";var e=t(require("./bytehandler.js"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var t="",n=0;n<e.length;n++)t+=e[n].charCodeAt(0).toString(2)+" ";return t}document.getElementById("inputtype").value="",document.getElementById("keyring").value="",document.getElementById("runs").onclick=function(){var t=document.getElementById("inputtype").value,u=document.getElementById("keyring").value,r=n(t),o=n(u);console.log(r+"\n\n"+o);var l=(0,e.default)(r,o).split(""),d=0,c="";l.forEach(function(e){c+=e,7===d?(d=0,c+="<br>"):d++}),document.getElementById("outpus").innerHTML=c};},{"./bytehandler.js":"hYlQ"}]},{},["qve0"], null)//# sourceMappingURL=/hack.538f7c56.js.map