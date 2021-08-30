import Home from "./views/Home.mjs";
import Search from "./views/Search.mjs";
import About from "./views/About.mjs";
import Stats from "./views/Stats.mjs";

// Navigation to sections instead of refreshing the page
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// Routing by sections
const router = async () => {

    // Available routes to be visited
    const routes = [
        { path: "/", view: Home },
        { path: "/search", view: Search },
        { path: "/about", view: About },
        { path: "/stats", view: Stats }
    ]

    // Matches paths from browser to the above by returning true/false
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    // Create match depending on finding the route 
    let match = potentialMatches.find(match => match.isMatch);

    // If not found then set to home section
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // New instance of current section
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

// Navigate properly routing through history
window.addEventListener("popstate", router);

// Use navigation without refreshing on nav links
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});