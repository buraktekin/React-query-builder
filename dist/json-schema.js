'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _ReactDOMFactories = require('react/lib/ReactDOMFactories');

var _ReactDOMFactories2 = _interopRequireDefault(_ReactDOMFactories);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _componentMap = null;

var ReactJsonSchema = function () {
    function ReactJsonSchema() {
        _classCallCheck(this, ReactJsonSchema);
    }

    _createClass(ReactJsonSchema, [{
        key: 'parseSchema',
        value: function parseSchema(schema) {
            var element = null;
            var elements = null;
            if ((0, _lodash.isArray)(schema)) {
                elements = this.parseSubSchemas(schema);
            } else {
                element = this.createComponent(schema);
            }
            return element || elements;
        }
    }, {
        key: 'parseSubSchemas',
        value: function parseSubSchemas(subSchemas) {
            var _this = this;

            var Components = [];
            (0, _lodash.forEach)(subSchemas, function (subSchema, index) {
                subSchema.key = index;
                Components.push(_this.parseSchema(subSchema));
            });
            return Components;
        }
    }, {
        key: 'createComponent',
        value: function createComponent(schema) {
            var props = (0, _lodash.clone)(schema);
            props = (0, _lodash.omit)(props, ['component', 'children']);
            var Component = this.resolveComponent(schema);
            var Children = props.text || this.resolveComponentChildren(schema);
            return (0, _react.createElement)(Component, props, Children);
        }
    }, {
        key: 'resolveComponent',
        value: function resolveComponent(schema) {
            var Component = null;
            if ((0, _lodash.has)(schema, 'component')) {
                if ((0, _lodash.isObject)(schema.component)) {
                    Component = schema.component;
                } else if (_componentMap && _componentMap[schema.component]) {
                    Component = _componentMap[schema.component];
                } else if ((0, _lodash.has)(_ReactDOMFactories2.default, schema.component)) {
                    Component = schema.component;
                }
            } else {
                throw new Error('JsonSchema could not resolve a component due to a missing component attribute in the schema.');
            }
            return Component;
        }
    }, {
        key: 'resolveComponentChildren',
        value: function resolveComponentChildren(schema) {
            return (0, _lodash.has)(schema, 'children') ? this.parseSchema(schema.children) : [];
        }
    }, {
        key: 'getComponentMap',
        value: function getComponentMap() {
            return _componentMap;
        }
    }, {
        key: 'setComponentMap',
        value: function setComponentMap(componentMap) {
            _componentMap = componentMap;
        }
    }]);

    return ReactJsonSchema;
}();

exports.default = ReactJsonSchema;
