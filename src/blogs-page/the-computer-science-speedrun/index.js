//
// Top Redirects
//

document.getElementById("navbar-icon").addEventListener("click", function(){
	window.location = '/src/main-page/index.html';
});

document.getElementById("navbar-page-id").addEventListener("click", function(){
	window.location = '/src/blogs-page/index.html';
});

//
// Animation On Scroll
//

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
});

const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach((el) => observer.observe(el));

//
// Exit Button
//

document.getElementById("exit-button").addEventListener("click", function() {
	window.location.href = "/src/blogs-page/index.html";
});

document.getElementById("exit-button").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = "/src/blogs-page/index.html";
	}
});

//
// Inline Links
//

// Flask
document.getElementById("flask").addEventListener("click", function() {
	window.open("https://palletsprojects.com/p/flask/", "_blank");
});

document.getElementById("flask").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open("https://palletsprojects.com/p/flask/", "_blank");
	}
});

// GitHub
document.getElementById("github").addEventListener("click", function() {
	window.open("https://github.com/KingPr0o7/Combo-Menu/commits/main", "_blank");
});

document.getElementById("github").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open("https://github.com/KingPr0o7/Combo-Menu/commits/main", "_blank");
	}
});

//
// Contact Links
//

// Discord
document.getElementById("contact-discord").addEventListener("click", function() {
	window.open("https://discord.gg/QGDPS6wHB8", "_blank");
});

document.getElementById("contact-discord").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open("https://discord.gg/QGDPS6wHB8", "_blank");
	}
});

// YouTube
document.getElementById("contact-youtube").addEventListener("click", function() {
	window.open("https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA", "_blank");
});

document.getElementById("contact-youtube").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open("https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA", "_blank");
	}
});


// Twitter
document.getElementById("contact-twitter").addEventListener("click", function() {
	window.open("https://twitter.com/KingPr0o7", "_blank");
});

document.getElementById("contact-twitter").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open("https://twitter.com/KingPr0o7", "_blank");
	}
});

// GitHub
document.getElementById("contact-github").addEventListener("click", function() {
	window.open("https://github.com/KingPr0o7", "_blank");
});

document.getElementById("contact-github").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open("https://github.com/KingPr0o7", "_blank");
	}
});