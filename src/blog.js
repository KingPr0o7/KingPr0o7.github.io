import { 
	// Functions
	travel_to,
	// Pages
	home_page
} from "./config";

function blog_navigation_links() {
    document.getElementById("navbar-icon").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
    document.getElementById("navbar-icon").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));
}

export { blog_navigation_links };
