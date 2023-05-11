//
// Elements
//

const navbar = document.querySelector('.desktop-navbar');
const hamburger = document.querySelector('.mobile-hamburger');
const mobile_navlist = document.getElementById('mobile-navlist');
const body = document.body;
const links = document.getElementsByClassName('navlist-link');
const snackbar = document.getElementById('snackbar');
const card = document.querySelector('.card');
const button = document.querySelector('.card-link-button');
const typing_speed = 65;
const cursor = document.getElementById("cursor");

//
// Links
//

const all_about_me_blog = '../blogs/all-about-me/index.html';
const the_computer_science_speedrun_blog = '../blogs/the-computer-science-speedrun/index.html';

const all_blogs_page = `../blogs/index.html`;

const combo_menu_interface_link = 'https://github.com/KingPr0o7/Combo-Menu';
const personal_portfolio_link = 'https://github.com/KingPr0o7/KingPr0o7.github.io';

const privacy_link = '../privacy-policy/index.html'

const discord_link = 'https://discord.gg/QGDPS6wHB8';
const youtube_link = 'https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA';
const twitter_link = 'https://twitter.com/KingPr0o7';
const gmail_link = 'https://mail.google.com/mail/?view=cm&fs=1&to=nathan@ncp.dev&su=&body=';
const github_link = 'https://github.com/KingPr0o7';


// iOS Viewport Height Fix (Thanks to: coreuter "shorturl.at/abGT6")
function fixHeight() {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

addEventListener('load', fixHeight);
addEventListener('resize', fixHeight);
addEventListener('orientationchange', fixHeight);

//
// Animation On Scroll
//

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

//
// Change Navigation Visibility 
//

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

mobile_navlist.addEventListener('focusin', function() {
	changeNav("Enabled");
});

mobile_navlist.addEventListener('focusout', function() {
	changeNav("Disabled");
});

//
// Smooth Anchor Scrolling
//

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
	links[i].addEventListener('click', (evt) => changeNav("Disabled"), false);
}

//
// Typing Animation
//

async function removeText(element, cursor, text, typing_speed, speed) {
	let length = element.textContent.length - 4;
	console.log(length)
	for (var i = 0; i < length; i++) {
	  cursor.remove();
	  element.textContent = element.textContent.slice(0, -1);
	  element.appendChild(cursor);
	  await new Promise(resolve => setTimeout(resolve, speed));
	}
	if (text == "I'm Nathan Parker") {
		type("#intro-header-nl", "Nate", "add", typing_speed, 0);
	} else if (text == "Nate") {
		type("#intro-header-nl", "Nathaniel", "add", typing_speed, 0)
	} else if (text == "Nathaniel") {
		type("#intro-header-nl", "KingPr0o7", "add", typing_speed, 0)
	} else if (text == "KingPr0o7") {
		type("#intro-header-nl", "a Developer", "add", typing_speed, 0)
	} else if (text == "a Developer") {
		type("#intro-header-nl", "Nathan Parker", "add", typing_speed, 0)
	}
  }

function type(targetElement, textToType, style, speed, index) {
	let element = document.querySelector(`${targetElement}`);
	let text = `${textToType}`;
	if (style == 'add') {
		if (index < text.length) {
			cursor.removeAttribute('blinking', '');
			cursor.remove();
			element.innerHTML += text.charAt(index);  
			index++;
			element.appendChild(cursor);		  
			setTimeout(type, speed, targetElement, textToType, style, speed, index);
		} else {
			cursor.setAttribute('blinking', '');
			setTimeout( function() {
				if (text == 'I\'m Nathan Parker') {
					type("#intro-header-nl", "I'm Nathan Parker", 'remove', typing_speed, 0);
				} else if (text == 'Nate') {
					type("#intro-header-nl", "Nate", 'remove', typing_speed, 0);
				} else if (text == 'Nathaniel') {
					type("#intro-header-nl", "Nathaniel", 'remove', typing_speed, 0);
				} else if (text == 'KingPr0o7') {
					type("#intro-header-nl", "KingPr0o7", 'remove', typing_speed, 0);
				} else if (text == 'a Developer') {
					type("#intro-header-nl", "a Developer", 'remove', typing_speed, 0);
				} else if (text == 'Nathan Parker') {
					cursor.remove();
				}
			}, 1000); 
		}
	} else if (style == 'remove') {
		removeText(element, cursor, text, typing_speed, speed)
	}
}

setTimeout( function() {
	type("#intro-header-nl", "I'm Nathan Parker", 'add', typing_speed, 0);
}, 1500)

//
// Intro
//

document.getElementById("link").addEventListener("click", function() {
	window.location.href = all_about_me_blog;
});

document.getElementById("link").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = all_about_me_blog;
	}
});

//
// Blog Cards
//

// All About Me
document.getElementById("all-about-me").addEventListener("click", function(){
	window.location.href = all_about_me_blog;
});

document.getElementById("all-about-me").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = all_about_me_blog;
	}
});

// The Computer Science Speedrun
document.getElementById("the-computer-science-speedrun").addEventListener("click", function(){
	window.location.href = the_computer_science_speedrun_blog;
});

document.getElementById("the-computer-science-speedrun").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = the_computer_science_speedrun_blog;
	}
});


// All Blogs Redirect
document.getElementById("blogs-all-redirect").addEventListener("click", function() {
	window.location.href = all_blogs_page;
});	

document.getElementById("blogs-all-redirect").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.location.href = all_blogs_page;
	}
});	

//
// Project Cards Links
//

// Combo Menu Interface
document.getElementById("cmi").addEventListener("click", function(){
	window.open(combo_menu_interface_link, "_blank");
});

document.getElementById("cmi").addEventListener("keydown", function(event) {
	if (event.key == "Enter") {
		window.open(combo_menu_interface_link, "_blank");
	}
});

//
// Timestamps
//

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
const python_date = new Date('October 17, 2022 13:10:00'); // PLTW (Q2 S1 Sophomore Year) [PLTW CS is the highest CS in my school, we don't have actual CS courses from the school]
const sass_date = new Date('April 27, 2023 17:05:11');

document.getElementById('skriptlang-tooltip').textContent = `January 19, 2020`;
document.getElementById('html-tooltip').textContent = `August 11, 2021`;
document.getElementById('css-tooltip').textContent = `August 11, 2021`;
document.getElementById('javascript-tooltip').textContent = `August 11, 2021`;
document.getElementById('python-tooltip').textContent = `October 17, 2022`;
document.getElementById('sass-tooltip').textContent = `April 27, 2023`;

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
document.getElementById('language-sass-duration').textContent = calculate_timestamp(seconds, sass_date);

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