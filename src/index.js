import contact from './modules/contact-page';
import home from './modules/home-page';
import menu from './modules/menu-page';
import './app.css';

/**
 * Handle all transitions from the index element
 */
const navigation = (function loadNavigation() {
  let navigationBar;

  const moduleDataAttributeName = 'data-mod';

  const renderToMain = (evt) => {
    evt.preventDefault();
    const { mod: nameOfModule } = evt.target.dataset;
    let handlerModule;

    switch (nameOfModule) {
      case 'contact':
        handlerModule = contact;
        break;

      case 'menu':
        handlerModule = menu;
        break;

      default:
        handlerModule = home;
        break;
    }

    if (handlerModule) handlerModule.render();
  };

  const buildBrand = () => {
    // create the brand element
    const brandSpanElements = ['Jubei\'s', 'Restaurant'].map((brandSubTitle, index) => {
      const spanElement = document.createElement('span');
      spanElement.classList.add(index === 0 ? 'text-white' : 'text-warning');
      spanElement.innerText = brandSubTitle;
      return spanElement;
    });

    const anchorElement = document.createElement('a');
    anchorElement.append(...brandSpanElements);
    anchorElement.classList.add('navbar-brand');
    anchorElement.setAttribute(moduleDataAttributeName, 'home');
    anchorElement.setAttribute('href', '#');
    anchorElement.addEventListener('click', renderToMain);
    return anchorElement;
  };

  const buildNavLinks = () => ['Contact', 'Menu'].map((title) => {
    const anchorElement = document.createElement('a');
    anchorElement.addEventListener('click', renderToMain);
    anchorElement.classList.add('nav-link', 'text-white');
    anchorElement.innerText = title;
    anchorElement.setAttribute(moduleDataAttributeName, title.toLowerCase());
    anchorElement.setAttribute('href', '#');

    const linkElement = document.createElement('li');
    linkElement.classList.add('nav-item', 'mx-3', 'px-3');
    linkElement.appendChild(anchorElement);
    return linkElement;
  });

  const buildNavigationBar = () => {
    if (navigationBar) return navigationBar;

    // build if it is not yet built
    // create the unordered list element - right navigation menu
    const unorderedListElement = document.createElement('ul');
    unorderedListElement.classList.add('navbar-nav', 'ml-auto', 'd-flex', 'flex-row');
    unorderedListElement.append(...buildNavLinks());

    // nav container
    const navContainerElement = document.createElement('div');
    navContainerElement.append(buildBrand(), unorderedListElement);
    navContainerElement.classList.add('container');

    // nav element
    const navElement = document.createElement('nav');
    navElement.classList.add('navbar', 'rounded', 'custom-nav', 'py-0');
    navElement.appendChild(navContainerElement);

    // html5 header element
    const header = document.createElement('header');
    header.appendChild(navElement);
    return header;
  };

  const buildMainWithAppShell = () => {
    const shellElement = document.createElement('div');
    shellElement.classList.add('container', 'app-shell', 'my-10');
    shellElement.setAttribute('id', 'app-shell');

    const main = document.createElement('main');
    main.appendChild(shellElement);
    return main;
  };

  // Renders the navigation menu followed by the app shell on page load
  const render = () => {
    const header = buildNavigationBar();
    document.body.appendChild(header);

    const brandAnchorElement = document.querySelector('.navbar-brand');
    document.body.appendChild(buildMainWithAppShell());
    brandAnchorElement.click();
  };

  return {
    render,
  };
}());

document.addEventListener('DOMContentLoaded', navigation.render);
