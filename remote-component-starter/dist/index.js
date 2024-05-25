"use strict";var _={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=window.react,s=Symbol.for("react.element"),p=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,f){var r,o={},n=null,i=null;f!==void 0&&(n=""+f),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)y.call(e,r)&&!m.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:s,type:t,key:n,ref:i,props:o,_owner:d.current}}_.Fragment=p;_.jsx=l;_.jsxs=l;window["@mui/material"].Button;
