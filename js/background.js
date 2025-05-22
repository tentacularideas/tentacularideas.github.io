class Background extends LightElement {
  static tagName = "tideas-background";
  static css = `
    :host {
      position: fixed;
      top: 50%;
      left: 50%;

      transform: translateX(-50%) translateY(-50%);
      width: 100%;
      height: 100%;
      max-width: 30em;
      max-height: 60em;
    }

    div {
      position: absolute;
      top: -10%;
      left: -25%;
      width: 100%;
      height: 43%;

      background: radial-gradient(circle, var(--color) 0%, rgba(from var(--color) r g b / 0) 70%);
      filter: url("#svg-filter");

      &:nth-child(2 of div) {
        top: -10%;
        left: 25%;
        transform: rotate(0.5turn) translateY(-33%);
      }

      &:nth-child(3 of div) {
        top: 23%;
        left: -38%;
        transform: rotate(333deg);
      }

      &:nth-child(4 of div) {
        top: 20%;
        left: 21%;
        transform: rotate(128deg) translateY(-33%);
      }

      &:nth-child(5 of div) {
        top: 53%;
        left: -28%;
        transform: rotate(301deg);
      }

      &:nth-child(6 of div) {
        top: 50%;
        left: 25%;
        transform: rotate(128deg) translateY(-33%);
      }

      &:nth-child(7 of div) {
        top: 71%;
        left: 2%;
        transform: rotate(218deg);
      }
    }
  `;
  static html = `
    <svg>
      <defs>
        <filter id="svg-filter">
          <feTurbulence baseFrequency="0.03" numOctaves="2">
            <!--<animate attributeName="seed" values="1;2;3;4;5;6;7;8;7;6;5;4;3;2" dur="2.25s" repeatCount="indefinite" />-->
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="190">
            <!--<animate attributeName="scale" values="190;2;190" dur="5s" repeatCount="indefinite" />-->
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
    <div *for="let color of this._colors" [style]="'--color: var(--color-' + color + ')'"></div>
  `;

  _colors = ["red", "orange", "yellow", "green", "blue", "purple", "indigo"];
}

Background.register();
