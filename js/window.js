class Window extends LightElement {
  static tagName = "tideas-window";
  static css = `
    :host {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-items: center;
      align-items: stretch;
      
      background-color: #ffffff05;
      backdrop-filter: blur(5px);
      border: 2px solid #ffffff55;
      border-radius: 20px;
      padding: 15px;
    }

    body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-items: flex-start;
      align-items: stretch;
      font-size: var(--font-size);

      overflow: scroll;
    }
  `;
  static html = `
    <slot></slot>
  `;

  title;

  async onInit() {
  }
}

Window.register();
