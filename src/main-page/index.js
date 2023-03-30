// Elements
const navbar = document.querySelector('.desktop-navbar');
const hamburger = document.querySelector('.mobile-hamburger');
const mobile_navlist = document.getElementById('mobile-navlist');
const body = document.body;
const links = document.getElementsByClassName('navlist-link');
const snackbar = document.getElementById('snackbar');
const card = document.querySelector('.card');
const button = document.querySelector('.card-link-button');

// iOS Viewport Height Fix (Thanks to: coreuter "shorturl.at/abGT6")
function fixHeight() {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

addEventListener('load', fixHeight);
addEventListener('resize', fixHeight);
addEventListener('orientationchange', fixHeight);

card.addEventListener('focusin', () => {
  button.tabIndex = 0;
});

card.addEventListener('focusout', () => {
  button.tabIndex = -1;
});

// Change Navigation Visibility 

function changeNav(state) {
	if (state == "Enabled") {
		// Hamburger
		hamburger.removeAttribute('closed', "");
		hamburger.setAttribute('open', "");
		// Navlist
		mobile_navlist.removeAttribute('closed', "");
		mobile_navlist.setAttribute('open', "");
		// Body
		body.removeAttribute('enabled', "");
		body.setAttribute('disabled', "");  
	} 
	if (state == "Disabled") {
		// Hamburger
		hamburger.removeAttribute('open', "");
		hamburger.setAttribute('closed', "");
		// Navlist
		mobile_navlist.removeAttribute('open', "");
		mobile_navlist.setAttribute('closed', "");
		// Body
		body.removeAttribute('disabled', "");
		body.setAttribute('enabled', "");
	}
}

// Smooth Anchor Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		var scrollTo = document.querySelector(this.getAttribute("href")).offsetTop;
		if (anchor.toString().includes("intro")) {
			scrollTo = document.body.offsetTop;
			window.scrollTo({top: scrollTo, behavior: 'smooth'});
		} else {
			window.scrollTo({top: scrollTo-100, behavior: 'smooth'});
		}
	});
});

hamburger.addEventListener('click', function () {
	if (mobile_navlist.hasAttribute('closed')) {
		changeNav("Enabled");
	} else {
		changeNav("Disabled");
	}
});

// Add Link Clicking Events
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click',(evt) => changeNav("Disabled"), false);
}

// Project Cards Links
document.getElementById("cmi").addEventListener("click", function() {
	window.open("https://github.com/KingPr0o7/Combo-Menu", "_blank");
});

document.getElementById("personal-portfolio").addEventListener("click", function() {
	window.open("mailto:test@example.com?subject=subject&body=body", "_blank");
});

// Timestamps

const minute = 60;
const hour = 3600;
const day = 86400;
const week = 604800;
const month = 2629743; // 30.44 days
const year = 31556926; // 365.24 days

const today = new Date();
// Change date -> seconds
const timestamp = today.getTime();
const seconds = Math.floor(timestamp / 1000); 

const skriptlang_date = new Date('January 19, 2020 16:16:00');
const html_date = new Date('August 11, 2021 14:36:08'); // 
const css_date = new Date('August 11, 2021 14:36:08');  // - Code.org (Q1 S1 Freshman Year)
const javascript_date = new Date('August 11, 2021 14:36:08');   // 
const python_date = new Date('October 17, 2022 13:10:00') // PLTW (Q2 S1 Sophomore Year) [PLTW CS is the highest CS in my school, we don't have actual CS courses from the school]

document.getElementById('skriptlang-tooltip').textContent = `January 19, 2020`;
document.getElementById('html-tooltip').textContent = `August 11, 2021`;
document.getElementById('css-tooltip').textContent = `August 11, 2021`;
document.getElementById('javascript-tooltip').textContent = `August 11, 2021`;
document.getElementById('python-tooltip').textContent = `October 17, 2022`;

function calculate_timestamp(today, target_date) {
	// Change date -> seconds
	let timestamp = target_date.getTime();
	let past_date = Math.floor(timestamp / 1000);
	let time_elapsed = today - past_date;
	// Compare those seconds to units of time and display relativity
	if (time_elapsed < minute) {
		if (time_elapsed == 1) return `${time_elapsed} second`;
		return `${time_elapsed} seconds`;
	} else if (time_elapsed < hour) {
		time_elapsed = Math.floor(time_elapsed / minute);
		if (time_elapsed == 1) return `${time_elapsed} minute`;
		return `${time_elapsed} minutes`;		
	} else if (time_elapsed < day) {
		time_elapsed = Math.floor(time_elapsed / hour);
		if (time_elapsed == 1) return `${time_elapsed} hour`;
		return `${time_elapsed} hours`;		
	} else if (time_elapsed < week) {
		time_elapsed = Math.floor(time_elapsed / day)
		if (time_elapsed == 1) return `${time_elapsed} day`;
		return `${time_elapsed} days`;
	} else if (time_elapsed < month) {
		time_elapsed = Math.floor(time_elapsed / week)
		if (time_elapsed == 1) return `${time_elapsed} week`;
		return `${time_elapsed} weeks`;		
	} else if (time_elapsed < year) {
		time_elapsed = Math.floor(time_elapsed / month)
		if (time_elapsed == 1) return `${time_elapsed} month`;
		return `${time_elapsed} months`;		
	} else {
		time_elapsed = Math.floor(time_elapsed / year);
		if (time_elapsed == 1) return `${time_elapsed} year`;
		return `${time_elapsed} years`;		
	}
}

document.getElementById('language-skriptlang-duration').textContent = calculate_timestamp(seconds, skriptlang_date);
document.getElementById('language-html-duration').textContent = calculate_timestamp(seconds, html_date);
document.getElementById('language-css-duration').textContent = calculate_timestamp(seconds, css_date);
document.getElementById('language-javascript-duration').textContent = calculate_timestamp(seconds, javascript_date);
document.getElementById('language-python-duration').textContent = calculate_timestamp(seconds, python_date);

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