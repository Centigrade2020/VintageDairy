const appDiv = "root";
// Both set of different routes and template generation functions

let home = "";
let about = "";
let contact = "";

const loadPage = async (page) => {
  const response = await fetch(page);
  const resHtml = await response.text();
  return resHtml;
};

let routes = {};
let templates = {};
// Register a template (this is to mimic a template engine)
let template = (name, templateFunction) => {
  return (templates[name] = templateFunction);
};
// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the DOM objects.
let route = (path, template) => {
  if (typeof template == "function") {
    return (routes[path] = template);
  } else if (typeof template == "string") {
    return (routes[path] = templates[template]);
  } else {
    return;
  }
};

// Register the templates.
template("home", async () => {
  home = await loadPage("./pages/home.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = home;
  return myDiv;
});
template("about", async () => {
  about = await loadPage("./pages/about.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = about;
  return myDiv;
});

template("contact", async () => {
  contact = await loadPage("./pages/contact.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = contact;
  return myDiv;
});

// Define the mappings route->template.
route("/", "home");
route("/about", "about");
route("/contact", "contact");

// Generate DOM tree from a string
let createDiv = (id, xmlString) => {
  let d = document.createElement("div");
  d.id = id;
  d.innerHTML = xmlString;
  return d.firstChild;
};
// Helper function to create a link.
let createLink = (title, text, href) => {
  let a = document.createElement("a");
  let linkText = document.createTextNode(text);
  a.appendChild(linkText);
  a.title = title;
  a.href = href;
  return a;
};

// Give the correspondent route (template) or fail
let resolveRoute = (route) => {
  try {
    return routes[route];
  } catch (error) {
    throw new Error("The route is not defined");
  }
};
// The actual router, get the current URL and generate the corresponding template
let router = (evt) => {
  const url = window.location.hash.slice(1) || "/";
  const routeResolved = resolveRoute(url);
  routeResolved();
};
// For first load or when routes are changed in browser url box.
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
