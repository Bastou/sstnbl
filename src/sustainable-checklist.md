---
layout: layouts/home.html
permalink: sustainable-checklist.html
eleventyExcludeFromCollections: true
---
## Sustainable web best practices checklist
The first number after the text is for the priority.
The second and last represent the impact scale (3 is max).

- Eliminate non-essential functionality 1 3
- Precisely quantify the need 1 3
- Fluidify the process 1 3
- Prefer assisted input over self-completion 1 3
- Favour a simple, uncluttered design, adapted to the web 1 3
- Prefer a "mobile first" approach, otherwise RESS 1 3
- Respect the principle of quick navigation in the history 2 2
- Propose asynchronous processing where possible 1 3
- Limit the number of HTTP requests 1 3
- Store static data locally 1 3
- Using a framework or custom development 2 2
- Limiting the use of a plugin 1 3
- Server Limit the number of domains serving resources 2 2
- Replace the official social network sharing buttons 2 2
- Generate CSS 2 spritesheets 2
- Cut out the CSS 1 3
- Limit the number of CSS 1 3
- Prefer CSS to images 1 3
- Writing effective CSS selectors 1 3
- Group similar CSS declarations 1 3
- Use abbreviated CSS notations 1 3
- Use conditional comments 1 3
- Favor standard fonts 1 3
- Prefer glyphs to pictures 2 2
- Validate pages with W3C 2 2
- Outsourcing CSS and JavaScript 1 3
- Delete image tags with empty SRC attribute 1 3
- Resize images outside HTML 1 3
- Avoid using bitmap images for the interface 1 3
- Optimize vector images 1 3
- Using lazy image loading 2 2
- Avoid expensive Javascript / CSS animations 1 3
- Use a light theme 1 3

### Server
- Use a templating system (Smarty, Twig) 3 1
-  Cache frequently used calculated data 1 3
-  Caching the Bytecode intermediate code 1 3
-  Use the single quote (') instead of the quote (") 3 1
-  Replace $i++ with ++$i 3 1
-  Free variables from memory that are no longer needed 1 3
-  Delete all warnings and notices 1 3
-  Use static variables 1 3
- Minimize CSS files 1 3
-  Compress CSS and Javascript libraries 1 3
-  Combine CSS and JavaScript files 1 3
- Optimize bitmap images 1 3
-  Minimize JavaScript files 1 3
-  Optimize cookie size 3 1
-  Compress HTML output 1 3
- Favor HSTS Preload list to redirects 301 1 3
- Put in place an end-of-life plan for the site 2 2
-  Choose a "green" host (like InfoManiak) 1 3
-  Use electricity from RE (renewable) 1 3
-  Adapt quality of service and availability level 1 3
-  Using virtualized servers 3 1
-  Optimize server energy efficiency 1 3
-  Install the minimum required on server 1 3
-  Store data in the cloud 3 1
-  Hosting resources (CSS/JS) on a domain without cookies 1 3
-  Avoid redirections 1 3
-  Do not generate page 404 1 3
-  Use an asynchronous server 1 3
-  Using a CDN 2 2
-  Use HTTP cache 1 3
- Caching the favicon.ico 1 3
-  Add Expires or Cache-Control headers 1 3
-  Caching Ajax 3 1 responses
-  Disable some web server access logs 2 2
-  Disable DNS lookup from Apache 2 2
- disable AllowOverride 1 3
- Disable MySQL binary logs / MariaDb 2 2
- Favor static pages 2 2
- Creating a modular application architecture 1 3
- Choose a suitable data format 1 3

### Javascript
- Do not make any changes to the DOM when crossing it 1 3
- Make the elements of the DOM invisible when modified 2 2
- Minimize repaint (appearance) and reflow (layout) 1 3
- Using event delegation 1 3
- Modify several CSS properties at once 1 3
- Validate JavaScrite code
