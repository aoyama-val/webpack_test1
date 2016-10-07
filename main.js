require("./style.css");

var print = require("./print");
var leftpad = require("leftpad");
var $ = require("jquery");
print("Hello webpack");
print("tokoroten");

$(function() {
    console.log("aaa");
    $('#hoge').text("もげもげもげもげとげとげ");
    console.log("bbb");
});


print("ogmeomgoemge");
print("ogmeomgoemge");
print("ogmeomgoemge");
print("ogmeomgoemge");

console.log(leftpad(123, 10));
