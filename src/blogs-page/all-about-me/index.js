//
// Links
//

const mode = 'dev'; // dev or prod

if (mode == 'dev') {
	var home_link = '../../main-page/index.html';
} else {
	var home_link = '../../index.html';
}

const home_link = '../../main-page/index.html';
const blogs_link = '../index.html';

const code_org_inline_link = 'https://code.org/';

const discord_link = 'https://discord.gg/QGDPS6wHB8';
const youtube_link = 'https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA';
const twitter_link = 'https://twitter.com/KingPr0o7';
const github_link = 'https://github.com/KingPr0o7';

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
// Top Redirects
//

document.getElementById("navbar-icon").addEventListener("click", function(){
	window.location.href = home_link;
});

document.getElementById("navbar-page-id").addEventListener("click", function(){
	window.location.href = blogs_link;
});

//
// Exit Button
//

document.getElementById("exit-button").addEventListener("click", function() {
	window.location.href = blogs_link;
});

document.getElementById("exit-button").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = blogs_link;
	}
});

//
// Inline Links
//

// Flask
document.getElementById("code_org_inline_link").addEventListener("click", function() {
	window.open(code_org_inline_link, "_blank");
});

document.getElementById("code_org_inline_link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(code_org_inline_link, "_blank");
	}
});

//
// Contact Links
//

// Discord
document.getElementById("contact-discord").addEventListener("click", function() {
	window.open(discord_link, "_blank");
});

document.getElementById("contact-discord").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(discord_link, "_blank");
	}
});

// YouTube
document.getElementById("contact-youtube").addEventListener("click", function() {
	window.open(youtube_link, "_blank");
});

document.getElementById("contact-youtube").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(youtube_link, "_blank");
	}
});


// Twitter
document.getElementById("contact-twitter").addEventListener("click", function() {
	window.open(twitter_link, "_blank");
});

document.getElementById("contact-twitter").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(twitter_link, "_blank");
	}
});

// GitHub
document.getElementById("contact-github").addEventListener("click", function() {
	window.open(github_link, "_blank");
});

document.getElementById("contact-github").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(github_link, "_blank");
	}
});