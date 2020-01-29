import contact from './modules/contact-page';
import home from './modules/home-page';
import menu from './modules/menu-page';

/**
 * Handle all transitions from the index element
 */
const navigation = (function() {

  let navigationBar;

  const buildBrand = () => {
    // create the brand element
    const brandSpanElements = ['Jubei\'s', 'Restaurant'].map((brandSubTitle, index) => {
      const spanElement = document.createElement('span');
      spanElement.classList.add(index === 0 ? 'text-white' : 'text-warning');
      spanElement.innerText = brandSubTitle;
      return spanElement;
    });

    const anchorElement =  document.createElement('a');
    anchorElement.append(...brandSpanElements);
    anchorElement.classList.add('navbar-brand');
    anchorElement.setAttribute('href', '#');
    anchorElement.addEventListener('click', ()=>{});
    return anchorElement;
  };

  const buildNavLinks = () =>
    ['Contact', 'Menu'].map(title => {
      const anchorElement = document.createElement('a');
      anchorElement.addEventListener('click', ()=>{});
      anchorElement.classList.add('nav-link', 'text-white');
      anchorElement.innerText = title;
      anchorElement.setAttribute('href', '#');

      const linkElement = document.createElement('li');
      linkElement.classList.add('nav-item', 'mx-3', 'px-3');
      linkElement.appendChild(anchorElement);
      return linkElement;
    });

  const buildNavigationBar = () => 
  {
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
    navElement.classList.add('navbar', 'rounded', 'custom-nav');
    navElement.appendChild(navContainerElement);

    // html5 header element
    const header = document.createElement('header');
    header.appendChild(navElement);
    return header;
  };

  /**
	 * Renders the navigation menu on page load
	 */
  const render = () => document.body.appendChild(buildNavigationBar());

  // eslint-disable-next-line no-unused-vars
  function renderToMain(evt){
    evt.preventDefault();
    const name = evt.target.innerText.toLowerCase();
    let handlerModule;
    
    switch(name){
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
  }

  return {
    render
  };
})();

document.addEventListener('DOMContentLoaded', navigation.render);
