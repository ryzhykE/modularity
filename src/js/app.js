// call secondModule run function
define(['secondModule'], function(secondModule) {
	var jsOutput = document.getElementById('js-output');
	jsOutput.innerHTML += 'Entry module works!';
	secondModule.run(jsOutput);
});
