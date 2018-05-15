function myCoolFunction() {
    if (arguments.length == 2 && !Array.isArray(arguments[1])) {
        var f = arguments[0];
        var arr = arguments[1];
    }
}
var MyClass = /** @class */ (function () {
    function MyClass(_a) {
        var a = _a.a, _b = _a.b, b = _b === void 0 ? 'bbb' : _b;
        this.a = a;
        this.b = b;
    }
    return MyClass;
}());
new MyClass({ a: 1 });
var me = {};
me.name = 'lqw';
me.age = 23;
var x = [222, '16'];
var y = x[0].toFixed(12);
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var color = Color.BLUE;
console.log(Color[color]);
var a = {
    a: 3
};
function indentity(arg) {
    return arg;
}
indentity([{ a: 1 }]);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
var s;
var per;
console.log(s === per);
