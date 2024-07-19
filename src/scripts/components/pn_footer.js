import Utils from '../utils/utils.js';

class pn_footer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._footerElement = document.createElement('footer');
    this._style = document.createElement('style');
    this._shadowRoot.appendChild(this._footerElement);
    window.addEventListener('resize', () =>
      Utils.checkWindowWidth(this._shadowRoot)
    );
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._footerElement.innerHTML = this.adtFunct().getFooter();
    this.adtFunct().globalStyle();
  }

  adtFunct() {
    var that = this;
    function getFooter() {
      var footerContent = `<div class="container full footer"> <div class="container-alamat"> <div class="container-footer-logo"> <img src="icon.png" alt="logo"> <h3 class="logo_title">Pusta<span>Notes</span></h3> </div> <div class="container-content-alamat"> <div> <h4>Jl. Kaliurang - Yogyakarta - Indonesia</h4> </div> <div> <h4>Telp. 0822 - 8125 - 7152</h4> </div> <div> <h4>customerservice@pustanotes.com</h4> </div> <div class="sosmed"> <a href="https://instagram.com/pustanotes" target="_blank" rel="noopener noreferrer"> <div><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg></div> </a><a href="https://facebook.com/pustanotes" target="_blank" aria-label="facebook" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg></div> </a><a href="https://twitter.com/pustanotes" target="_blank" aria-label="twitter" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"> </path> </svg></div> </a><a href="https://youtube.com/pustanotes" target="_blank" aria-label="youtube" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"> </path> <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon> </svg></div> </a> </div> </div> </div> <div class="container-content-footer"> <div> <h3>Tentang Kami</h3> <a href="" disabled="disabled"> <div> <h4>Profil</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Informasi</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Kontak</h4> </div> </a> </div> <div> <h3>Layanan</h3> <a href="" disabled="disabled"> <div> <h4>Berita</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Forum</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Catatan</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Kemitraan</h4> </div> </a> </div> <div> <h3>Subscribe</h3> <a href="" disabled="disabled"> <div> <h4>Dapatkan Informasi terbaru dari kami</h4> </div> </a> <div class="subscribe-input"><input placeholder="Masukkan Email Anda" type="email"> <a href="" disabled="disabled"> <div><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.0868 16.2626L7.04411 17.9359C6.92865 17.9552 6.8203 18.0045 6.72995 18.0789C6.63961 18.1534 6.57045 18.2503 6.52944 18.3599L3.06677 27.6372C2.73611 28.4906 3.62811 29.3039 4.44677 28.8932L28.4468 16.8932C28.6127 16.8101 28.7521 16.6824 28.8496 16.5246C28.9471 16.3667 28.9987 16.1848 28.9987 15.9992C28.9987 15.8137 28.9471 15.6318 28.8496 15.4739C28.7521 15.316 28.6127 15.1884 28.4468 15.1052L4.44677 3.10524C3.62811 2.6959 2.73611 3.50924 3.06677 4.36124L6.53077 13.6386C6.57178 13.7482 6.64094 13.8451 6.73129 13.9195C6.82163 13.994 6.92998 14.0433 7.04544 14.0626L17.0881 15.7359C17.1508 15.7459 17.2078 15.7779 17.249 15.8262C17.2901 15.8744 17.3127 15.9358 17.3127 15.9992C17.3127 16.0627 17.2901 16.124 17.249 16.1723C17.2078 16.2206 17.1508 16.2526 17.0881 16.2626H17.0868Z' fill='white' /> </svg> </div> </a> </div> </div> </div></div>`;
      return footerContent;
    }
    function getStyle() {
      var style = `
                footer .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: flex-start;
                }

                .footer {
                    background-color: var(--fourth-color);
                    color: var(--main-color);
                    padding: 3rem 2rem;
                    overflow-x: hidden;
                }

                .container-footer-logo {
                    display: flex;
                    align-content: center;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                }

                .container-footer-logo img {
                    width: 6rem;
                }

                .container-footer-logo h3 {
                    font-size: 3rem;
                }

                .container-alamat .sosmed {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 2rem;
                }

                .sosmed>a>div {
                    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                    transition-duration: .3s;
                    border-radius: 9999px;
                    background-color: hsla(0, 0%, 100%, .1);
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    width: 2.5rem;
                    height: 2.5rem;
                    display: flex;
                    margin-right: 1.25rem;
                    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                }

                .sosmed>a>div:hover {
                    transform: scale(1.1);
                    background-color: rgba(254, 254, 254, 1);

                    svg {
                        color: #0F1035;
                    }
                }

                .container-content-footer {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: space-between;
                    align-items: flex-start;
                    font-size: 1.2rem;
                }

                .container-content-footer>div {
                    margin: 0 1rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .container-content-footer>div:last-child {
                    flex: 2;
                }

                .container-content-footer>div>h3 {
                    font-size: 2rem;
                    margin: 1rem 0;
                    font-weight: 400;
                }

                .container-content-footer>div>a {
                    padding: 0.5rem 0;
                }

                .footer h4 {
                    font-weight: 400;
                }

                .container-content-alamat {
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;
                }

                .container-content-alamat>div {
                    padding: 0.5rem 0;
                }

                .sosmed svg {
                    color: var(--main-color);
                    width: 1.25rem;
                    height: 1.25rem;
                    display: block;
                }

                .subscribe-input {
                    height: 60px;
                    width: 300px;
                    margin-top: 1.5rem;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-items: center;
                }

                .subscribe-input>a>div {
                    display: flex;
                    background-color: var(--secondary-color);
                    border-start-end-radius: 1rem;
                    border-end-end-radius: 1rem;
                    width: 60px;
                    height: 60px;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-content: center;
                    justify-content: center;
                    align-items: center;
                }

                .subscribe-input input {
                    width: 240px;
                    height: 60px;
                    border-start-start-radius: 1rem;
                    border-end-start-radius: 1rem;
                    padding: 0.5rem;
                    text-align: left;
                    font-size: 1.25rem;
                    padding-left: 1rem;
                    text-transform: lowercase;
                }

                .subscribe-input input:focus {
                    border: 3px solid #7FC7D9;
                }
                
                .container.footer.full.mobile {
                    text-align: center;
                    flex-direction: column;
                    align-items: center;
                    /* justify-content: center; */
                    /* align-content: center; */
                }

                .footer.mobile .container-alamat {
                    margin: auto;
                }

                .footer.mobile h3.logo_title {
                    font-size: 2rem;
                }

                .footer.mobile .container-footer-logo img {
                    width: 4rem;
                }

                .footer.mobile .container-content-alamat {
                    margin-top: 1rem;
                }

                .footer.mobile .container-content-alamat>div {
                    padding: 0.25rem 0;
                }

                .footer.mobile .container-content-alamat .sosmed {
                    justify-content: center;
                    margin-top: 1rem;
                }

                .footer.mobile .container-content-footer {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .footer.mobile .container-content-footer>div {
                    justify-content: center;
                    justify-items: center;
                    align-items: center;
                    margin: 1rem auto;
                }

                .footer.mobile .container-content-footer>div>a {
                    padding: 0.3rem;
                }

                .footer.mobile .container-content-footer>div>h3 {
                    margin: 1rem 0;
                    font-size: 1.5rem;
                }

                .footer.mobile .container-content-footer>div .subscribe-input {
                    margin-top: 0.75rem;
                    height: 30px;
                    width: 100%;
                }

                .footer.mobile .container-content-footer>div .subscribe-input input[type="email"] {
                    height: 45px;
                    width: calc(100% - 45px);
                    font-size: 1rem;
                    border-start-start-radius: 0.5rem;
                    border-end-start-radius: 0.5rem;
                }

                .footer.mobile .container-content-footer>div .subscribe-input>a>div {
                    width: 45px;
                    height: 45px;
                    border-start-end-radius: 0.5rem;
                    border-end-end-radius: 0.5rem;
                }

            `;
      return style;
    }
    function handleResize() {
      Utils.checkWindowWidth(that._shadowRoot);
    }
    function globalStyle() {
      Utils.AddContainerStyle(that._shadowRoot);
      Utils.AddFontStyle(that._shadowRoot);
      Utils.AddAnimationStyle(that._shadowRoot);
      Utils.AddGlobalStyle(that._shadowRoot);
      that._style.textContent = that.adtFunct().getStyle();
      that._footerElement.appendChild(that._style);
      Utils.checkWindowWidth(that._shadowRoot);
    }
    return {
      getFooter: getFooter,
      getStyle: getStyle,
      globalStyle: globalStyle,
      handleResize: handleResize,
    };
  }
}

customElements.define('pn-footer', pn_footer);
