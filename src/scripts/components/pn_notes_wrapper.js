import {AddGlobalStyle, AddContainerStyle, AddFontStyle, AddAnimationStyle} from "../utils/utils.js";

class pn_notes_wrapper extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._mainElement = document.createElement('main');
        this._sectionElement = document.createElement('section');
        this._wrapperElement = document.createElement('div');
        this._style = document.createElement('style');
        this._sectionElement.appendChild(this._wrapperElement);
        this._mainElement.appendChild(this._sectionElement);
        this._shadowRoot.appendChild(this._mainElement);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._wrapperElement.innerHTML= 
        `
                <div class="notes_info">
                    <img src="src/img/note.svg" alt="icon_note">
                    <div>
                        <h5>Catatan Pribadi</h5>
                    </div>
                    <div>
                        <p>Catatan Anda akan tersimpan di halaman ini</p>
                    </div>
                </div>
                <pn-notelist></pn-notelist>
        `
        ;
        this._shadowRoot.appendChild(this._style);
        this.execAdditionalFunction();
    }

    adtFunc() {
        const self = this;

        function addClassList() {
            self._wrapperElement.classList.add("container", "container-section")
        }
        
        function updateStyle() {
            self._style.textContent =`
            main .notes_info {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                align-content: center;
                justify-content: center;
                align-items: center;
                margin: 1rem;
                row-gap: 0.5rem;
            }

            main .notes_info>img {
                width: 90px;
                height: 90px;
            }

            main .notes_info>div>h5 {
                font-size: 1.25rem;
                color: var(--third-color);
            }

            main .notes_info.tabs {
                flex-direction: row;
                column-gap: 0.5rem;
                margin: 1rem auto 0 auto;
                border-bottom: 6px solid var(--third-color);
                max-width: fit-content;
            }

            main .notes_info.tabs>div {
                padding: 0.75rem 0.75rem 0.7rem 0.75rem;
                cursor: pointer;
            }

            main .notes_info.tabs>div.active {
                background-color: var(--third-color);
                color: white;
                border-start-end-radius: 1rem;
                border-start-start-radius: 1rem;
            }

            .list_notes .container {
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                align-items: flex-start;
                flex-wrap: nowrap;
            }

            .list_notes .item {
                display: flex;
                width: 12.5rem;
                height: 21rem;
                padding: 1rem;
                flex-direction: column;
                align-items: flex-start;
                border-radius: 1rem;
                background-color: aliceblue;
                margin: 0.5rem;
                justify-content: space-around;
            }

            .list_notes .item img {
                width: 135px;
                height: 185px;
                object-fit: cover;
                margin: 0 auto;
                border-radius: 0 3px 3px 0;
                box-shadow: inset 4px 0 10px rgba(0, 0, 0, .1);
            }


            .list_notes .title {
                margin: 1.5rem auto;
            }

            .list_notes .item h3 {
                text-overflow: ellipsis;
                width: 100%;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                max-height: 3rem;
                font-size: 0.9rem;
                margin: 0.5rem 0;
            }

            .list_notes .item h5 {
                font-size: 0.8rem;
                color: rgba(0, 0, 0, 0.5);
                text-overflow: ellipsis;
                width: 100%;
                -webkit-line-clamp: 1;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                max-height: 1.5rem;
            }

            .list_notes .content {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-content: center;
                justify-content: center;
                align-items: flex-start;
                width: 100%;
                padding: 0 2rem;
            }

            .list_notes .item div ul {
                display: flex;
                align-items: center;
                justify-content: center;
                list-style-type: none;
                width: 100%;
                text-align: center;
                margin-top: 0.5rem;
            }

            .list_notes .item div {
                width: 100%;
                justify-items: center;
                display: flex;
            }

            .list_notes .item .tooltip,
            .list_notes .item .tooltip svg {
                transition: color .2s linear;

            }

            .list_notes .item .tooltip:hover,
            .list_notes .item .tooltip:hover svg {
                transform: scale(1.1);
                color: var(--third-color);
                cursor: pointer;
                transition: color .2s linear;
            }

            `
        }
        return {addClassList:addClassList, updateStyle:updateStyle}
    }

    execAdditionalFunction() {
        this.adtFunc().addClassList();
        this.adtFunc().updateStyle();
        AddContainerStyle(this._shadowRoot);
        AddFontStyle(this._shadowRoot);
        AddAnimationStyle(this._shadowRoot);
        AddGlobalStyle(this._shadowRoot);
    }

}


customElements.define( 'pn-notes-wrapper', pn_notes_wrapper);