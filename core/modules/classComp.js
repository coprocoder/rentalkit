/**
 * Механизм реакта на ванили
 * https://www.divotion.com/blog/creating-js-components-without-a-framework
 * https://github.com/TomRaaff/tr-utilities-lib/tree/main
 */

let id = 0;

class Component {
    state;
    componentId;

    constructor() {
        this.componentId = (id++).toString();
        this.render = new Proxy(this.render, this.renderHandler);
    }

    setState(state) {
        this.state = new Proxy(state, stateHandler);
        // since ButtonComponen extends Component, it will also have access to this.state.
    }

    stateHandler = {
        set: (target, prop, value) => {
            target[prop] = value; // updates the state object
            this.render(); // triggers the rendering
        },
    };

    renderHandler: ProxyHandler = {
        apply: (target, thisArg, argArray) => {
            const newComponent = target.apply(thisArg, ...argArray);
            newComponent.dataset.componentId = this.componentId;

            let oldComponent = document.querySelector(
                `[data-component-id="${this.componentId}"]`,
            );
            oldComponent.replaceWith(newComponent);
            return newComponent;
        },
    };
}

export class ButtonComponent extends Component {
    constructor(isClicked = false) {
        super();
        this.setState({ isClicked }); // add a call to setState
    }

    clickBtn() {
        this.state.isClicked = !this.state.isClicked;
    }

    render() {
        const color = this.state.isClicked ? "blue" : "yellow";
        const text = this.state.isClicked ? "you clicked me" : "click me";
        return button(
            {
                class: color,
                onclick: () => (this.state.isClicked = !this.state.isClicked),
            },
            text,
        );
    }
}

// const btnComponent = new ButtonComponent();

module.exports = ButtonComponent;
