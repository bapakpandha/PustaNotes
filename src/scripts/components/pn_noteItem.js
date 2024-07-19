class PnNoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
                    <div class="arsipkan">
                       <svg height="25px" width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 20H6C4.89543 20 4 19.1046 4 18V8H20V18C20 19.1046 19.1046 20 18 20H17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 4H18L20 8H4L6 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14L12 20M12 20L14.5 17.5M12 20L9.5 17.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </div>
                      <div class="hapus">
                      <svg height="20px" width="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                      </div>
                      <div class="edit">
                      <svg height="20px" width="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M15.747 2.97a.864.864 0 011.177 1.265l-7.904 7.37-1.516.194.653-1.785 7.59-7.044zm2.639-1.366a2.864 2.864 0 00-4-.1L6.62 8.71a1 1 0 00-.26.39l-1.3 3.556a1 1 0 001.067 1.335l3.467-.445a1 1 0 00.555-.26l8.139-7.59a2.864 2.864 0 00.098-4.093zM3.1 3.007c0-.001 0-.003.002-.005A.013.013 0 013.106 3H8a1 1 0 100-2H3.108a2.009 2.009 0 00-2 2.19C1.256 4.814 1.5 7.848 1.5 10c0 2.153-.245 5.187-.391 6.81A2.009 2.009 0 003.108 19H17c1.103 0 2-.892 2-1.999V12a1 1 0 10-2 0v5H3.106l-.003-.002a.012.012 0 01-.002-.005v-.004c.146-1.62.399-4.735.399-6.989 0-2.254-.253-5.37-.4-6.99v-.003zM17 17c-.001 0 0 0 0 0zm0 0z"></path> </g></svg>
                      </div>
                  </div>
              </div>
              <style> .note { display: grid; border-radius: 1rem; background: linear-gradient(to bottom, #a7d9d7, #60d1cd); padding: 1rem; height: 10rem; box-shadow: rgba(0, 0, 0, 0.85) 0px 3px 5.5px; align-items: center; justify-content: center; grid-template-columns: repeat(6, 1fr); grid-template-rows: repeat(8, 1fr); cursor:pointer; border: solid 1.5px #F1F2F3; } .notes_id { background-color: aqua; display: none; } .title { /* background-color: aquamarine; */ font-size: 1.3rem; font-weight: bold; font-family: sans-serif; grid-area: 1/1/3/5; display: grid; align-items: start; /* justify-items: center; */ height: 100%; width: 90%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .body { /* background-color: brown; */ font-size: 1rem; grid-area: 3/1/8/7; height: 100%; width: 100%; display: grid; align-items: center; justify-items: start; border-top: solid 1px #F1F2F3; margin-top: -1.1rem; } .createdAt { grid-area: 1/5/1/7; display: grid; align-items: center; justify-items: center; align-content: center; justify-content: center; text-align: center; color: #DCF2F1; padding: 0.4rem; background-color: #365486; font-style: italic; font-weight: bold; border-radius: 1rem; font-size: 0.8rem; } @media (max-width: 768px) { .createdAt { font-size:0.6rem; } } @media screen and (min-width: 992px) and (max-width: 1200px){ .createdAt { font-size:0.6rem; } } .archived { background-color: blueviolet; display: none; } .button_select { grid-area: 8/5/8/7; width: auto; height: 32px; display: grid; align-items: center; justify-items: center; justify-content: end; grid-auto-flow: column; column-gap: 16px; transition: all .2s linear; } .button_select>div {border-radius: 0.4rem;padding: 3px;display: grid;transition: all .2s linear;} .button_select>div:hover {background-color: #365486ad;} </style>
          `;
  }
}

customElements.define('pn-noteitem', PnNoteItem);
