$(document).ready(function () {


$(".navs").click( function () {

$("#nav").toggle(300);


var y= $(".navs").prop("classList");

if (y[1]=="fa-bars" || y[0]=="fa-bars" || y[2]=="fa-bars" ||y[3]=="fa-bars") {


$(".navs").removeClass("fa-bars");

$(".navs").addClass("fa-times");
} else {

$(".navs").removeClass("fa-times");

$(".navs").addClass("fa-bars");
}



});

$("#main").click (function () {

$("#nav").hide(300);

var x= $(".navs").prop("classList");

if (x[1]=="fa-times" || x[0]=="fa-times" || x[2]=="fa-times" ||x[3]=="fa-times") {


$(".navs").removeClass("fa-times");

$(".navs").addClass("fa-bars");
} 


});

$("#main").mouseenter (function () {

$("#nav").hide(300);

var z= $(".navs").prop("classList");

if (z[1]=="fa-times" || z[0]=="fa-times" || z[2]=="fa-times" ||z[3]=="fa-times") {


$(".navs").removeClass("fa-times");

$(".navs").addClass("fa-bars");
} 


});

});





























