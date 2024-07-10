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
        `<div class=container><div class=title><h2>Cari Catatan</h2></div><div id=search><form action=javascript:void(0);><fieldset class=clearfix style=display:flex;flex-direction:row><input type=search value="Cari Catatan disini"name=search onblur='""==this.value&&(this.value="Cari Catatan disini")'onfocus='"Cari Catatan disini"==this.value&&(this.value="")'> <input type=submit value=Search class=button name=search_submit> <input type=submit value=Reset class=button></fieldset></form></div><div class="title" style="margin:1.8rem auto;"><button id="addNewNote" class="addNewNote">Tambah Catatan Baru</button></div><div class=content></div></div>
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
        
        function displayNotes(data) {
            clearContentNotes();
            data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).forEach(note => {
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
            self = self
            function showModal() {
                if (document.querySelector(".addNewNote") === null) {
                    var doc = document.createElement('div');
                    doc.classList.add("addNewNote");
                    var element = `
                        <div class=demo-page>
                            <main class=demo-page-content>
                                <section>
                                    <h1><svg style="display:block;margin:auto;" fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 345.369 345.369" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <g> <path d="M199.654,105.629H49.965c-4.143,0-7.5-3.357-7.5-7.5s3.357-7.5,7.5-7.5h149.689c4.142,0,7.5,3.357,7.5,7.5 S203.796,105.629,199.654,105.629z"></path> </g> <g> <path d="M163.922,139.246H49.965c-4.143,0-7.5-3.357-7.5-7.5c0-4.143,3.357-7.5,7.5-7.5h113.957c4.142,0,7.5,3.357,7.5,7.5 C171.422,135.889,168.063,139.246,163.922,139.246z"></path> </g> <g> <path d="M87.682,240.096H49.965c-4.143,0-7.5-3.357-7.5-7.5c0-4.143,3.357-7.5,7.5-7.5h37.717c4.142,0,7.5,3.357,7.5,7.5 C95.182,236.738,91.823,240.096,87.682,240.096z"></path> </g> <g> <path d="M71.332,273.713H49.965c-4.143,0-7.5-3.357-7.5-7.5c0-4.143,3.357-7.5,7.5-7.5h21.367c4.142,0,7.5,3.357,7.5,7.5 C78.832,270.355,75.474,273.713,71.332,273.713z"></path> </g> <path d="M333.404,34.782l-17.108-12.757c-4.308-3.212-9.605-4.558-14.923-3.779c-5.316,0.775-10.012,3.573-13.223,7.88 c-0.002,0.002-0.004,0.005-0.005,0.007l-42.411,57.48V26.529c0-4.143-3.357-7.5-7.5-7.5h-31.08V7.5c0-4.143-3.358-7.5-7.5-7.5 c-4.143,0-7.5,3.357-7.5,7.5v11.529H169.73V7.5c0-4.143-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.357-7.5,7.5v11.529h-22.422V7.5 c0-4.143-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v11.529H94.887V7.5c0-4.143-3.358-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5 v11.529H57.465V7.5c0-4.143-3.358-7.5-7.5-7.5c-4.143,0-7.5,3.357-7.5,7.5v11.529H11.383c-4.142,0-7.5,3.357-7.5,7.5v311.34 c0,4.143,3.358,7.5,7.5,7.5h226.852c4.143,0,7.5-3.357,7.5-7.5V188.138l91.767-125.204c0.001-0.002,0.003-0.003,0.005-0.005 C344.134,54.038,342.295,41.412,333.404,34.782z M230.734,330.369H18.883V34.029h23.582v11.527c0,4.143,3.357,7.5,7.5,7.5 c4.142,0,7.5-3.357,7.5-7.5V34.029h22.422v11.527c0,4.143,3.357,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5V34.029h22.422v11.527 c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5V34.029h22.422v11.527c0,4.143,3.358,7.5,7.5,7.5 c4.143,0,7.5-3.357,7.5-7.5V34.029h22.424v11.527c0,4.143,3.357,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5V34.029h23.58v70.166 l-39.113,53.668H49.965c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h130.725c0,0-42.642,58.513-42.65,58.525 c0,0,0.002,0,0.004,0c-0.484,0.673-0.87,1.432-1.115,2.272l-17.15,58.669H49.965c-4.143,0-7.5,3.357-7.5,7.5 c0,4.143,3.357,7.5,7.5,7.5c0,0,75.515-0.006,75.555-0.006c0-0.001-0.001-0.002-0.002-0.002c1.373-0.022,2.744-0.413,3.951-1.193 l56.059-36.229c0.771-0.498,1.412-1.119,1.932-1.813c0.018-0.024,43.275-59.367,43.275-59.367V330.369z M148.296,248.23 l20.024,14.932l-30.069,19.432L148.296,248.23z M179.861,253.057l-25.305-18.869L272.844,71.883l25.305,18.869L179.861,253.057z M307.05,78.678l-25.306-18.869l8.076-10.83l25.305,18.871L307.05,78.678z M325.48,53.962c-0.002,0.002-0.004,0.005-0.005,0.007 l-1.384,1.855l-25.305-18.871l1.383-1.854c0.002-0.002,0.004-0.004,0.006-0.006c0.816-1.095,2.01-1.807,3.361-2.004 c1.353-0.196,2.697,0.146,3.791,0.961l17.109,12.757C326.697,48.492,327.165,51.702,325.48,53.962z"></path> </g> </g> </g> </g></svg> Tambahkan Catatan Baru</h1>
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
                    if (title_field.value.length < 5) {
                        title_warning.textContent = 'Judul Harus Lebih Dari 5 Karakter!';
                        title_warning.style.display = "block"
                    } else {
                        title_warning.textContent = ""
                        title_warning.style.display = "none"
                    }
                });

                body_field.addEventListener('input', () => {
                    if (body_field.value.length < 5) {
                        body_warning.textContent = 'Isi Catatan Harus Lebih Dari 5 Karakter!';
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
                var title_warning = document.body.querySelector('#warning_title');
                var body_warning = document.body.querySelector('#warning_body')
                if (!title) {
                    title_warning.textContent = 'Judul Tidak Boleh Kosong!';
                    title_warning.style.display = "block"
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Judul Catatan Tidak Lengkap!`], [`Mohon Tambahkan Judul, Karena Tidak Boleh Kosong`], false, "Ok");
                } else if (!noteBody) {
                    body_warning.textContent = 'Isi Catatan Tidak Boleh Kosong!';
                    body_warning.style.display = "block"
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Isi Catatan Kosong!`], [`Mohon tambahkan Isi catatan setidaknya 5 karakter`], false, "Ok");
                } else if (title.length<5) {
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Judul Catatan Minimal 5 Karakter!`], [`Mohon tambahkan Judul catatan setidaknya 5 karakter`], false, "Ok");
                } else if (noteBody.length<5) {
                    var ConfirmBox = Utils.generalConfirmDialogBuilder();
                    var confBox = new ConfirmBox(document.body, {
                        ok: function () {
                            return
                        }
                    }, [`Judul Catatan Minimal 5 Karakter!`], [`Mohon tambahkan Judul catatan setidaknya 5 karakter`], false, "Ok");
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
                            self.adtFunct().displayNotes(self.adtFunct().getNotesData());
                            console.log(Notes.getAll());
                        },
                        cancel: function () {
                        }
                    }, [`Tambahkan Catatan?`], [`Apakah Anda yakin ingin menambahkan catatan berjudul "${title}" ke dalam Daftar Catatan?`], true, "Ok","Cancel");
                }
            }
            return { showModal: showModal, hideModal: hideModal, submitNote: submitNote }
        }

        function generalSearchHandler() {
            self = self;
            function handleSearch(searchString) {
                var jsonDataString = self.adtFunct().getNotesData();
                let filteredNotesName = jsonDataString.filter(note => note.title.toLowerCase().includes(searchString.toLowerCase()));
                self.adtFunct().displayNotes(filteredNotesName);
            }
            function searchHandler() {
                const searchBar = self._ContainerElement.querySelector('input[type="search"][name="search"]');
                let timeoutId;
                searchBar.addEventListener("keyup", e => {
                    console.log(searchBar.value);
                    clearTimeout(timeoutId);
                    var searchString = e.target.value;
                    timeoutId = setTimeout(() => {
                        handleSearch(searchString);
                    }, 100);
                });
            }
            function searchButtonClickHandler() {
                const searchBar = self._ContainerElement.querySelector('input[type="search"][name="search"]');
                const searchString = searchBar.value;
                handleSearch(searchString);
            }
            const searchButton = self._ContainerElement.querySelector('input[name="search_submit"]');
            searchButton.addEventListener("click", searchButtonClickHandler);
            searchHandler();
        }

        return {addClassList:addClassList, getNotesData:getNotesData, displayNotes:displayNotes, listenAddNoteButton:listenAddNoteButton,addNewNoteHandlerExec:addNewNoteHandlerExec,clearContentNotes:clearContentNotes,generalSearchHandler:generalSearchHandler}
    }
    execAdtFunct() {
        this.adtFunct().addClassList();
        this.adtFunct().getNotesData();
        this.adtFunct().displayNotes(self.adtFunct().getNotesData());
        this.adtFunct().listenAddNoteButton();
        this.adtFunct().generalSearchHandler();
    }
}

customElements.define( 'pn-noteitems', pn_noteitems);