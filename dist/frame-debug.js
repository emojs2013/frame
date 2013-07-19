define("emo/frame/1.0.1/frame-debug", [ "arale/class/1.1.0/class-debug" ], function(require, exports, module) {
    var Class = require("arale/class/1.1.0/class-debug");
    var Frame = Class.create({
        initialize: function(data) {
            if (!data) {
                // initial data 
                data = {
                    img: null,
                    css: {},
                    dt: .1,
                    index: 0,
                    belong: null
                };
            }
            for (var i in data) {
                if (data.hasOwnProperty(i)) {
                    this[i] = data[i];
                } else {
                    this[i] = null;
                }
            }
        },
        createFrame: function(data) {
            return data;
        },
        editFrame: function(modifyFrame) {
            for (var i in modifyFrame) {
                var setMethod = "set" + i.toLocaleUpperCase();
                if (this[setMethod]) {
                    this[setMethod](modifyFrame[i]);
                    this["get" + i.toLocaleUpperCase()]();
                }
            }
        },
        copyFrame: function(frame) {
            var dupliFrame = this.clone(frame);
            return dupliFrame;
        },
        deleteFrame: function(frame) {
            if (!frame) return;
            delete frame;
        },
        getDT: function() {
            return this.dt;
        },
        setDT: function(dt) {
            this.dt = dt;
        },
        getCSS: function() {
            return this.css;
        },
        setCSS: function(css) {
            this.css = css;
        },
        setINDEX: function(index) {
            this.index = parseInt(index);
        },
        getINDEX: function() {
            return this.index;
        },
        setBELONGING: function(animate) {
            this.belong = animate;
        },
        getBELONGING: function() {
            return this.belong;
        },
        clone: function(myObj) {
            if (typeof myObj !== "object") return myObj;
            if (myObj === null) return myObj;
            var myNewObj = new Object();
            for (var i in myObj) {
                myNewObj[i] = this.clone(myObj[i]);
            }
            return myNewObj;
        }
    });
    module.exports = Frame;
});
