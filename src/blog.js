import { 
	// Functions
	travel_to,
	// Pages
	home_page, 
    blogs_page
} from "./config";

function blog_navigation_links() {
    document.getElementById("navbar-icon").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
    document.getElementById("navbar-icon").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));

    document.getElementById("navbar-page-id").addEventListener("click", (event) => travel_to(blogs_page, 'click', 'page', event));
    document.getElementById("navbar-page-id").addEventListener("keydown", (event) => travel_to(blogs_page, 'tab', 'page', event));

    document.getElementById("exit-button").addEventListener("click", (event) => travel_to(blogs_page, 'click', 'page', event));
    document.getElementById("exit-button").addEventListener("keydown", (event) => travel_to(blogs_page, 'tab', 'page', event));
}

export { blog_navigation_links };
