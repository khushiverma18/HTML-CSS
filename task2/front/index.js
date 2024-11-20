// script.js
// Sample JSON data
const data = {
    "title": "Welcome to Dynamic Page",
    "description": "This is a dynamically generated webpage using JSON data.",
    "menu": [
      { "name": "Home", "link": "#home" },
      { "name": "About", "link": "#about" },
      { "name": "Services", "link": "#services" },
      { "name": "Contact", "link": "#contact" }
    ],
    "sections": [
      {
        "id": "home",
        "title": "Home Section",
        "content": "Welcome to the Home Section."
      },
      {
        "id": "about",
        "title": "About Us",
        "content": "We are a dynamic content rendering company."
      },
      {
        "id": "services",
        "title": "Our Services",
        "content": "We provide web development and design services."
      },
      {
        "id": "contact",
        "title": "Contact Us",
        "content": "Reach us at contact@example.com."
      }
    ]
  };
  
  // Populate the navigation menu
  const menuContainer = document.getElementById('menu');
  data.menu.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.link}">${item.name}</a>`;
      menuContainer.appendChild(li);
  });
  
  // Populate the main content
  const contentContainer = document.getElementById('content');
  data.sections.forEach(section => {
      const sectionElement = document.createElement('section');
      sectionElement.id = section.id;
      sectionElement.innerHTML = `
          <h2>${section.title}</h2>
          <p>${section.content}</p>
      `;
      contentContainer.appendChild(sectionElement);
  });
  