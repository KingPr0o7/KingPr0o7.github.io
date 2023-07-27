import { 
	// Functions
	setup_page,
	travel_to,
	// Links
	flask_inline_link, 
	github_combomenu_inline_link
} from "../../config";
import { blog_navigation_links } from "../../blog";

blog_navigation_links();
setup_page();

//
// Inline Links
//

// Flask
document.getElementById("flask_inline_link").addEventListener("click", (event) => travel_to(flask_inline_link, 'click', 'link', event));
document.getElementById("flask_inline_link").addEventListener("keydown", (event) => travel_to(flask_inline_link, 'tab', 'link', event));

// GitHub
document.getElementById("github_inline_link").addEventListener("click", (event) => travel_to(github_combomenu_inline_link, 'click', 'link', event));
document.getElementById("github_inline_link").addEventListener("keydown", (event) => travel_to(github_combomenu_inline_link, 'tab', 'link', event));