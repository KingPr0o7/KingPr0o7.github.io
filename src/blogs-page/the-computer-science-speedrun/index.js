// Animation On Scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
			if (entry.target.classList.contains('page-header')) {
				entry.target.setAttribute('animate', '');
			}
		}
	});
});

const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach((el) => observer.observe(el));

// Exit Button
document.getElementById("exit-button").addEventListener("click", function() {
	window.location.href = "/src/blogs-page/index.html";
});

// Inline Links
document.getElementById("flask").addEventListener("click", function() {
	window.open("https://palletsprojects.com/p/flask/", "_blank");
});

document.getElementById("github").addEventListener("click", function() {
	window.open("https://github.com/KingPr0o7/Combo-Menu/commits/main", "_blank");
});

// Contact Links
document.getElementById("contact-discord").addEventListener("click", function() {
	window.open("https://discord.gg/QGDPS6wHB8", "_blank");
});

document.getElementById("contact-youtube").addEventListener("click", function() {
	window.open("https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA", "_blank");
});

document.getElementById("contact-twitter").addEventListener("click", function() {
	window.open("https://twitter.com/KingPr0o7", "_blank");
});

document.getElementById("contact-github").addEventListener("click", function() {
	window.open("https://github.com/KingPr0o7", "_blank");
});