import { 
	// Functions
	setup_page,
	travel_to,
	// Links
	code_org_inline_link
} from "../../config";
import { blog_navigation_links } from "../../blog";

blog_navigation_links();
setup_page();

//
// Inline Links
//

document.getElementById("code_org_inline_link").addEventListener("click", (event) => travel_to(code_org_inline_link, 'click', 'link', event));
document.getElementById("code_org_inline_link").addEventListener("keydown", (event) => travel_to(code_org_inline_link, 'tab', 'link', event));