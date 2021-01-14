/* eslint-disable prefer-destructuring */
/**
 * @class Elements
 */
export default class Elements {
  constructor(form) {
    this.form = form.getForm();
    this.body = document.getElementsByTagName('body')[0];
  }

  /**
   * Init
   */
  init() {
    this.addElements();
    this.body.insertAdjacentElement('afterbegin', this.container);
    this.container.appendChild(this.form);
  }

  /**
   * Add all elements
   */
  addElements() {
    this.addContainer();
  }

  /**
   * Add container
   */
  addContainer() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
  }

  /**
   * Show hint on field
   */
  showHint(e, message) {
    const parent = this.form.querySelector(`.field-${e}`);

    const hint = parent.nextElementSibling;

    hint.textContent = message;
    hint.style.top = `${parent.closest('.label').getBoundingClientRect().top - 10}px`;
    hint.style.left = `${parent.getBoundingClientRect().right - hint.getBoundingClientRect().width}px`;
    hint.classList.add('hint-active');
  }

  /**
   * Hide hints
   */
  resetHint() {
    const hints = this.form.querySelectorAll('.hint');
    hints.forEach((e) => {
      e.textContent = '';
      e.classList.remove('hint-active');
    });
  }
}
