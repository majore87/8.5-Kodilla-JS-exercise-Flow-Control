var name = prompt('What\'s your name?');
alert('Hello ' + name + ' !');
console.log('Hello ' + name + ' !');

var a = prompt('Prompt value of variable a');
var b = prompt('Prompt value of variable b');

var value = (a * a) + (2 * a * b) - (b * b);
alert("The result of the operation is: " + value);
console.log("The result of the operation is: " + value);

if (value < 0) {
	alert("Negative result");
	console.log("Negative result");
}
else if (value > 0) {
	alert("Positive result");
	console.log("Positive result");
}
else {
	alert("The result equal to zero");
	console.log("The result equal to zero");
}