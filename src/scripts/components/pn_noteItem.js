class PnNoteItem extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
              <div class="note">
                  <div class="notes_id">
                      <slot name="notes_id"></slot>
                  </div>
                  <div class="title">
                      <slot name="title"></slot>
                  </div>
                  <div class="body">
                      <slot name="body"></slot>
                  </div>
                  <div class="createdAt">
                      <slot name="createdAt"></slot>
                  </div>
                  <div class="archived">
                      <slot name="archived"></slot>
                  </div>
                  <div class="button_select">
                      <svg fill=" #000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.011 512.011" xml:space="preserve">
                      <g>
                          <g>
                              <g>
                                  <path d="M447.925,0.005H64.075c-35.382,0-64.064,28.692-64.064,64.085v191.703C0.01,255.865,0,255.934,0,256.005
                              c0,0.071,0.01,0.14,0.011,0.211V447.92c0,35.393,28.682,64.085,64.064,64.085h383.851c35.398,0,64.085-28.687,64.085-64.085
                              V64.091C512.011,28.693,483.323,0.005,447.925,0.005z M64.075,42.672h383.851c11.834,0,21.419,9.585,21.419,21.419v170.581
                              H42.677V64.091C42.677,52.258,52.26,42.672,64.075,42.672z M447.925,469.339H64.075c-11.814,0-21.397-9.586-21.397-21.419
                              V277.339h426.667V447.92C469.344,459.754,459.759,469.339,447.925,469.339z" />
                                  <path
                                      d="M320,320.005c-11.782,0-21.333,9.551-21.333,21.333c0,11.791-9.542,21.333-21.333,21.333h-42.667
                              c-11.791,0-21.333-9.542-21.333-21.333c0-11.782-9.551-21.333-21.333-21.333s-21.333,9.551-21.333,21.333
                              c0,35.355,28.645,64,64,64h42.667c35.355,0,64-28.645,64-64C341.333,329.557,331.782,320.005,320,320.005z" />
                                  <path d="M234.667,170.672h42.667c35.355,0,64-28.645,64-64c0-11.782-9.551-21.333-21.333-21.333s-21.333,9.551-21.333,21.333
                              c0,11.791-9.542,21.333-21.333,21.333h-42.667c-11.791,0-21.333-9.542-21.333-21.333c0-11.782-9.551-21.333-21.333-21.333
                              s-21.333,9.551-21.333,21.333C170.667,142.027,199.311,170.672,234.667,170.672z" />
                              </g>
                          </g>
                      </g>
                      </svg>
                      <div>Arsipkan</div>
                  </div>
              </div>
              <style> .note { display: grid; border-radius: 1rem; background: linear-gradient(to bottom, #a7d9d7, #60d1cd); padding: 1rem; height: 10rem; box-shadow: rgba(0, 0, 0, 0.85) 0px 3px 5.5px; align-items: center; justify-content: center; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(8, 1fr); cursor:pointer; border: solid 1.5px #F1F2F3; } .notes_id { background-color: aqua; display: none; } .title { /* background-color: aquamarine; */ font-size: 1.3rem; font-weight: bold; font-family: sans-serif; grid-area: 1/1/3/5; display: grid; align-items: start; /* justify-items: center; */ height: 100%; width: 90%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .body { /* background-color: brown; */ font-size: 1rem; grid-area: 3/1/8/7; height: 100%; width: 100%; display: grid; align-items: center; justify-items: start; border-top: solid 1px #F1F2F3; margin-top: -1.1rem; } .createdAt { grid-area: 1/5/1/7; display: grid; align-items: center; justify-items: center; align-content: center; justify-content: center; text-align: center; color: #DCF2F1; padding: 0.4rem; background-color: #365486; font-style: italic; font-weight: bold; border-radius: 1rem; font-size: 0.8rem; } @media (max-width: 768px) { .createdAt { font-size:0.6rem; } } @media screen and (min-width: 992px) and (max-width: 1200px){ .createdAt { font-size:0.6rem; } } .archived { background-color: blueviolet; display: none; } .button_select { grid-area: 8/5/8/7; width: auto; height: 32px; display: grid; align-items: center; justify-items: center; justify-content: end; grid-auto-flow: column; column-gap: 8px; transition: all .2s linear; } .button_select:hover { font-weight:bold;} </style>
          `;
    }
  }
  
  customElements.define("pn-noteitem", PnNoteItem);
  