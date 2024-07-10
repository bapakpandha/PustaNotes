import Utils from "../utils/utils.js";

class pn_header extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._headerElement = document.createElement('header')
        this._style = document.createElement('style');
        this._shadowRoot.appendChild(this._headerElement);
        window.addEventListener('resize', () => this.adtFunc().handleResize());
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.adtFunc().updateStyle()
        this.adtFunc().addClassList()
        this._headerElement.innerHTML = `
        <div class="container-logo-header tautan" data-tautan="index.html"><img class="logo" src="assets/img/icon.png"
                alt="">
            <div class="logo_title">Pusta<span>Notes</span></div>
        </div>
        <div class="container-navbar">
            <nav class="navbar scale_font scale_width">
                <ul><a href="index.html">
                        <li>Beranda</li>
                    </a><a href="assets/pages/app.html">
                        <li>Daftar Catatan</li>
                    </a><a href="index.html" disabled="disabled">
                        <li>Kontak</li>
                    </a><a href="index.html" disabled="disabled">
                        <li>Tentang Kami</li>
                    </a>${this.adtFunc().verifySignIn()}</ul>
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

        Utils.AddContainerStyle(this._shadowRoot);
        Utils.AddFontStyle(this._shadowRoot);
        Utils.AddAnimationStyle(this._shadowRoot);
        Utils.AddGlobalStyle(this._shadowRoot);
        this._shadowRoot.appendChild(this._style);
        this.adtFunc().menuNavbarMobileHandler();
        Utils.checkWindowWidth(this._shadowRoot);
        this.adtFunc().scrollHeaderSticky();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Atribut ${name} diubah.`);
        console.log(`Nilai lama adalah ${oldValue}`);
        console.log(`Nilai baru adalah ${newValue}`);
        this[`_${name}`] = newValue;
        this.render();
    }

    adtFunc() {
        const self = this;

        function updateStyle() {
            self._style.textContent = `
    
            ${self.localName} {
                color: ${self._color};
                font-size: ${self._size}px;
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
                padding: 1rem 5%;
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
    
            /* ======================== */
            /* RESPONSIVE AREA */
            /* ======================== */
            header.container.mobile {
                position: sticky;
                top: 1rem;
                left: 0;
                right: 0;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                height: max-content;
                background-color: var(--main-color);
                box-shadow: 0 0px 8px rgba(85, 97, 110, 0.9);
                border-radius: 1rem;
                margin: 2rem auto;
                flex-direction: column;
            }

            .menu {
                position: absolute;
                right: 2rem;
                cursor: pointer;
                width: 2rem;
                height: 2rem;
                top: 2rem;
            }

            .header.scrolled .menu {
                color: var(--main-color);
                fill: var(--main-color);
            }

            .header.mobile .container-navbar,
            .header.container.header.scrolled.scrolled-mobile .container-navbar {
                display: none;
            }

            .header.mobile.active .container-navbar {
                display: block;
                position: relative;
                flex-wrap: nowrap;
                align-content: center;
                align-items: flex-start;
                justify-content: center;
                background-color: var(--main-color);
                margin-top: 2rem;
            }

            .mobile.active .navbar ul {
                row-gap: 1.5rem;
                list-style: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                flex-wrap: nowrap;
                align-content: center;
            }

            .mobile.active nav>ul>a:not(:last-child) {
                text-align: center;
                padding: 0.5rem 0;
            }

            .container.header.mobile.active.scrolled.full {
                flex-direction: column;
            }

            .header.mobile.scrolled.active .container-navbar {
                background-color: inherit;
            }

            
                `;
        }
    
        function addClassList() {
            self._headerElement.classList.add("container", "header")
        }
    
        function verifySignIn() {
            // TODO #254
            // IF ELSE SIGNED IN USING PROPERTY
            var signInButton = `<a class="button" href="assets/pages/login.html"><li>Sign In</li></a>`
            return signInButton
        }

        function menuNavbarMobileHandler() {
            var menu = self._shadowRoot.querySelector('.menu');
            var header = self._shadowRoot.querySelector('.header');
            if (!menu || !header) return;
            menu.addEventListener('click', function () {
                menu.classList.toggle('cancel');
                header.classList.toggle('active');
                var menuIcon = menu.querySelector('svg');
                if (menu.classList.contains('cancel')) {
                    menuIcon.setAttribute("viewBox", "0,0,330,330");
                    menuIcon.innerHTML = '<path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165c90.982,0,165-74.019,165-165S255.982,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z"></path><path d="M239.247,90.754c-5.857-5.858-15.355-5.858-21.213,0l-53.033,53.033l-53.033-53.033c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L143.788,165l-53.033,53.033c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.606-4.394l53.033-53.033l53.033,53.033 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L186.214,165 l53.033-53.033C245.105,106.109,245.105,96.612,239.247,90.754z"></path>';
                    self._shadowRoot.querySelectorAll('.header.mobile nav>ul>a').forEach(function (link) {
                        link.classList.add('animated');
                    });
                } else {
                    menuIcon.innerHTML = '<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
                    menuIcon.setAttribute("viewBox", "0,0,24,24")
                    self._shadowRoot.querySelectorAll('.header.mobile nav>ul>a').forEach(function (link) {
                        link.classList.remove('animated');
                    });
                }
            });
        }

        function scrollHeaderSticky() {
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 99) {
                    var header = self._shadowRoot.querySelector('.header');
                    if (header && !header.classList.contains('scrolled') && !header.classList.contains('full') && window.pageYOffset > 99) {
                        header.style.top = '-6rem';
                        header.style.transition = 'none';
                        setTimeout(function () {
                            header.classList.add('scrolled', 'full');
                        }, 25);
                        setTimeout(function () {
                            header.style.top = '';
                            header.style.transition = 'all .6s ease';
                        }, 50);
                    }
                } else {
                    var header = self._shadowRoot.querySelector('.header');
                    if (header) {
                        header.classList.remove('scrolled', 'full');
                    }
                }
            });
        }

        function handleResize() {
            console.log('Window resized!');
            Utils.checkWindowWidth(self._shadowRoot);
        }

        return { updateStyle: updateStyle, addClassList: addClassList, verifySignIn: verifySignIn, menuNavbarMobileHandler: menuNavbarMobileHandler, scrollHeaderSticky: scrollHeaderSticky, handleResize: handleResize }
    }
}

customElements.define('pn-header', pn_header);