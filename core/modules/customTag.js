/**
 * Custom tag. Похоже на ангуляр. Можно не импортировать компоненты, а нахуярить тегов и юзать в любом месте вёрстки.
 * Пример: <rental-form>{children}</rental-form>
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
 * https://gomakethings.com/how-to-create-a-web-component-with-vanilla-js/
 *
 * Самый рабочий вариант, но мне непривычно. Без импорта компонента на местах, он создаётся сам по глобальной привязке класса к тэгу.
 * Если норм, оставляем его.
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

// Define the new web component
if ('customElements' in window) {
    customElements.define("rental-form", FormElement);
}