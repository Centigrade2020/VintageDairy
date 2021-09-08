const appDiv = "root";
// Both set of different routes and template generation functions

let home = "";
let about = "";
let products = "";
let companyProfile = "";
let contact = "";

const hl = document.getElementById("h-link");
const pl = document.getElementById("p-link");
const cpl = document.getElementById("cp-link");
const al = document.getElementById("a-link");
const cl = document.getElementById("c-link");

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
  hl.classList.add("selectedNav");
  pl.classList.remove("selectedNav");
  cpl.classList.remove("selectedNav");
  al.classList.remove("selectedNav");
  return myDiv;
});

template("products", async () => {
  products = await loadPage("./pages/products.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = products;
  hl.classList.remove("selectedNav");
  pl.classList.add("selectedNav");
  cpl.classList.remove("selectedNav");
  al.classList.remove("selectedNav");
  return myDiv;
});
template("company-profile", async () => {
  companyProfile = await loadPage("./pages/company-profile.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = companyProfile;
  hl.classList.remove("selectedNav");
  pl.classList.remove("selectedNav");
  cpl.classList.add("selectedNav");
  al.classList.remove("selectedNav");
  return myDiv;
});

template("about", async () => {
  about = await loadPage("./pages/about.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = about;
  hl.classList.remove("selectedNav");
  pl.classList.remove("selectedNav");
  cpl.classList.remove("selectedNav");
  al.classList.add("selectedNav");
  return myDiv;
});
template("contact", async () => {
  contact = await loadPage("./pages/contact.html");
  let myDiv = document.getElementById(appDiv);
  myDiv.innerHTML = contact;
  hl.classList.remove("selectedNav");
  pl.classList.remove("selectedNav");
  cpl.classList.remove("selectedNav");
  al.classList.remove("selectedNav");
  return myDiv;
});

// Define the mappings route->template.
route("/", "home");
route("/about", "about");
route("/products", "products");
route("/company-profile", "company-profile");
route("/contact", "contact");

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
