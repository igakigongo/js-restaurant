import clearElement from '../utils';

const home = (() => {
  const render = () => {
    const shell = document.querySelector('#app-shell');

    clearElement(shell);

    shell.innerHTML = `<div class="jumbotron">
      <h1 class="display-4 mb-5 text-warning">
        If you're on the hunt for the best new restaurants in Hong Kong in 2020, then this is
        the right place to be
      </h1>
      <div class="row">
        <div class="offset-2 col-8">
          <p class="narrative">
            We’re all about food here at Honeycombers, and we know you are too! From the finest
            Japanese restaurants in town to our rundown of tastiest Chinese restaurants in Hong
            Kong and the best brunches to get boozy at, we promise to always stay on top of the
            fast-moving world of food in HK. That being said, here’s where to tuck into new
            restaurants in Hong Kong in 2020 – the January edition.
          </p>
          <p class="font-italic text-muted text-right text-small my-4 by-line">-- Edward Iga Kigongo --</span>
        </div>
      </div>
    </div>`;
  };

  return {
    render,
  };
})();

export default home;
