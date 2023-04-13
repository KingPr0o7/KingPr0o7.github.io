//
// Elements
//

var cursor = document.getElementById("cursor");

//
// Immutables 
//

const numbers = '0123456789';
const original_code = document.getElementById('error-code');
type('error-name', 'PAGE NOT FOUND!', 40, 0, true);

//
// Links
//

const mode = 'prod'; // 'dev' or 'prod'

if (mode == 'dev') {
	var home_link = '../../main-page/index.html';
} else {
	var home_link = 'index.html';
}

const readme_link = 'https://github.com/KingPr0o7/KingPr0o7.github.io#404-filepage-not-found-online-only';
const github_link = 'https://www.githubstatus.com/';
const twitter_link = 'https://twitter.com/githubstatus?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';

document.getElementById("readme-link").addEventListener("click", function() {
	window.open(readme_link, "_blank");
});

document.getElementById("readme-link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(readme_link, "_blank");
	}
});

document.getElementById("error-link").addEventListener("click", function() {
	window.location.href = home_link;
});

document.getElementById("error-link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = home_link;
	}
});

document.getElementById("github-website").addEventListener("click", function() {
	window.open(github_link, "_blank");
});

document.getElementById("github-website").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(github_link, "_blank");
	}
});

document.getElementById("github-twitter").addEventListener("click", function() {
	window.open(twitter_link, "_blank");
});

document.getElementById("github-twitter").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(twitter_link, "_blank");
	}
});

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
