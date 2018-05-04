/**
 * split-carousel - Carrousel with transitions in several columns
 * @version v0.0.1
 * @link 
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('carouselSplit', factory) :
	(global.carouselSplit = factory());
}(this, (function () { 'use strict';

var MAGICNUMBER = 25;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CarouselSplit = function () {
    function CarouselSplit(element, options) {
        _classCallCheck(this, CarouselSplit);

        this.init();
    }

    _createClass(CarouselSplit, [{
        key: 'init',
        value: function init() {
            console.log('El n\xFAmero m\xE1gico es: ' + MAGICNUMBER);
        }
    }]);

    return CarouselSplit;
}();

return CarouselSplit;

})));
