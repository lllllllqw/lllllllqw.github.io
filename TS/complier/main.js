function myCoolFunction() {
    if (arguments.length == 2 && !Array.isArray(arguments[1])) {
        var f = arguments[0];
        var arr = arguments[1];
    }
}
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
