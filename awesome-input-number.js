class AwesomeInputNumber {
  /* Inpout number using buttons */
  constructor(options) {
    this.options = options;
    this.init();
  }
  init() {
    if (!this.options.id) throw new Error("id is required");
    this.element = jQuery("#" + this.options.id);
    this._render();
    this.input = this.element.find("input");
    this.input.value = this.options.initialValue || 0;

    this.element.find(".increment").click((e) => {
      e.stopPropagation();
      this.increment();
    });
    this.element.find(".decrement").click((e) => {
      e.stopPropagation();
      this.decrement();
    });
  }

  increment() {
    if(parseInt(this.input.value) >= parseInt(this.options.max)) return;
    
    this.input.value = parseInt(this.input.value) + 1;
    this.element.find("span").text(this.input.value);
  }

  decrement() {
    if(parseInt(this.input.value) <= parseInt(this.options.min)) return;
    
    this.input.value = parseInt(this.input.value) - 1;
    this.element.find("span").text(this.input.value);
  }

  _render() {
    const html = `
            <input name='${this.options.id}' type="hidden" value="${this.options.initialValue || 0}" />
            <button class="decrement" type="button">-</button>
            <span>${this.options.initialValue || 0}</span>
            <button class="increment" type="button">+</button>
        `;

    this.element.html(html);
  }
}
