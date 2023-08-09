import {
	// Functions 
	setup_page,
	travel_to,
	// Pages
	// Blogs
	all_about_me_blog, 
	the_computer_science_speedrun_blog,
	// Links
	combo_menu_interface_link,
} from "../src/config";

setup_page();

//
// Elements
//

const hamburger = document.querySelector('.mobile-hamburger');
const mobile_navlist = document.getElementById('mobile-navlist');
const links = document.getElementsByClassName('navlist-link');
const typing_speed = 65;
const cursor = document.getElementById("cursor");

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
		document.body.removeAttribute('enabled', "");
		document.body.setAttribute('disabled', "");  
	} else if (state == "Disabled") {
		// Hamburger
		hamburger.removeAttribute('open', "");
		hamburger.setAttribute('closed', "");
		// Navlist
		mobile_navlist.removeAttribute('open', "");
		mobile_navlist.setAttribute('closed', "");
		// Body
		document.body.removeAttribute('disabled', "");
		document.body.setAttribute('enabled', "");
	}
}

mobile_navlist.addEventListener('focusin', () => changeNav("Enabled"));
mobile_navlist.addEventListener('focusout', () => changeNav("Disabled"));

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

hamburger.addEventListener('click', () => mobile_navlist.hasAttribute('closed') ? changeNav("Enabled") : changeNav("Disabled"));

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', (evt) => changeNav("Disabled"), false);
}

//
// Typing Animation
// - Used for the intro header
//

async function removeText(element, cursor, text, typing_speed, speed) {
	let length = element.textContent.length - 4;
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

setTimeout(function() {
	type("#intro-header-nl", "I'm Nathan Parker", 'add', typing_speed, 0);
}, 1500)

//
// Intro Link
//

document.getElementById("link").addEventListener("click", (event) => travel_to(all_about_me_blog, 'click', 'page', event));
document.getElementById("link").addEventListener("keydown", (event) => travel_to(all_about_me_blog, 'tab', 'page', event));

//
// Timestamps
// - Calculates the time elapsed since the start of my journey in each technology
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
const github_date = new Date('April 20, 2020 18:20:11');
const html_date = new Date('August 11, 2021 14:36:08'); // 
const css_date = new Date('August 11, 2021 14:36:08');  // - Code.org (Q1 S1 Freshman Year)
const javascript_date = new Date('August 11, 2021 14:36:08');   // 
const figma_date = new Date('September 9, 2022 23:49:23');
const sass_date = new Date('April 27, 2023 17:05:11');
const python_date = new Date('October 17, 2022 13:10:00'); // PLTW (Q2 S1 Sophomore Year) [PLTW CS is the highest CS in my school, we don't have actual CS courses from the school]

function calculate_timestamp(target_date) {
	// Change date -> seconds
	let timestamp = target_date.getTime();
	let past_date = Math.floor(timestamp / 1000);
	let time_elapsed = seconds - past_date;
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

document.getElementById('technology-skriptlang-duration').textContent = calculate_timestamp(skriptlang_date);
document.getElementById('technology-github-duration').textContent = calculate_timestamp(github_date);
document.getElementById('technology-html-duration').textContent = calculate_timestamp(html_date);
document.getElementById('technology-css-duration').textContent = calculate_timestamp(css_date);
document.getElementById('technology-javascript-duration').textContent = calculate_timestamp(javascript_date);
document.getElementById('technology-figma-duration').textContent = calculate_timestamp(figma_date);
document.getElementById('technology-sass-duration').textContent = calculate_timestamp(sass_date);
document.getElementById('technology-python-duration').textContent = calculate_timestamp(python_date);