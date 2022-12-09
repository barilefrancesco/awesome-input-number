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
      this.input = this.element.find("input")[0];
      this.input.value = this.options.initialValue || 0;
  
      this.element.find(".increment").click((e) => {
        e.stopPropagation();
        this.increment();
        this.options.onIncrement && this.options.onIncrement();
      });
      this.element.find(".decrement").click((e) => {
        e.stopPropagation();
        this.decrement();
        this.options.onDecrement && this.options.onDecrement();

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
              <button class="decrement" type="button"><i class="fa-solid fa-minus"></i></button>
              <span class="ps-2 pe-2">${this.options.initialValue || 0}</span>
              <button class="increment" type="button"><i class="fa-solid fa-plus"></i></button>
          `;
  
      this.element.html(html);
    }
  }
