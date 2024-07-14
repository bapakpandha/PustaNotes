import Notes from "../../database/notes.js";
import NotesApi from "../../database/notes-api.js";
import Utils from "../utils/utils.js";
class pn_noteitems extends HTMLElement {
  constructor() {
    super();
    this._ContainerElement = document.createElement("div");
    this._style = document.createElement("style");
    this.appendChild(this._ContainerElement);
    this.GeneralNoteData = {};
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._ContainerElement.innerHTML = `<div class=container><div class=title><h2>Cari Catatan</h2></div><div id=search><form action=javascript:void(0);><fieldset class=clearfix style=display:flex;flex-direction:row><input type=search value="Cari Catatan disini"name=search onblur='""==this.value&&(this.value="Cari Catatan disini")'onfocus='"Cari Catatan disini"==this.value&&(this.value="")'> <input type=submit value=Search class=button name=search_submit> <input type=submit value=Reset name="reset_submit" class=button></fieldset></form></div><div class="title" style="margin:1.8rem auto;"><button id="addNewNote" class="addNewNote">Tambah Catatan Baru</button></div><div class=content></div></div>
           `;
    this.execAdtFunct();
  }

  adtFunct() {
    var that = this;

    function addClassList() {
      that.style.display = "block";
    }

    function clearContentNotes() {
      const content_element =
        that._ContainerElement.querySelector("div.content");
      content_element.innerHTML = "";
    }

    const fetchAndDisplayNotes = async () => {
      try {
        const notes = await NotesApi.getAll();
        const notes_archived = await NotesApi.getArchived();
        const allNotes = notes.concat(notes_archived);
        that.GeneralNoteData = allNotes;
        displayNotes(allNotes);
      } catch (error) {
        console.log(error);
      }
    };

    function displayNotes(data) {
      clearContentNotes();
      let notesData = tabHandler().filteringDataBasedOnActiveTab(data)
      notesData
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .forEach((note) => {
          const noteElement = document.createElement("pn-noteitem");
          noteElement.setAttribute("data-idNote", note.id);
          noteElement.innerHTML = `
                    <span slot="title">${note.title}</span>
                    <span slot="body">${note.body}</span>
                    <span slot="createdAt">${Utils.formatDateToReadable(note.createdAt)}</span>
                `;
          const content_element =
            that._ContainerElement.querySelector("div.content");

          content_element.appendChild(noteElement);
        });
      tabHandler().changeButtonWhenChangeTab()
      categorizingHandler().addListenerButtonArchive();
    }

    function listenAddNoteButton() {
      const addNoteElement =
        that._ContainerElement.querySelector("#addNewNote");
      addNoteElement.addEventListener("click", addNewNoteHandler);
    }

    function addNewNoteHandler() {
      addNewNoteHandlerExec().showModal();
    }

    function addNewNoteHandlerExec(edit = false, id_note = null) {
      that = that;
      function showModal() {
        if (document.querySelector(".addNewNote") === null) {
          var doc = document.createElement("div");
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
                        <style> .addNewNote { width: 100%; position: fixed; top: 0; left: 0; z-index: 1000000; background: rgba(204, 204, 204, .6); transition: opacity .5s ease-in; opacity: 1; height: 100%; text-transform: none } .addNewNote main, .addNewNote section { margin-top: 0 } .addNewNoteWrapper { display: flex; justify-content: space-between } .addNewNote .demo-page { margin: 0 auto; display: -webkit-flex; display: flex; max-width: 55em; justify-content: center; align-items: center; height: 100% } .addNewNote .demo-page .demo-page-content { width: calc(100% - 5em) } .addNewNote .demo-page .demo-page-content { padding: 2em 1em; max-width: 100% } .addNewNote section { background: #fff; padding: 2em; border-radius: .75rem; line-height: 1.6; overflow: hidden; margin-bottom: 2rem; position: relative; font-size: .875rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05) } .addNewNote section h1 { font-weight: 500; font-size: 1.25rem; color: #000; margin-bottom: .75rem; text-align: center } .addNewNote section p { margin: .5rem 0 1.5rem } .addNewNote .nice-form-group { --nf-input-size: 1rem; --nf-input-font-size: calc(var(--nf-input-size)*0.875); --nf-small-font-size: calc(var(--nf-input-size)*0.875); --nf-input-font-family: inherit; --nf-label-font-family: inherit; --nf-input-color: #20242f; --nf-input-border-radius: 0.25rem; --nf-input-placeholder-color: #929292; --nf-input-border-color: #c0c4c9; --nf-input-border-width: 1px; --nf-input-border-style: solid; --nf-input-border-bottom-width: 2px; --nf-input-focus-border-color: #3b4ce2; --nf-input-background-color: #f9fafb; --nf-invalid-input-border-color: var(--nf-input-border-color); --nf-invalid-input-background-color: var(--nf-input-background-color); --nf-invalid-input-color: var(--nf-input-color); --nf-valid-input-border-color: var(--nf-input-border-color); --nf-valid-input-background-color: var(--nf-input-background-color); --nf-valid-input-color: inherit; --nf-invalid-input-border-bottom-color: red; --nf-valid-input-border-bottom-color: green; --nf-label-font-size: var(--nf-small-font-size); --nf-label-color: #374151; --nf-label-font-weight: 500; --nf-slider-track-background: #dfdfdf; --nf-slider-track-height: 0.25rem; --nf-slider-thumb-size: calc(var(--nf-slider-track-height)*4); --nf-slider-track-border-radius: var(--nf-slider-track-height); --nf-slider-thumb-border-width: 2px; --nf-slider-thumb-border-focus-width: 1px; --nf-slider-thumb-border-color: #fff; --nf-slider-thumb-background: var(--nf-input-focus-border-color); display: block; margin-top: calc(var(--nf-input-size)*1.5); line-height: 1; white-space: nowrap; --switch-orb-size: var(--nf-input-size); --switch-orb-offset: calc(var(--nf-input-border-width)*2); --switch-width: calc(var(--nf-input-size)*2.5); --switch-height: calc(var(--nf-input-size)*1.25 + var(--switch-orb-offset)) } .addNewNote .nice-form-group>label { font-weight: var(--nf-label-font-weight); display: block; color: var(--nf-label-color); font-size: var(--nf-label-font-size); font-family: var(--nf-label-font-family); margin-bottom: calc(var(--nf-input-size)/2); white-space: normal } .addNewNote .nice-form-group>input[type=checkbox], .nice-form-group>input[type=date], .nice-form-group>input[type=email], .nice-form-group>input[type=month], .nice-form-group>input[type=number], .nice-form-group>input[type=password], .nice-form-group>input[type=radio], .nice-form-group>input[type=search], .nice-form-group>input[type=tel], .nice-form-group>input[type=text], .nice-form-group>input[type=time], .nice-form-group>input[type=url], .nice-form-group>input[type=week], .nice-form-group>select, .nice-form-group>textarea { background: var(--nf-input-background-color); font-family: inherit; font-size: var(--nf-input-font-size); border-bottom-width: var(--nf-input-border-width); font-family: var(--nf-input-font-family); box-shadow: none; border-radius: var(--nf-input-border-radius); border: var(--nf-input-border-width) var(--nf-input-border-style) var(--nf-input-border-color); border-bottom: var(--nf-input-border-bottom-width) var(--nf-input-border-style) var(--nf-input-border-color); color: var(--nf-input-color); width: 100%; padding: calc(var(--nf-input-size)*.75); height: calc(var(--nf-input-size)*2.75); line-height: normal; -webkit-appearance: none; -moz-appearance: none; appearance: none; transition: all .15s ease-out; --icon-padding: calc(var(--nf-input-size)*2.25); --icon-background-offset: calc(var(--nf-input-size)*0.75) } .addNewNote .addNewNote_Button { margin-top: 2rem; display: inline-block; padding: .5em 1em; border-radius: 5px; font-size: .875rem; background: var(--third-color); top: 1em; right: 1em; color: #fff; font-weight: 500; -webkit-user-select: none; user-select: none; cursor: pointer } .addNewNote .addNewNote_Button.red { background: red } #note_body { min-height:500px;} </style> 
                        `;
          doc.innerHTML = element;
          document.body.appendChild(doc);
        }
        var title_field = document.body.querySelector("#title");
        var body_field = document.body.querySelector("#note_body");
        var title_warning = document.body.querySelector("#warning_title");
        var body_warning = document.body.querySelector("#warning_body");
        var cancel = document.body.querySelector("#cancelAddNewNote");
        var submit = document.body.querySelector("#submitAddNewNote");
        let respon = {};
        cancel.addEventListener("click", hideModal);
        submit.addEventListener("click", submitNote);

        if (edit = true && (id_note != null)) {
          const note = that.GeneralNoteData.find(note => note.id === id_note);
          if (note) {
            title_field.value = note.title;
            body_field.value = note.body;
          }
        }

        title_field.addEventListener("input", () => {
          if (title_field.value.length < 5) {
            title_warning.textContent = "Judul Harus Lebih Dari 5 Karakter!";
            title_warning.style.display = "block";
          } else {
            title_warning.textContent = "";
            title_warning.style.display = "none";
          }
        });

        body_field.addEventListener("input", () => {
          if (body_field.value.length < 5) {
            body_warning.textContent =
              "Isi Catatan Harus Lebih Dari 5 Karakter!";
            body_warning.style.display = "block";
          } else {
            body_warning.textContent = "";
            body_warning.style.display = "none";
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
        const modal = document.querySelector(".addNewNote");
        const dateNow = Date.now();
        const title = modal.querySelector("#title").value;
        const noteBody = modal.querySelector("#note_body").value;
        var title_warning = document.body.querySelector("#warning_title");
        var body_warning = document.body.querySelector("#warning_body");
        if (!title) {
          title_warning.textContent = "Judul Tidak Boleh Kosong!";
          title_warning.style.display = "block";
          var ConfirmBox = Utils.generalConfirmDialogBuilder();
          var confBox = new ConfirmBox(
            document.body,
            {
              ok: function () {
                return;
              },
            },
            [`Judul Catatan Tidak Lengkap!`],
            [`Mohon Tambahkan Judul, Karena Tidak Boleh Kosong`],
            false,
            "Ok",
          );
        } else if (!noteBody) {
          body_warning.textContent = "Isi Catatan Tidak Boleh Kosong!";
          body_warning.style.display = "block";
          var ConfirmBox = Utils.generalConfirmDialogBuilder();
          var confBox = new ConfirmBox(
            document.body,
            {
              ok: function () {
                return;
              },
            },
            [`Isi Catatan Kosong!`],
            [`Mohon tambahkan Isi catatan setidaknya 5 karakter`],
            false,
            "Ok",
          );
        } else if (title.length < 5) {
          var ConfirmBox = Utils.generalConfirmDialogBuilder();
          var confBox = new ConfirmBox(
            document.body,
            {
              ok: function () {
                return;
              },
            },
            [`Judul Catatan Minimal 5 Karakter!`],
            [`Mohon tambahkan Judul catatan setidaknya 5 karakter`],
            false,
            "Ok",
          );
        } else if (noteBody.length < 5) {
          var ConfirmBox = Utils.generalConfirmDialogBuilder();
          var confBox = new ConfirmBox(
            document.body,
            {
              ok: function () {
                return;
              },
            },
            [`Judul Catatan Minimal 5 Karakter!`],
            [`Mohon tambahkan Judul catatan setidaknya 5 karakter`],
            false,
            "Ok",
          );
        } else {
          const note_data = {
            title: title,
            body: noteBody,
          };
          let confirmValue = {};
          if (edit=true){
            confirmValue.title = ["Perbarui Catatan?"];confirmValue.body=[`Apakah Anda Yakin ingin menyimpan Perubahan pada catatan berjudul "${title}"?`];
            confirmValue.ok="Simpan";confirmValue.success="Sukses Memperbarui Catatan";confirmValue.loading="Memperbarui Catatan...";confirmValue.failed="Gagal Memperbarui catatan!"
          } else {
            confirmValue.title=[`Tambahkan Catatan?`];confirmValue.body=[`Apakah Anda yakin ingin menambahkan catatan berjudul "${title}" ke dalam Daftar Catatan?`];confirmValue.ok="Tambahkan";confirmValue.success="Sukses Menambahkan Catatan";confirmValue.loading="Sedang Menambahkan...";confirmValue.failed="Gagal Menambahkan"}
          var ConfirmBox = Utils.generalConfirmDialogBuilder();
          var confBox = new ConfirmBox(
            modal,
            {
              ok: async function () {
                if (edit=true){
                  const { response, responseJson, error } = await NotesApi.editNoteById(id_note, note_data);
                  confirmValue.response = response; confirmValue.responseJson = responseJson; confirmValue.error=error;
                  console.log(responseJson)
                  console.log(response)
                } else {
                const { response, responseJson, error } = await NotesApi.addNote(note_data);
                confirmValue.response = response; confirmValue.responseJson = responseJson; confirmValue.error=error;
                }
                if (confirmValue.error || !confirmValue.response.ok || (confirmValue.responseJson.status != 'success')) {
                  confBox.failed(confBox.instance);
                } else {
                  confBox.success(confBox.instance);
                  hideModal();
                  that.adtFunct().fetchAndDisplayNotes();
                }
              },
              cancel: function () {
                return;
              },
            },
          confirmValue.title,
            confirmValue.body,
            true,
            confirmValue.ok,
            "Batal",
            confirmValue.success,
            true,
            confirmValue.loading,
            confirmValue.failed
          );
        }
      }
      return {
        showModal: showModal,
        hideModal: hideModal,
        submitNote: submitNote,
      };
    }

    function generalSearchHandler() {
      // that = that;
      function handleSearch(searchString) {
        let jsonDataString = that.GeneralNoteData;
        let filteredNotesName = jsonDataString.filter(
          (note) =>
            note.title.toLowerCase().includes(searchString.toLowerCase()) ||
            note.body.toLowerCase().includes(searchString.toLowerCase()),
        );
        that.adtFunct().displayNotes(filteredNotesName);
      }
      function searchHandler() {
        const searchBar = that._ContainerElement.querySelector(
          'input[type="search"][name="search"]',
        );
        let timeoutId;
        searchBar.addEventListener("keyup", (e) => {
          clearTimeout(timeoutId);
          var searchString = e.target.value;
          timeoutId = setTimeout(() => {
            if (searchString.length < 1) {
              that.adtFunct().displayNotes(that.GeneralNoteData);
            } else {
              handleSearch(searchString);
            }
          }, 100);
        });
      }
      function searchButtonClickHandler() {
        const searchBar = that._ContainerElement.querySelector(
          'input[type="search"][name="search"]',
        );
        const searchString = searchBar.value;
        handleSearch(searchString);
      }
      const searchButton = that._ContainerElement.querySelector(
        'input[name="search_submit"]',
      );
      searchButton.addEventListener("click", searchButtonClickHandler);
      const reset_submit = that._ContainerElement.querySelector(
        'input[name="reset_submit"]',
      );
      reset_submit.addEventListener(
        "click",
        function (e) {
          displayNotes();
          that._ContainerElement.querySelector(
            'input[type="search"][name="search"]',
          ).value = "Cari Catatan disini";
        },
        false,
      );
      searchHandler();
    }

    function categorizingHandler() {
      // EVENT LISTENER
      function addListenerButtonArchive() {
        document
          .querySelector("pn-notes-wrapper")
          .shadowRoot.querySelectorAll("pn-noteitem")
          .forEach((noteItem) => {
            const buttonSelect =
              noteItem.shadowRoot.querySelectorAll(".button_select div");
            buttonSelect.forEach((button) => {
              button.addEventListener("click", function () {
                let noteElement = noteItem.shadowRoot.host;
                const idNote = noteElement.getAttribute("data-idnote");
                const action = button.getAttribute("class");
                let note_title = that.GeneralNoteData.find(
                  (note) => note.id === idNote,
                ).title;
                if (action == "arsipkan") {
                  confirmTrigger(idNote, note_title, action);
                } else if (action == "hapus") {
                  confirmTrigger(idNote, note_title, action);
                } else if (action == "unarsipkan") {
                  confirmTrigger(idNote, note_title, action);
                } else if (action == "edit") {
                  addNewNoteHandlerExec(true, idNote).showModal();
                } else { console.log(action); return }
              });
            })
          });
      }
      // GENERALCONFIRMTRIGGER
      function confirmTrigger(note_id, note_title = "", action) {
        let respon = {};
        if (action == "arsipkan") {
          respon["title"] = ["Arsipkan Catatan?", "Yakin?"]; respon["body"] = [`Apakah anda yakin ingin mengarsipkan catatan dengan judul: ${note_title}`, "Apakah Anda Yakin?"]; respon["ok"] = "Arsipkan"; respon["success"] = "Sukses Mengarsipkan"; respon["loading"] = "Sedang Mengarsipkan..."; respon["failed"] = "Gagal Mengarsipkan!";
        } else if (action == "unarsipkan") {
          respon["title"] = ["Unarsipkan Catatan?", "Yakin?"]; respon["body"] = [`Apakah anda yakin ingin membatalkan pengarsipan catatan dengan judul: ${note_title}`, "Apakah Anda Yakin?"]; respon["ok"] = "Unarsipkan"; respon["success"] = "Sukses Membatalkan Arsip"; respon["loading"] = "Sedang Meng-unarsipkan..."; respon["failed"] = "Gagal Meng-unarsipkan!";
        } else if (action == "hapus") {
          respon["title"] = ["Hapus Catatan?", "Yakin?"]; respon["body"] = [`Apakah anda yakin ingin menghapus catatan dengan judul: ${note_title}`, "Apakah Anda Yakin?"]; respon["ok"] = "Hapus"; respon["success"] = "Sukses Dihapus"; respon["loading"] = "Sedang Menghapus..."; respon["failed"] = "Gagal Menghapus!";
        } else { return }
        var ConfirmBox = Utils.generalConfirmDialogBuilder();
        var confBox = new ConfirmBox(
          document.body,
          {
            ok: async function () {
              if (action == "hapus") {
                const { response, responseJson, error } = await NotesApi.deleteNoteById(note_id);
                respon["response"] = response; respon["responseJson"] = responseJson; respon["error"] = error;
              } else if (action == "unarsipkan") {
                const { response, responseJson, error } = await NotesApi.deleteNoteById(note_id);
                respon["response"] = response; respon["responseJson"] = responseJson; respon["error"] = error;
              } else if (action == "arsipkan") {
                const { response, responseJson, error } = await NotesApi.archiveNoteById(note_id);
                respon["response"] = response; respon["responseJson"] = responseJson; respon["error"] = error;
              } else { console.log("bukan hapus bukan arsip") }
              if (respon.error || !respon.response.ok || (respon.responseJson.status != 'success')) {
                confBox.failed(confBox.instance);
                console.error(`Sedang Gangguan: ${respon.responseJson.status} : ${respon.responseJson.message}`);
                console.error(respon.response.error);
              } else {
                confBox.success(confBox.instance);
                that.adtFunct().fetchAndDisplayNotes();
              }
            },
            cancel: function () {
              return;
            },

          },
          respon.title, respon.body,
          true,
          respon.ok,
          "Batal",
          respon.success,
          true,
          respon.loading,
          respon.failed
        );
      }

      return { addListenerButtonArchive: addListenerButtonArchive };
    }

    function tabHandler() {
      let tabContent = ""
      let currentActiveElement = that.parentElement.querySelector(
        "pn-notelist .notes_info.tabs div.active",
      );
      if (currentActiveElement) { tabContent = currentActiveElement.textContent.trim(); }

      function addEventListenerToTabs() {
        const tabs_Element = that.parentElement.querySelectorAll(
          "pn-notelist .notes_info.tabs div",
        );
        tabs_Element.forEach((tab) => {
          tab.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
              tabs_Element.forEach((t) => t.classList.remove("active"));
              this.classList.add("active");
              displayNotes(that.GeneralNoteData);
            }
          });
        });
      }

      function filteringDataBasedOnActiveTab(notes_data) {
        if (tabContent) {
          if (tabContent === "Catatan Utama") {
            return notes_data.filter((note) => note.archived == false);
          } else if (tabContent === "Catatan Diarsipkan") {
            return notes_data.filter((note) => note.archived == true);
          } else {
            return notes_data;
          }
        }
      }

      function changeButtonWhenChangeTab() {
        let items = document.querySelector("pn-notes-wrapper").shadowRoot.querySelectorAll("pn-noteitem");
        if (tabContent === "Catatan Utama") {
        } else if (tabContent === "Catatan Diarsipkan") {
          items.forEach((item) => {
            let buttonArchive = item.shadowRoot.querySelector(".button_select div.arsipkan");
            buttonArchive.innerHTML = `<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fill-rule="nonzero" d="M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm-8 7l-4 4h3v4h2v-4h3l-4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z"></path> </g> </g></svg>`;
            buttonArchive.className = "unarsipkan"
          });

        } else {
          console.log("tabCOntentKosong")
        }
      }

      return {
        addEventListenerToTabs: addEventListenerToTabs,
        filteringDataBasedOnActiveTab: filteringDataBasedOnActiveTab,
        changeButtonWhenChangeTab: changeButtonWhenChangeTab,
      };
    }

    return {
      addClassList: addClassList,
      displayNotes: displayNotes,
      listenAddNoteButton: listenAddNoteButton,
      addNewNoteHandlerExec: addNewNoteHandlerExec,
      clearContentNotes: clearContentNotes,
      generalSearchHandler: generalSearchHandler,
      categorizingHandler: categorizingHandler,
      tabHandler: tabHandler,
      fetchAndDisplayNotes: fetchAndDisplayNotes,
    };
  }

  execAdtFunct() {
    this.adtFunct().addClassList();
    this.adtFunct().fetchAndDisplayNotes();
    this.adtFunct().listenAddNoteButton();
    this.adtFunct().generalSearchHandler();
    this.adtFunct().tabHandler().addEventListenerToTabs();
  }
}

customElements.define("pn-noteitems", pn_noteitems);
