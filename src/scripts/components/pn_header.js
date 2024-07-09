import {AddGlobalStyle, AddContainerStyle, AddFontStyle } from "../utils/utils.js";

class pn_header extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._headerElement = document.createElement('header')
        this._style = document.createElement('style');
        this._shadowRoot.appendChild(this._headerElement);
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `

        ${this.localName} {
            color: ${this._color};
            font-size: ${this._size}px;
        }

        .header {
            position: sticky;
            top: 1rem;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 5.5rem;
            background-color: var(--main-color);
            box-shadow: 0 0px 8px rgba(85, 97, 110, 0.9);
            border-radius: 1rem;
            margin: 2rem auto;
            transition: all 2s ease;
            opacity: 1;
        }


        .header.container.header.scrolled {
            position: fixed;
            display: flex;
            flex-direction: row;
            top: 0;
            background-color: var(--fourth-color);
            z-index: 999;
            border-radius: 0;
            margin: 0;
        }

        .container-logo-header {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container-logo-header .logo {
            width: 3.5rem;
        }

        .container-logo-header .logo_title {
            font-size: 2rem;
            font-weight: 800;
            vertical-align: middle;
            color: var(--third-color);
        }

        .header.container.header.scrolled .logo_title {
            color: var(--main-color);
        }

        .container-logo-header .logo_title span {
            color: black;
        }

        .header.container.header.scrolled .logo_title span {
            color: white;
        }

        header .container-navbar {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: flex-end;
        }

        header .navbar {
            width: 80%;
            font-size: 1.25rem;
            transform-origin: top;
            transition: transform 0.6s ease;
        }

        .header.mobile.active .navbar {
            width: 100%;
        }

        header .navbar ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
        }

        .header.container.header.scrolled .navbar ul li {
            color: var(--main-color);
            transition: all 50ms linear;
        }

        header .navbar ul a:hover:not(:last-child) {
            color: var(--third-color) !important;
            border-bottom: .2rem solid var(--third-color);
        }

        
            `;
    }

    addClassList() {
        this._headerElement.classList.add("container", "header")
    }


    render() {
        this.updateStyle()
        this.addClassList()
        this._headerElement.innerHTML = `
        <div class="container-logo-header tautan" data-tautan="index.html"><img class="logo" src="assets/img/icon.png"
                alt="">
            <div class="logo_title">Pusta<span>books</span></div>
        </div>
        <div class="container-navbar">
            <nav class="navbar scale_font scale_width">
                <ul><a href="index.html">
                        <li>Beranda</li>
                    </a><a href="assets/pages/app.html">
                        <li>Daftar Buku</li>
                    </a><a href="index.html" disabled="disabled">
                        <li>Kontak</li>
                    </a><a href="index.html" disabled="disabled">
                        <li>Tentang Kami</li>
                    </a>${null}</ul>
            </nav>
        </div>
        <div class="menu"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </g>
            </svg>
        </div>`;
        this._shadowRoot.appendChild(this._style);
        AddGlobalStyle(this._shadowRoot)
        AddFontStyle(this._shadowRoot)
        AddContainerStyle(this._shadowRoot)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Atribut ${name} diubah.`);
        console.log(`Nilai lama adalah ${oldValue}`);
        console.log(`Nilai baru adalah ${newValue}`);
        this[`_${name}`] = newValue;
        this.render();
    }

}

customElements.define('pn-header', pn_header);