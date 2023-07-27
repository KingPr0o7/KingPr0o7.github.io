import { 
	// Functions
	travel_to,
	setup_page,
	// Links
	github_privacy_inline_link, 
	github_pages_inline_link, 
	github_repo_inline_link, 
	home_page
} from "../config";

setup_page();

//
// Navigation
//

document.getElementById("navbar-icon").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
document.getElementById("navbar-icon").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));

document.getElementById("exit-button").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
document.getElementById("exit-button").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));


//
// Inline Links
//

// GitHub Privacy
document.getElementById("github_privacy_inline_link").addEventListener("click", (event) => travel_to(github_privacy_inline_link, 'click', 'link', event));
document.getElementById("github_privacy_inline_link").addEventListener("keydown", (event) => travel_to(github_privacy_inline_link, 'tab', 'link', event));

// About GitHub Pages
document.getElementById("github_pages_inline_link").addEventListener("click", (event) => travel_to(github_pages_inline_link, 'click', 'link', event));
document.getElementById("github_pages_inline_link").addEventListener("keydown", (event) => travel_to(github_pages_inline_link, 'tab', 'link', event));

// GitHub Repo
document.getElementById("github_repo_inline_link").addEventListener("click", (event) => travel_to(github_repo_inline_link, 'click', 'link', event));
document.getElementById("github_repo_inline_link").addEventListener("keydown", (event) => travel_to(github_repo_inline_link, 'tab', 'link', event));

// My Website
document.getElementById("website_inline_link").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
document.getElementById("website_inline_link").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));