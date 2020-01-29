import clearElement from '../utils';

const contact = (() => {
  const render = () => {
    const shell = document.querySelector('#app-shell');

    clearElement(shell);

    shell.innerHTML = `<div class="jumbotron">
      <h1 class="display-4 mb-5 text-warning">
        Stay in touch, we would love to hear from you!
      </h1>
      <div class="row">
        <div class="offset-2 col-8 p-5 border border-warning rounded contact-form">
          <h1>Fill the form <br />to <span class="text-warning">contact us.</span></h1>
          <div class="row">
            <div class="col-6 mb-3">
              <input class="form-control" placeholder="First Name" type="text" />
            </div>
            <div class="col-6 mb-3">
              <input class="form-control" placeholder="Last Name" type="text" />
            </div>
            <div class="col-12 mb-3">
              <input class="form-control" placeholder="Email" type="email" />
            </div>
            <div class="col-12 mb-3">
              <textarea class="form-control" placeholder="How can we help you? Describe your problem here"></textarea>
            </div>
            <div class="col-5 mb-3">
              <input class="btn btn-warning form-control" type="submit" value="Send Message" />
            </div>
          </div>
        </div>
      </div>
    </div>`;
  };

  return {
    render,
  };
})();

export default contact;
