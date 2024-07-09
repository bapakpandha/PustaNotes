
class pn_notelist extends HTMLElement {
    constructor() {
        super();
        this._tabsElement = document.createElement('div');
        this._noteitems = document.createElement('pn_noteitems')
        this._style = document.createElement('style');
        this.appendChild(this._tabsElement);
        this.appendChild(this._noteitems);
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this._tabsElement.innerText = `
            <div class="active">
                Catatan Utama
            </div>
            <div class="">
                Catatan Diarsipkan
            </div>
        `
    }
}

customElements.define( 'pn-notelist', pn_notelist);