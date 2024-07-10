import Notes from "../../database/notes.js" 
import Utils from "../utils/utils.js";
class pn_noteitems extends HTMLElement {
    
    constructor() {
        super();
        this._ContainerElement = document.createElement('div');
        this._style = document.createElement('style');
        this.appendChild(this._ContainerElement);
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        this._ContainerElement.innerHTML = 
        `<div class=container><div class=title><h2>Cari Catatan</h2></div><div id=search><form action=javascript:void(0);><fieldset class=clearfix style=display:flex;flex-direction:row><input type=search value="Cari Catatan disini"name=search onblur='""==this.value&&(this.value="Cari Catatan disini")'onfocus='"Cari Catatan disini"==this.value&&(this.value="")'> <input type=submit value=Search class=button name=search_submit> <input type=submit value=Reset class=button onclick=writeBookDataExec()></fieldset></form></div><div class="title" style="margin:1.8rem auto;"><button id="addNewNote" class="addNewNote">Tambah Catatan Baru</button></div><div class=content></div></div>
           `
        this.execAdtFunct();
    }   

    adtFunct() {
        self = this;

        function addClassList() {
            self.style.display = 'block';
        }
        
        function clearContentNotes() {
            const content_element = self._ContainerElement.querySelector('div.content');
            content_element.innerHTML = "";
        }

        function getNotesData() {
            const result = Notes.getAll();
            return result
        }
        
        function displayNotes() {
            getNotesData().forEach(note => {
                const noteElement = document.createElement('pn-noteitem');
                noteElement.innerHTML = `
                    <span slot="notes_id">${note.id}</span>
                    <span slot="title">${note.title}</span>
                    <span slot="body">${note.body}</span>
                    <span slot="createdAt">${Utils.formatDateToReadable(note.createdAt)}</span>
                    <span slot="archived">${note.archived}</span>
                `;
                const content_element = self._ContainerElement.querySelector('div.content');
                content_element.appendChild(noteElement);
            });
        }

        function listenAddNoteButton() {
            const addNoteElement = self._ContainerElement.querySelector('#addNewNote');
            addNoteElement.addEventListener('click', addNewNoteHandler);
        }

        function addNewNoteHandler() {
            addNewNoteHandlerExec().showModal();
        }

        function addNewNoteHandlerExec() {
            function showModal() {
                if (document.querySelector(".addNewNote") === null) {
                    var doc = document.createElement('div');
                    doc.classList.add("addNewNote");
                    var element = `
                        <div class=demo-page>
                            <main class=demo-page-content>
                                <section>
                                    <h1><svg class="feather feather-align-justify" fill=none height=24 style=display:block;margin:auto
                                            viewBox="0 0 24 24" width=24 xmlns=http://www.w3.org/2000/svg>
                                            <g id=SVGRepo_bgCarrier stroke-width=0></g>
                                            <g id=SVGRepo_tracerCarrier stroke-linecap=round stroke-linejoin=round></g>
                                            <g id=SVGRepo_iconCarrier>
                                                <rect fill=white height=24 width=24></rect>
                                                <path
                                                    d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                                                    stroke=#000000 stroke-linejoin=round></path>
                                                <path
                                                    d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                                                    stroke=#000000 stroke-linejoin=round></path>
                                            </g>
                                        </svg> Tambahkan Catatan Baru</h1>
                                    <div class=nice-form-group><label>Judul Catatan</label> <input type="text" id=title
                                            placeholder="Contoh: Deadline Coding Front End" required><span id="warning_title" style="padding: 0.5rem 0.2rem;display: none;color: red;">Judul Tidak Boleh Kosong!</span></div>
                                    <div class=nice-form-group><label>Isi Catatan</label> <textarea cols=10 id=note_body
                                            name=Text1 rows=9></textarea><span id="warning_body" style="padding: 0.5rem 0.2rem;display: none;color: red;">Isi Catatan Tidak Boleh Kosong!</span></div>
                                    <div class=addNewNoteWrapper>
                                        <div class=addNewNote_Button id=submitAddNewNote>Tambahkan
                                            Catatan</div>
                                        <div class="addNewNote_Button red" id="cancelAddNewNote">Cancel</div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    <style>
                        .addNewNote {
                            width: 100%;
                            position: fixed;
                            top: 0;
                            left: 0;
                            z-index: 1000000;
                            background: rgba(204, 204, 204, .6);
                            transition: opacity .5s ease-in;
                            opacity: 1;
                            height: 100%;
                            text-transform: none
                        }
    
                        .addNewNote main,
                        .addNewNote section {
                            margin-top: 0
                        }
    
                        .addNewNoteWrapper {
                            display: flex;
                            justify-content: space-between
                        }
    
                        .addNewNote .demo-page {
                            margin: 0 auto;
                            display: -webkit-flex;
                            display: flex;
                            max-width: 55em;
                            justify-content: center;
                            align-items: center;
                            height: 100%
                        }
    
                        .addNewNote .demo-page .demo-page-content {
                            width: calc(100% - 5em)
                        }
    
                        .addNewNote .demo-page .demo-page-content {
                            padding: 2em 1em;
                            max-width: 100%
                        }
    
                        .addNewNote section {
                            background: #fff;
                            padding: 2em;
                            border-radius: .75rem;
                            line-height: 1.6;
                            overflow: hidden;
                            margin-bottom: 2rem;
                            position: relative;
                            font-size: .875rem;
                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)
                        }
    
                        .addNewNote section h1 {
                            font-weight: 500;
                            font-size: 1.25rem;
                            color: #000;
                            margin-bottom: .75rem;
                            text-align: center
                        }
    
                        .addNewNote section p {
                            margin: .5rem 0 1.5rem
                        }
    
                        .addNewNote .nice-form-group {
                            --nf-input-size: 1rem;
                            --nf-input-font-size: calc(var(--nf-input-size)*0.875);
                            --nf-small-font-size: calc(var(--nf-input-size)*0.875);
                            --nf-input-font-family: inherit;
                            --nf-label-font-family: inherit;
                            --nf-input-color: #20242f;
                            --nf-input-border-radius: 0.25rem;
                            --nf-input-placeholder-color: #929292;
                            --nf-input-border-color: #c0c4c9;
                            --nf-input-border-width: 1px;
                            --nf-input-border-style: solid;
                            --nf-input-border-bottom-width: 2px;
                            --nf-input-focus-border-color: #3b4ce2;
                            --nf-input-background-color: #f9fafb;
                            --nf-invalid-input-border-color: var(--nf-input-border-color);
                            --nf-invalid-input-background-color: var(--nf-input-background-color);
                            --nf-invalid-input-color: var(--nf-input-color);
                            --nf-valid-input-border-color: var(--nf-input-border-color);
                            --nf-valid-input-background-color: var(--nf-input-background-color);
                            --nf-valid-input-color: inherit;
                            --nf-invalid-input-border-bottom-color: red;
                            --nf-valid-input-border-bottom-color: green;
                            --nf-label-font-size: var(--nf-small-font-size);
                            --nf-label-color: #374151;
                            --nf-label-font-weight: 500;
                            --nf-slider-track-background: #dfdfdf;
                            --nf-slider-track-height: 0.25rem;
                            --nf-slider-thumb-size: calc(var(--nf-slider-track-height)*4);
                            --nf-slider-track-border-radius: var(--nf-slider-track-height);
                            --nf-slider-thumb-border-width: 2px;
                            --nf-slider-thumb-border-focus-width: 1px;
                            --nf-slider-thumb-border-color: #fff;
                            --nf-slider-thumb-background: var(--nf-input-focus-border-color);
                            display: block;
                            margin-top: calc(var(--nf-input-size)*1.5);
                            line-height: 1;
                            white-space: nowrap;
                            --switch-orb-size: var(--nf-input-size);
                            --switch-orb-offset: calc(var(--nf-input-border-width)*2);
                            --switch-width: calc(var(--nf-input-size)*2.5);
                            --switch-height: calc(var(--nf-input-size)*1.25 + var(--switch-orb-offset))
                        }
    
                        .addNewNote .nice-form-group>label {
                            font-weight: var(--nf-label-font-weight);
                            display: block;
                            color: var(--nf-label-color);
                            font-size: var(--nf-label-font-size);
                            font-family: var(--nf-label-font-family);
                            margin-bottom: calc(var(--nf-input-size)/2);
                            white-space: normal
                        }
    
                        .addNewNote .nice-form-group>input[type=checkbox],
                        .nice-form-group>input[type=date],
                        .nice-form-group>input[type=email],
                        .nice-form-group>input[type=month],
                        .nice-form-group>input[type=number],
                        .nice-form-group>input[type=password],
                        .nice-form-group>input[type=radio],
                        .nice-form-group>input[type=search],
                        .nice-form-group>input[type=tel],
                        .nice-form-group>input[type=text],
                        .nice-form-group>input[type=time],
                        .nice-form-group>input[type=url],
                        .nice-form-group>input[type=week],
                        .nice-form-group>select,
                        .nice-form-group>textarea {
                            background: var(--nf-input-background-color);
                            font-family: inherit;
                            font-size: var(--nf-input-font-size);
                            border-bottom-width: var(--nf-input-border-width);
                            font-family: var(--nf-input-font-family);
                            box-shadow: none;
                            border-radius: var(--nf-input-border-radius);
                            border: var(--nf-input-border-width) var(--nf-input-border-style) var(--nf-input-border-color);
                            border-bottom: var(--nf-input-border-bottom-width) var(--nf-input-border-style) var(--nf-input-border-color);
                            color: var(--nf-input-color);
                            width: 100%;
                            padding: calc(var(--nf-input-size)*.75);
                            height: calc(var(--nf-input-size)*2.75);
                            line-height: normal;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            transition: all .15s ease-out;
                            --icon-padding: calc(var(--nf-input-size)*2.25);
                            --icon-background-offset: calc(var(--nf-input-size)*0.75)
                        }
    
                        .addNewNote .addNewNote_Button {
                            margin-top: 2rem;
                            display: inline-block;
                            padding: .5em 1em;
                            border-radius: 5px;
                            font-size: .875rem;
                            background: var(--third-color);
                            top: 1em;
                            right: 1em;
                            color: #fff;
                            font-weight: 500;
                            -webkit-user-select: none;
                            user-select: none;
                            cursor: pointer
                        }
    
                        .addNewNote .addNewNote_Button.red {
                            background: red
                        }

                        #note_body {
                        min-height:500px;}
                    </style>
                    <script type="module">import Utils from "../../src/utils/utils.js"</script>
                    `;
                    doc.innerHTML = element;
                    document.body.appendChild(doc);
                }
                var title_field = document.body.querySelector('#title');
                var body_field = document.body.querySelector('#note_body')
                var title_warning = document.body.querySelector('#warning_title');
                var body_warning = document.body.querySelector('#warning_body')
                var cancel = document.body.querySelector('#cancelAddNewNote');
                var submit = document.body.querySelector('#submitAddNewNote');
                cancel.addEventListener('click', hideModal);
                submit.addEventListener('click', submitNote);
                
                title_field.addEventListener('input', () => {
                    if (title_field.value.length < 3) {
                        title_warning.textContent = 'Judul Harus Lebih Dari 3 Karakter!';
                        title_warning.style.display = "block"
                    } else {
                        title_warning.textContent = ""
                        title_warning.style.display = "none"
                    }
                });

                body_field.addEventListener('input', () => {
                    if (body_field.value.length < 3) {
                        body_warning.textContent = 'Isi Catatan Harus Lebih Dari 3 Karakter!';
                        body_warning.style.display = "block"
                    } else {
                        body_warning.textContent = ""
                        body_warning.style.display = "none"
                    }
                });

            }
            function hideModal() {
                const modal = document.querySelector(".addNewNote");
                if (modal) {
                    modal.remove();
                }
            }
            function submitNote() {
                const modal = document.querySelector('.addNewNote');
                const dateNow = Date.now();
                const note_id = `Notes-${dateNow}`
                const title = modal.querySelector('#title').value;
                const noteBody = modal.querySelector('#note_body').value;
                if (!title) {
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Judul Catatan Tidak Lengkap!`], [`Mohon Tambahkan Judul, Karena Tidak Boleh Kosong`], false, "Ok");
                } else if (!noteBody) {
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Isi Catatan Kosong!`], [`Mohon tambahkan Isi catatan setidaknya 3 karakter`], false, "Ok");
                } else if (title.length<3) {
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Judul Catatan Minimal 3 Karakter!`], [`Mohon tambahkan Judul catatan setidaknya 3 karakter`], false, "Ok");
                } else {
                    let NoteData = Notes.getAll();
                    if (!NoteData) {
                        NoteData = { };
                    }
                    const note_data = {
                        "id": note_id,
                        "title": title,
                        "body": noteBody,
                        "createdAt": (new Date(dateNow).toISOString()),
                        "archived": false
                    }
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(modal, {
                        ok: function () {
                            Notes.addNote(note_data);
                            hideModal();
                            self.adtFunct().clearContentNotes();
                            self.adtFunct().displayNotes();
                            console.log(Notes.getAll());
                        },
                        cancel: function () {
                        }
                    }, [`Tambahkan Catatan?`], [`Apakah Anda yakin ingin menambahkan catatan berjudul "${title}" ke dalam Daftar Catatan?`], true, "Ok","Cancel");
                }
            }
            return { showModal: showModal, hideModal: hideModal, submitNote: submitNote }
        }

        return {addClassList:addClassList, getNotesData:getNotesData, displayNotes:displayNotes, listenAddNoteButton:listenAddNoteButton,addNewNoteHandlerExec:addNewNoteHandlerExec,clearContentNotes:clearContentNotes}
    }
    execAdtFunct() {
        this.adtFunct().addClassList();
        this.adtFunct().getNotesData();
        this.adtFunct().displayNotes();
        this.adtFunct().listenAddNoteButton();
    }
}

customElements.define( 'pn-noteitems', pn_noteitems);