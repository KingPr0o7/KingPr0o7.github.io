
import { 
	// Functions
	travel_to, 
	// Pages
	home_page,
	// Links 
	readme_link, 
	github_status_link, 
	x_github_status 
} from "../config";

var cursor = document.getElementById("cursor");
const numbers = '0123456789';
const original_code = document.getElementById('error-code');
type('error-name', 'PAGE NOT FOUND!', 40, 0, true);

//
// Links
//

document.getElementById("readme-link").addEventListener("click", (event) => travel_to(readme_link, 'click', 'link', event));
document.getElementById("readme-link").addEventListener("keydown", (event) => travel_to(readme_link, 'tab', 'link', event));

document.getElementById("error-link").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
document.getElementById("error-link").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));

document.getElementById("github-website").addEventListener("click", (event) => travel_to(github_status_link, 'click', 'link', event));
document.getElementById("github-website").addEventListener("keydown", (event) => travel_to(github_status_link, 'tab', 'link', event));

document.getElementById("github-x").addEventListener("click", (event) => travel_to(x_github_status, 'click', 'link', event));
document.getElementById("github-x").addEventListener("keydown", (event) => travel_to(x_github_status, 'tab', 'link', event));

//
// "Real" Typing Characters
//

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
	} else {
		if (text == 'PAGE NOT FOUND!') {
			var new_cursor = cursor.cloneNode();
			cursor.remove();
			document.getElementById('error-link').append(new_cursor);
			cursor = new_cursor;
			type('error-link', 'RETURN HOME!', 40, 0, true);
		} else {
			cursor.remove();
		}
	}
}

//
// Error Animation
//

var loop_count = 0
var loop = setInterval(function() {
	var new_code = original_code.textContent;
	if (loop_count <= 75) {
		new_code = `${numbers[Math.floor(Math.random() * 10)]}${numbers[Math.floor(Math.random() * 10)]}${numbers[Math.floor(Math.random() * 10)]}`
	} else if (loop_count <= 150) {
		new_code = `4${numbers[Math.floor(Math.random() * 10)]}${numbers[Math.floor(Math.random() * 10)]}`
	} else if (loop_count <= 225) {
		new_code = `40${numbers[Math.floor(Math.random() * 10)]}`
	} else if (loop_count <= 300) {
		new_code = `404`;
	}
	original_code.textContent = new_code;

	if (loop_count >= 300) clearInterval(loop);
	loop_count += 1;
}, 20);
