// Menu items
const menuData = '[{"title": "Home","url" : "/"},{"title" : "Producten","url" : "/producten/"},{"title": "Over ons","url" : "/overons/"},{"title": "Contact","url" : "/contact/"}]';

// Maak van json een javascript object
const menuItems = JSON.parse(menuData);

// Funtie om het menu te maken
function generateMenu() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    ul.classList.add("menu");

    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.title;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    document.body.appendChild(nav);
}
// Functie aanroepen om het menu op beeld te krijgen
generateMenu();
