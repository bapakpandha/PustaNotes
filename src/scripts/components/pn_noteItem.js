class PnNoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .note {
                    display: grid;
                    border-radius: 1rem;
                    background: linear-gradient(to bottom, #a7d9d7, #60d1cd);
                    padding: 1rem;
                    height: 10rem;
                    box-shadow: rgba(0, 0, 0, 0.85) 0px 3px 5.5px;
                    align-items: center;
                    justify-content: center;
                    grid-template-columns: repeat(6, 1fr);
                    grid-template-rows: repeat(8, 1fr);
                    cursor:pointer;
                    border: solid 1.5px black;
                }
        
            .notes_id {
                background-color: aqua;
                display: none;
            }
        
            .title {
                /* background-color: aquamarine; */
                font-size: 1.3rem;
                font-weight: bold;
                font-family: sans-serif;
                grid-area: 1/1/3/5;
                display: grid;
                align-items: start;
                /* justify-items: center; */
                height: 100%;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        
.body {
    /* background-color: brown; */
    font-size: 1rem;
    grid-area: 3/1/8/7;
    height: 100%;
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: start;
    border-top: solid 1px black;
    margin-top: -1.1rem;
}
        
.createdAt {
    grid-area: 1/5/1/7;
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    color: #DCF2F1;
    padding: 0.4rem;
    background-color: #365486;
    font-style: italic;
    font-weight: bold;
    border-radius: 1rem;
    font-size: 0.8rem;
}
        
            .archived {
                background-color: blueviolet;
                display: none;
            }
            </style>
            <div class="note">
                <div class="notes_id"><slot name="notes_id"></slot></div>
                <div class="title"><slot name="title"></slot></div>
                <div class="body"><slot name="body"></slot></div>
                <div class="createdAt"><slot name="createdAt"></slot></div>
                <div class="archived"><slot name="archived"></slot></div>
            </div>
        `;
    }

}

customElements.define('pn-noteitem', PnNoteItem);