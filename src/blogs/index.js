
import { 
    // Functions
    travel_to, 
    setup_page,
    // Pages
    home_page, 
    blogs_page,
    // Links 
    all_about_me_blog, 
    the_computer_science_speedrun_blog 
} from "../config";

setup_page();

//
// Navigation
//

document.getElementById("navbar-icon").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
document.getElementById("navbar-icon").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));

document.getElementById("navbar-page-id").addEventListener("click", (event) => travel_to(blogs_page, 'click', 'page', event));
document.getElementById("navbar-page-id").addEventListener("keydown", (event) => travel_to(blogs_page, 'tab', 'page', event));

document.getElementById("exit-button").addEventListener("click", (event) => travel_to(home_page, 'click', 'page', event));
document.getElementById("exit-button").addEventListener("keydown", (event) => travel_to(home_page, 'tab', 'page', event));

//
// Blog Cards
//

// All About Me
document.getElementById("all-about-me").addEventListener("click", (event) => travel_to(all_about_me_blog, 'click', 'page', event));
document.getElementById("all-about-me").addEventListener("keydown", (event) => travel_to(all_about_me_blog, 'tab', 'page', event));

// The Computer Science Speedrun
document.getElementById("the-computer-science-speedrun").addEventListener("click", (event) => travel_to(the_computer_science_speedrun_blog, 'click', 'page', event));
document.getElementById("the-computer-science-speedrun").addEventListener("keydown", (event) => travel_to(the_computer_science_speedrun_blog, 'tab', 'page', event));
