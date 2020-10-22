---
layout: layouts/home.html
permalink: sustainable-checklist.html
eleventyExcludeFromCollections: true
---

## Sustainable web best practices checklist

Checklist for helping a website sustainable design & development, mainly from [Green It Collective](https://collectif.greenit.fr/ecoconception-web/).

| Category           | Best Practice                                                                      | Priority | Weighting |
| ------------------ | ---------------------------------------------------------------------------------- | -------- | --------- |
| Business logic     | Remove non-essential features                                                      | 1        | 3         |
| Business logic     | Precisely specify the need                                                         | 1        | 3         |
| Business logic     | Improve the process flow                                                           | 1        | 3         |
| Ergonomic          | Use input help instead of autocomplete                                             | 1        | 3         |
| Design             | Choose a Design that is simple, clear and tailored to the web                      | 1        | 3         |
| Design             | Favor a « mobile first » approach, otherwise use the RESS architecture             | 1        | 3         |
| HTML               | Allow for quick navigation through the history                                     | 2        | 2         |
| Architecture       | Employ asynchronous processing when possible                                       | 1        | 3         |
| Architecture       | Limit the number of HTTP requests                                                  | 1        | 3         |
| Architecture       | Store static data locally                                                          | 1        | 3         |
| Architecture       | Use a framework or custom build                                                    | 2        | 2         |
| Architecture       | Use as few plugins as possible                                                     | 1        | 3         |
| Architecture       | Favor static pages                                                                 | 2        | 2         |
| Architecture       | Create a modular application architecture                                          | 1        | 3         |
| Technology         | Choose the most suitable technology                                                | 1        | 3         |
| Technology         | Use performance-orientated forks of applications                                   | 1        | 3         |
| Technology         | Choose a suitable data format                                                      | 1        | 3         |
| Templating         | Limit the number of domains hosting the resources                                  | 2        | 2         |
| widget             | Replace official social media sharing buttons                                      | 2        | 2         |
| CSS                | Generate CSS sprite sheets                                                         | 2        | 2         |
| CSS                | Split CSS                                                                          | 1        | 3         |
| CSS                | Minimize the number of CSS files and compress them                                 | 1        | 3         |
| CSS                | Favor CSS over images                                                              | 1        | 3         |
| CSS                | Write efficient CSS selectors                                                      | 1        | 3         |
| CSS                | Group similar CSS declarations                                                     | 1        | 3         |
| CSS                | Use shortened CSS notations                                                        | 1        | 3         |
| CSS                | Provide a print style sheet                                                        | 1        | 3         |
| CSS                | Use conditional comments                                                           | 1        | 3         |
| Font               | Use standard typefaces                                                             | 1        | 3         |
| Font               | Favor glyphs over images                                                           | 2        | 2         |
| HTML               | Check the Web pages with the W3C validator                                         | 2        | 2         |
| HTML               | Externalize CSS files and JavaScript                                               | 1        | 3         |
| Image              | Delete image tags with empty SRC attributes                                        | 1        | 3         |
| Image              | Resize images outside of the browser                                               | 1        | 3         |
| Image              | Avoid using bitmap images for the GUI                                              | 1        | 3         |
| Image              | Optimize vector images                                                             | 1        | 3         |
| Image              | Use a lazy load for images                                                         | 2        | 2         |
| Ajax / Cache       | Use Ajax for content sections that are frequently updated                          | 3        | 1         |
| CSS / JavaScript   | Avoid expensive JavaScript/CSS animations                                          | 1        | 3         |
| CSS / JavaScript   | Only use the essential sections of JavaScript and CSS libraries                    | 1        | 3         |
| DOM                | Do not modify the DOM when traversing                                              | 1        | 3         |
| DOM                | Make DOM elements invisible during modification                                    | 2        | 2         |
| DOM                | Keep repaint (appearance) and reflow (layout) to a minimum                         | 1        | 3         |
| DOM                | Use events delegation                                                              | 1        | 3         |
| JavaScript         | Modify several CSS properties at once                                              | 1        | 3         |
| JavaScript         | Check JavaScript code                                                              | 2        | 2         |
| JavaScript         | Avoid using try...catch...finally                                                  | 3        | 1         |
| JavaScript         | Use primitive operations                                                           | 3        | 1         |
| JavaScript         | Cache objects repeatedly accessed by JavaScript                                    | 1        | 3         |
| JavaScript         | Use local variables                                                                | 3        | 1         |
| JavaScript         | Use anonymous functions                                                            | 3        | 1         |
| JavaScript         | Use functions instead of strings as the argument of setTimeout() and setInterval() | 1        | 3         |
| JavaScript         | Favor a loop over forEach() (or reduce())                                          | 2        | 2         |
| JavaScript         | Keep repaint (appearance) and reflow (layout) to a minimum                         | 1        | 3         |
| JavaScript         | Favor instant visual changes                                                       | 2        | 2         |
| Cache              | Use a templating engine                                                            | 3        | 1         |
| Cache              | Use all the CMS' levels of caching                                                 | 1        | 3         |
| Documents          | Generate PDFs outside of the CMS                                                   | 1        | 3         |
| Image              | Resize images outside of the CMS                                                   | 1        | 3         |
| Sounds             | Encode sound outside of the CMS                                                    | 1        | 3         |
| Theme              | Use a lightweight theme                                                            | 1        | 3         |
| Code               | Avoid rewriting getter/setter natives                                              | 2        | 2         |
| Code               | Do not unnecessarily assign values to variables                                    | 3        | 1         |
| General            | Cache frequently-used calculated data                                              | 1        | 3         |
| PHP                | Cache the bytecode                                                                 | 1        | 3         |
| PHP                | Use single quotes (') instead of double (“)                                        | 3        | 1         |
| PHP                | Replace $i++ with ++$i                                                             | 3        | 1         |
| Application Server | Free up the memory of variables that are no longer needed                          | 1        | 3         |
| Application Server | Do not call a function in the declaration of a for loop                            | 1        | 3         |
| Application Server | Remove all warnings and notices                                                    | 1        | 3         |
| Application Server | Use static variables                                                               | 1        | 3         |
| SQL                | Avoid running SQL queries inside a loop                                            | 1        | 3         |
| SQL                | Only connect to a database if necessary                                            | 1        | 3         |
| SQL                | Never write SELECT \* FROM                                                         | 1        | 3         |
| SQL                | Limit the number of results                                                        | 1        | 3         |
| SQL                | Use stored procedures                                                              | 3        | 1         |
| CSS                | Minify CSS files                                                                   | 1        | 3         |
| CSS                | Compress CSS and JavaScript libraries                                              | 1        | 3         |
| CSS / JavaScript   | Combine CSS and JavaScript files                                                   | 1        | 3         |
| Image              | Optimize bitmaps                                                                   | 1        | 3         |
| JavaScript         | Minify JavaScript files                                                            | 1        | 3         |
| Cookie             | Optimize the size of cookies                                                       | 3        | 1         |
| HTML               | Compress the HTML output                                                           | 1        | 3         |
| HTTPS              | Favor HSTS Preload list over 301 redirections                                      | 1        | 3         |
| deprovisioning     | Set up an end-of-life plan for the site                                            | 2        | 2         |
| Host               | Choose a 'green' web host                                                          | 1        | 3         |
| Host               | Use 'green' electricity                                                            | 1        | 3         |
| Host               | Adapt the quality of service and the service level agreement                       | 1        | 3         |
| Servers            | Use virtual servers                                                                | 3        | 1         |
| Servers            | Maximize the energy efficiency of servers                                          | 1        | 3         |
| Servers            | Only install essential components on the server                                    | 1        | 3         |
| Servers            | Only use in-memory caching                                                         | 1        | 3         |
|                    | Store data in the cloud                                                            | 3        | 1         |
| Servers            | Host CSS and JavaScript resources on a cookieless domain                           | 1        | 3         |
| General            | Avoid redirections                                                                 | 1        | 3         |
| General            | Do not generate 404 pages                                                          | 1        | 3         |
| Architecture       | Use an asynchronous server                                                         | 1        | 3         |
| Cache              | Use a CDN                                                                          | 2        | 2         |
| Cache              | Use a reverse proxy                                                                | 1        | 3         |
| Cache              | Cache the favicon.ico                                                              | 1        | 3         |
| Cache              | Add Expires or Cache-Control headers                                               | 1        | 3         |
| Optimization       | Cache Ajax responses                                                               | 3        | 1         |
| Configuration      | Disable some web server access logs                                                | 2        | 2         |
| Configuration      | Disable Apache's DNS Lookup                                                        | 2        | 2         |
| Configuration      | Disable Apache's AllowOverride directive                                           | 1        | 3         |
| 3. SGBD/R          | Disable MySQL and MariaDB binary logs                                              | 2        | 2         |
| Documents          | Compress documents                                                                 | 1        | 3         |
| Documents          | Optimize PDFs                                                                      | 1        | 3         |
| Email              | Remove duplicate email addresses before sending                                    | 1        | 3         |
| Email              | Only use double opt-in email addresses                                             | 1        | 3         |
| Email              | Use plain text instead of HTML                                                     | 1        | 3         |
| Sons               | Adapt sounds to the listening environment                                          | 1        | 3         |
| Texts              | Adapt text for the Web                                                             | 2        | 2         |
| Videos             | Adapt videos to the viewing environment                                            | 1        | 3         |
| Animations         | Limit the usage of flash                                                           | 2        | 2         |
