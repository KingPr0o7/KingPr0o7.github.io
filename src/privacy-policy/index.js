//
// Links
//

const mode = 'dev'; // 'dev' or 'prod'

function get_home_link() {
	if (mode == 'dev') {
		return '../main-page/index.html';
	} else {
		return '../../index.html';
	}
}

const github_privacy_inline_link = 'https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement';
const github_pages_inline_link = 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection'
const github_repo_inline_link = 'https://github.com/KingPr0o7/KingPr0o7.github.io'

const privacy_link = '../privacy-policy/index.html'

const discord_link = 'https://discord.gg/QGDPS6wHB8';
const youtube_link = 'https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA';
const twitter_link = 'https://twitter.com/KingPr0o7';
const gmail_link = 'https://mail.google.com/mail/?view=cm&fs=1&to=nathan@ncp.dev&su=&body=';
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
	window.location.href = get_home_link();
});

document.getElementById("navbar-icon").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = get_home_link();
	}
});

//
// Exit Button
//

document.getElementById("exit-button").addEventListener("click", function() {
	window.location.href = get_home_link();
});

document.getElementById("exit-button").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = get_home_link();
	}
});

//
// Inline Links
//

// GitHub Privacy
document.getElementById("github_privacy_inline_link").addEventListener("click", function() {
	window.open(github_privacy_inline_link, "_blank");
});

document.getElementById("github_privacy_inline_link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(github_privacy_inline_link, "_blank");
	}
});

// About GitHub Pages
document.getElementById("github_pages_inline_link").addEventListener("click", function() {
	window.open(github_pages_inline_link, "_blank");
});

document.getElementById("github_pages_inline_link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(github_pages_inline_link, "_blank");
	}
});

// GitHub Repo
document.getElementById("github_repo_inline_link").addEventListener("click", function() {
	window.open(github_repo_inline_link, "_blank");
});

document.getElementById("github_repo_inline_link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(github_repo_inline_link, "_blank");
	}
});

// My Website
document.getElementById("website_inline_link").addEventListener("click", function(){
	window.location.href = get_home_link();
});

document.getElementById("website_inline_link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = get_home_link();
	}
});

//
// Claim Links
//

// Privacy Policy

document.getElementById("footer-privacy").addEventListener("click", function(){
	window.location.href = privacy_link;
});

document.getElementById("footer-privacy").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = privacy_link;
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

// Gmail
document.getElementById("contact-gmail").addEventListener("click", function() {
	window.open(gmail_link, "_blank");
});

document.getElementById("contact-gmail").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(gmail_link, "_blank");
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