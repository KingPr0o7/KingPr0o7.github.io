const numbers = '0123456789';
const original_code = document.getElementById('error-code');
const cursor = document.getElementById("cursor");
type('error-name', 'PAGE NOT FOUND!', 40, 0, true);

// "Real" Typing Characters
function type(targetElement, textToType, speed, index, cursorMode) {
	let element = document.getElementById(`${targetElement}`);
	let text = `${textToType}`;
	if (index < text.length) {
		if (cursorMode == true) {
			element.removeChild(cursor);
			element.innerHTML += text.charAt(index);  
			index++;
			element.appendChild(cursor);		  
		} else {
			element.innerHTML += text.charAt(index);  
			index++;			
		}
		setTimeout(type, speed, `${targetElement}`, text, speed, index, cursorMode);
	} else{
		cursor.remove();
	}
}

var loop_count = 0
var loop = setInterval(function() {
	let new_code = original_code.textContent.split('').map(function(index) {
		return numbers[Math.floor(Math.random() * 10)];
	})
	.join('');

	if (loop_count >= 150) new_code = '404';

	original_code.textContent = new_code;

	if (loop_count >= 150) clearInterval(loop);
	loop_count += 1;
}, 30);

// Back Home Link
document.getElementById("return-text").addEventListener("click", function() {
	window.open("https://github.com/KingPr0o7/Combo-Menu", "_blank");
});