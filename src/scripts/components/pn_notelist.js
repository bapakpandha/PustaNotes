class pn_notelist extends HTMLElement {
    constructor() {
        super();
        this._tabsElement = document.createElement('div');
        this._style = document.createElement('style');
        this.appendChild(this._tabsElement);
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this._tabsElement.innerHTML = 
        `<div class="active">Catatan Utama</div><div class="">Catatan Diarsipkan</div>
           `
        this.execAdtFunct();
    }

    adtFunct() {
        self = this;
        function addClassList() {
            self.style.display = 'block';
            self._tabsElement.classList.add('notes_info', 'tabs')
        }
        return {addClassList:addClassList}
    }
    execAdtFunct() {
        this.adtFunct().addClassList();
    }
}

customElements.define( 'pn-notelist', pn_notelist);