import clearElement from '../utils';
import MenuItem from '../menu';

const menu = (() => {
  const menuItems = [
    new MenuItem('Expensive Pizza', 20.00),
    new MenuItem('Cheaper Pizza', 13.45),
    new MenuItem('Some food', 8.95),
    new MenuItem('Shoarma', 12.95),
    new MenuItem('Hyena Gizzard', 15.00),
    new MenuItem('Black Mamba Juice', 16.45),
  ];


  const menuOptions = () => menuItems.map((item) => `<div class="col">
          <div class="card mb-3">
            <img class="card-img-top" alt="...">
            <div class="card-body bg-warning">
              <h5 class="card-title d-flex justify-content-between">
                <span>${item.name}</span>
                <span>${item.formattedPrice}</span>
              </h5>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>`).join('');


  const render = () => {
    const shell = document.querySelector('#app-shell');

    clearElement(shell);
    const options = menuOptions();

    shell.innerHTML = `<div class="jumbotron">
      <h1 class="display-4 mb-5 text-warning">
        Take a glance at our menu options!
      </h1>
      <div class="row row-cols-3">
        ${options}
      </div>
    </div>`;
  };

  return {
    render,
  };
})();

export default menu;
