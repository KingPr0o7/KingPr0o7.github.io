import logo from './images/branding/ncp-logo.png';
import redirect_icon from './images/icons/link.svg';
import github_icon from './images/icons/logos/github.svg';
import x_icon from './images/icons/logos/x.svg';
import discord_icon from './images/icons/logos/discord.svg';
import youtube_icon from './images/icons/logos/youtube.svg';
import gmail_icon from './images/icons/logos/gmail.svg';

console.log(logo, redirect_icon);

//
// iOS Viewport Height Fix (Thanks to: coreuter "shorturl.at/abGT6")
//

function fixHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
    addEventListener('load', fixHeight);
    addEventListener('resize', fixHeight);
    addEventListener('orientationchange', fixHeight);
}


//
// Animation On Scroll
//

function animate_scrolling() {
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
}

//
// Redirecting
//

function travel_to(link, mode, type, event) {
    if (mode == 'tab') {
		if (type == 'link') {
			event.key == 'Enter' ? window.open(link, "_blank") : null;
		} else if (type == 'page') {
			event.key == 'Enter' ? window.location.href = link : null;
		}
    } else {
		type == 'link' ? window.open(link, "_blank") : window.location.href = link
    }
}

//
// Pages
//

const home_page = '../../';
const blogs_page = '../../blogs/';

//
// Blogs
//

const all_about_me_blog = '../../blogs/all-about-me/';
const the_computer_science_speedrun_blog = '../../blogs/the-computer-science-speedrun/';
const privacy_blog = '../../privacy-policy/';

// 
// Links
//

// Footer
const combo_menu_interface_link = 'https://github.com/KingPr0o7/Combo-Menu';
const discord_link = 'https://discord.gg/QGDPS6wHB8';
const youtube_link = 'https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA';
const x_link = 'https://x.com/KingPr0o7';
const gmail_link = 'https://mail.google.com/mail/?view=cm&fs=1&to=nathan@ncp.dev&su=&body=';
const github_link = 'https://github.com/KingPr0o7';

// 404 Page
const readme_link = 'https://github.com/KingPr0o7/KingPr0o7.github.io#404-filepage-not-found-online-only';
const github_status_link = 'https://www.githubstatus.com/';
const x_github_status = 'https://twitter.com/githubstatus?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';

// Privacy Policy
const github_privacy_inline_link = 'https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement';
const github_pages_inline_link = 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection';
const github_repo_inline_link = 'https://github.com/KingPr0o7/KingPr0o7.github.io';

// All About Me
const code_org_inline_link = 'https://code.org/';

// The Computer Science Speedrun
const flask_inline_link = 'https://palletsprojects.com/p/flask/';
const github_combomenu_inline_link = 'https://github.com/KingPr0o7/Combo-Menu/commits/main';

//
// Footer
//

var footer = document.createElement('div');
footer.innerHTML = `
    <dialog data-modal id="footer-modal">
    <div id='footer-modal-container'>
        <div id="footer-modal-content">
            <p>📧 <span class='inline'>nathan@ncp.dev</span></p>
            <div id="gmail-link" tabindex="0">
                <img id="link-image" src="${redirect_icon}" alt="Redirect Icon" />
                <p id="link-text">Gmail</p>
            </div>	
        </div>
        <div id="footer-modal-button">
            <button data-close-modal id="footer-modal-close">Close</button>
        </div>
    </div>
    </dialog>

    <!-- Footer -->
    <div class="hidden" id="footer">
        <div id="footer-container">
            <div id="footer-content">
                <div id="footer-logo">
                    <img id="footer-icon" src="${logo}" alt="NCP Icon" title="NCP Logo">
                </div>			
                <div id="footer-socials">
                    <div id="contact-container">
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-github" src="${github_icon}" alt="Contact Method GitHub" title="GitHub" tabindex="0">
                        </div>	
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-x" src="${x_icon}" alt="Contact Method X" title="X" tabindex="0">
                        </div>
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-discord" src="${discord_icon}" alt="Contact Method Discord" title="Discord" tabindex="0">
                        </div>
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-youtube" src="${youtube_icon}" alt="Contact Method YouTube" title="YouTube" tabindex="0">
                        </div>
                        <div class="contact-image-container" data-open-modal>
                            <img class="contact-image" id="contact-gmail" src="${gmail_icon}" alt="Contact Method Gmail" title="Gmail" tabindex="0">
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-documents">
                <p id="footer-privacy" tabindex="0">Privacy</p>			
            </div>	
            <hr>
            <div id="footer-copyright">
                <p id="footer-copyright">Copyright © 2023 Nathan Parker. All rights reserved. Licensed under the AGPLv3.</p>
            </div>
        </div>
    </div>
`;

// GitHub
footer.querySelector("#contact-github").addEventListener("click", (event) => travel_to(github_link, 'click', 'link', event));
footer.querySelector("#contact-github").addEventListener("keydown", (event) => travel_to(github_link, 'tab', 'link', event));

// X (Twitter)
footer.querySelector("#contact-x").addEventListener("click", (event) => travel_to(x_link, 'click', 'link', event));
footer.querySelector("#contact-x").addEventListener("keydown", (event) => travel_to(x_link, 'tab', 'link', event));

// Discord
footer.querySelector("#contact-discord").addEventListener("click", (event) => travel_to(discord_link, 'click', 'link', event));
footer.querySelector("#contact-discord").addEventListener("keydown", (event) => travel_to(discord_link, 'tab', 'link', event));

// YouTube
footer.querySelector("#contact-youtube").addEventListener("click", (event) => travel_to(youtube_link, 'click', 'link', event));
footer.querySelector("#contact-youtube").addEventListener("keydown", (event) => travel_to(youtube_link, 'tab', 'link', event));

// Gmail
footer.querySelector("#contact-gmail").addEventListener("click", () => footer.querySelector('[data-modal]').showModal());
footer.querySelector("#contact-gmail").addEventListener("keydown", (event) => event.key == 'Enter' ? footer.querySelector('[data-modal]').showModal() : null);

// Gmail Modal
footer.querySelector('#gmail-link').addEventListener('click', (event) => travel_to(gmail_link, 'click', 'link', event));
footer.querySelector('#gmail-link').addEventListener('keydown', (event) => travel_to(gmail_link, 'tab', 'link', event));

footer.querySelector('[data-close-modal]').addEventListener('click', () => footer.querySelector('[data-modal]').close());
footer.querySelector('[data-close-modal]').addEventListener('keydown', (event) => event.key == 'Enter' ? footer.querySelector('[data-modal]').close() : null);

// Privacy Policy
footer.querySelector('#footer-privacy').addEventListener("click", (event) => travel_to(privacy_blog, 'click', 'page', event));
footer.querySelector('#footer-privacy').addEventListener('keydown', (event) => travel_to(privacy_blog, 'tab', 'page', event));

function setup_page() {
    fixHeight();
    document.body.appendChild(footer);
    animate_scrolling();
}

export {
    // Functions
    setup_page,
    travel_to,
    // Pages 
    home_page, 
    blogs_page,
    // Blogs 
    all_about_me_blog, 
    the_computer_science_speedrun_blog,
    privacy_blog,
    // Links
    combo_menu_interface_link,
    discord_link,
    youtube_link,
    x_link,
    gmail_link,
    github_link,
    readme_link,
    github_status_link,
    x_github_status,
    github_privacy_inline_link,
    github_pages_inline_link,
    github_repo_inline_link,
    code_org_inline_link,
    flask_inline_link,
    github_combomenu_inline_link
};