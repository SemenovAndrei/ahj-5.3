/**
 * @class Form
 */
export default class Form {
  /**
   * Init
   */
  init() {
    this.addElements();
  }

  /**
   * Add all elements
   */
  addElements() {
    this.addForm();
  }

  /**
   * Add form
   */
  addForm() {
    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.addFormMarkup();
  }

  /**
   * Add markup to form
   */
  addFormMarkup() {
    this.form.innerHTML = `
    <div class="form-content">
      <div class="wrapper">
        <label class="label title-to">Туда
          <input class="field field-to" type="date">
          <div class="hint"></div>
        </label>
      </div>
      <div class="wrapper wrapper-back">
        <label class="label title-back">Обратно
          <input class="field field-back-checkbox" type="checkbox">
          <input class="field field-back" type="date">
          <div class="hint"></div>
        </label>
      </div>
      <div class="form-controls">
        <button class="button button-form button-sale">Купить</button>
      </div>
      <div class="tickets">
        <div class="ticket-to"></div>
        <div class="ticket-back"></div>
      </div>
    </div>
    `;
  }

  /**
   * @return this.form
   */
  getForm() {
    this.init();

    return this.form;
  }
}
