// Blog Cards
document.getElementById("tcss").addEventListener("click", function() {
	window.location = '/src/blogs-page/the-computer-science-speedrun/index.html';
});	

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