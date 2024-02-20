/**
 * Custom tag. Похоже на ангуляр. Можно не импортировать компоненты, а нахуярить тегов и юзать в любом месте вёрстки.
 * Пример: <rental-form>{children}</rental-form>
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
 * */
class FormElement extends HTMLElement {
    // static observedAttributes = ["size"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
    }
}

customElements.define("rental-form", FormElement);