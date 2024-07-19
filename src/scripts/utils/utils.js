class Utils {
  static AddGlobalStyle(parentElement) {
    const styleSheet = document.createElement('style');

    styleSheet.textContent = `
              :root { --main-color: #DCF2F1; --secondary-color: #7FC7D9; --third-color: #365486; --fourth-color: #0F1035; --background-clr: linear-gradient(150deg, rgba(180, 198, 197, 1) 3%, rgba(193, 205, 205, 1) 33%, rgba(220, 242, 241, 1) 63%, rgba(255, 255, 255, 1) 93%); } * { margin: 0; padding: 0; box-sizing: border-box; text-decoration: none; outline: none; border: none; text-transform: capitalize; transition: all .4s ease-in-out; animation: opacity_fade_in 0.2s; } a { color: inherit !important; text-decoration: none !important; } a[disabled="disabled"] { pointer-events: none; /* cursor: wait; */ } .button { background-color: var(--third-color); color: var(--main-color) !important; padding: 0.75rem 2rem; border-radius: 2rem; display: flex; } section { margin: 3rem auto; } main .container-section { background-color: var(--main-color); padding: 1rem; border-radius: 1rem; box-shadow: 0 0px 8px rgba(85, 97, 110, 0.9); position: relative; } main .container-section { background-size: 600% 600%; -webkit-animation: gradien_background 9s ease infinite; -moz-animation: gradien_background 9s ease infinite; animation: gradien_background 9s ease infinite; } .button:hover { color: var(--main-color) !important; background-color: #1b2d4c; }
      `;

    parentElement.appendChild(styleSheet);
  }

  static AddContainerStyle(parentElement) {
    const styleSheet = document.createElement('style');

    const styles = `
              .container { width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; } @media (min-width: 576px) { .container { max-width: 540px; } } @media (min-width: 768px) { .container { max-width: 720px; } } @media (min-width: 992px) { .container { max-width: 960px; } } @media (min-width: 1200px) { .container { max-width: 1140px; } } @media (min-width: 1400px) { .container { max-width: 1320px; } } @media (min-width: 1700px) { .container { max-width: 1512px; } } .container.full { max-width: 100%; }
      `;

    styleSheet.textContent = styles;
    parentElement.appendChild(styleSheet);
  }

  static AddFontStyle(parentElement) {
    const styleSheet = document.createElement('style');

    const styles = `
              @font-face { font-family: 'Poppins'; font-weight: 900; font-style: normal; src: url('../../src/fonts/Poppins/Poppins-Black.ttf') format('truetype'); } @font-face { font-family: 'Poppins'; font-weight: 700; font-style: normal; src: url('../../src/fonts/Poppins/Poppins-Bold.ttf') format('truetype'); } @font-face { font-family: 'Poppins'; font-weight: 500; font-style: normal; src: url('../../src/fonts/Poppins/Poppins-Medium.ttf') format('truetype'); } @font-face { font-family: 'Poppins'; font-weight: 400; font-style: normal; src: url('../../src/fonts/Poppins/Poppins-Regular.ttf') format('truetype'); } @font-face { font-family: 'Poppins'; font-weight: 100; font-style: normal; src: url('../../src/fonts/Poppins/Poppins-Thin.ttf') format('truetype'); } @font-face { font-family: 'Poppins'; font-weight: 100; font-style: italic; src: url('../../src/fonts/Poppins/Poppins-ThinItalic.ttf') format('truetype'); }
      `;

    styleSheet.textContent = styles;
    parentElement.appendChild(styleSheet);
  }

  static AddAnimationStyle(parentElement) {
    const styleSheet = document.createElement('style');

    const styles = `
              @-webkit-keyframes gradien_background { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } } @-moz-keyframes gradien_background { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } } @keyframes gradien_background { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } } @-webkit-keyframes topToDown { 0% { top: -3rem } 50% { top: -1.5rem } 0% { top: 0 } } @-moz-keyframes topToDown { 0% { top: -3rem } 50% { top: -1.5rem } 0% { top: 0 } } @keyframes topToDown { 0% { top: -3rem } 50% { top: -1.5rem } 0% { top: 0 } } @-webkit-keyframes opacity_fade_in { 0% { opacity: 0 } 50% { opacity: 0.5 } 100% { opacity: 1 } } @-moz-keyframes opacity_fade_in { 0% { opacity: 0 } 50% { opacity: 0.5 } 100% { opacity: 1 } } @keyframes opacity_fade_in { 0% { opacity: 0 } 50% { opacity: 0.5 } 100% { opacity: 1 } } .animated { opacity: 0; transform: translateY(-3rem); animation: fadeInUp .5s ease forwards; } @keyframes fadeInUp { from { opacity: 0; transform: translateY(-3rem); } to { opacity: 1; transform: translateY(0); } } .animated:nth-child(1) { animation-delay: .1s; } .animated:nth-child(2) { animation-delay: .2s; } .animated:nth-child(3) { animation-delay: .3s; } .animated:nth-child(4) { animation-delay: .4s; } .animated:nth-child(5) { animation-delay: .5s; } *.reveal { scale: 0.94; opacity: 0; transition: 0.9s; transition-timing-static: cubic-bezier(0.5, 0, 0, 1); } .revealOn { opacity: 1; top: 0; scale: 1; } /* TOOLTIP */ li[data-tooltip].tooltip:before, li[data-tooltip].tooltip:after { transform: translateY(10px); } li[data-tooltip].tooltip:hover:after, li[data-tooltip].tooltip:hover:before { transform: translateY(0px); } li[data-tooltip] { position: relative; } li[data-tooltip]:after, li[data-tooltip]:before { position: absolute; visibility: hidden; opacity: 0; transition: transform 200ms ease, opacity 200ms; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); z-index: 99; } li[data-tooltip]:before { content: attr(data-tooltip); background: #000; color: #fff; font-size: 0.8rem; font-weight: bold; padding: 10px 15px; border-radius: 5px; white-space: nowrap; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; } li[data-tooltip]:after { width: 0; height: 0; border: 6px solid transparent; content: ''; } li[data-tooltip]:hover:after, li[data-tooltip]:hover:before { visibility: visible; opacity: 0.85; transform: translateY(0px); } li[data-tooltip][data-position="top"]:before { bottom: 100%; left: -130%; margin-bottom: 9px; } li[data-tooltip][data-position="top"]:after { border-top-color: #000; border-bottom: none; bottom: 101%; left: calc(50% - 6px); margin-bottom: 4px; } .checkmark { width: 100px; height: 100px; border-radius: 50%; display: block; stroke-width: 2; stroke: white; stroke-miterlimit: 10; box-shadow: inset 0px 0px 0px var(--third-color); animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both; position: relative; top: 5px; margin: 0 auto; } .checkmark__circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2px; stroke-miterlimit: 10; stroke: white; fill: var(--third-color); animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards; } circle.checkmark__circle2 { stroke-dasharray: 195; stroke-dashoffset: 195; stroke-width: 10px; stroke-miterlimit: 6; } .checkmark__check { transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards; } @keyframes stroke { 100% { stroke-dashoffset: 0; } } @keyframes scale { 0%, 100% { transform: none; } 50% { transform: scale3d(1.1, 1.1, 1); } } @keyframes fill { 100% { box-shadow: inset 0px 0px 0px 30px var(--third-color); } }
      `;

    styleSheet.textContent = styles;
    parentElement.appendChild(styleSheet);
  }

  static setAttributeIfNotNull(parents = document, selector, property, value) {
    var elements = parents.querySelectorAll(selector);
    elements.forEach(function (element) {
      if (element !== null) {
        if (property === 'style') {
          var styles = value.split(';');
          styles.forEach(function (style) {
            if (style.trim() !== '') {
              var parts = style.split(':');
              var styleName = parts[0].trim();
              var styleValue = parts[1].trim();
              element.style[styleName] = styleValue;
            }
          });
        } else if (property === 'class') {
          element.className = value;
        } else if (property === 'dataset') {
          var data = value.split(',');
          data.forEach(function (item) {
            if (item.trim() !== '') {
              var parts = item.split(':');
              var dataName = parts[0].trim();
              var dataValue = parts[1].trim();
              element.dataset[dataName] = dataValue;
            }
          });
        } else if (property === 'text') {
          element.innerHTML = value;
        } else {
          element[property] = value;
        }
      }
    });
  }

  static checkWindowWidth(parents) {
    if (
      window.matchMedia('(min-width: 992px) and (max-width: 1200px)').matches
    ) {
      this.setAttributeIfNotNull(
        parents,
        '.header',
        'style',
        'flex-direction: column; height: auto;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.header .container-navbar',
        'style',
        'justify-content: center;'
      );
      this.setAttributeIfNotNull(
        parents,
        'main .container-greet-button',
        'style',
        'font-size: 1rem;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.header .navbar',
        'style',
        'width: 100%;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.list-service .item',
        'style',
        'flex: 0 0 40%; margin: 1.5rem;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.container-login .login-form',
        'style',
        'margin: 5rem 0;'
      );
    } else {
      this.setAttributeIfNotNull(
        parents,
        '.header',
        'style',
        'flex-direction: ;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.header .container-navbar',
        'style',
        'justify-content: ;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.header .navbar',
        'style',
        'width: ;'
      );
      this.setAttributeIfNotNull(
        parents,
        'main .container-greet-button',
        'style',
        'font-size: ;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.list-service .item',
        'style',
        'flex: ; margin: ;'
      );
      this.setAttributeIfNotNull(
        parents,
        '.container-login .login-form',
        'style',
        'margin: ;'
      );
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
      this.setAttributeIfNotNull(parents, '.menu', 'style', 'display: block;');
      this.manipulateClass(parents, '.header', 'addClass', 'mobile');
      this.manipulateClass(parents, '.greet', 'addClass', 'mobile');
      this.manipulateClass(
        parents,
        '.container-about_us',
        'addClass',
        'mobile'
      );
      this.manipulateClass(parents, '.footer', 'addClass', 'mobile');
      this.manipulateClass(parents, '.container-login', 'addClass', 'mobile');
      this.setAttributeIfNotNull(
        parents,
        '.container-login .navigation>a>.content_text',
        'text',
        ''
      );
    } else {
      this.setAttributeIfNotNull(parents, '.menu', 'style', 'display: none;');
      this.manipulateClass(parents, '.header', 'removeClass', 'mobile');
      this.manipulateClass(parents, '.greet', 'removeClass', 'mobile');
      this.manipulateClass(
        parents,
        '.container-about_us',
        'removeClass',
        'mobile'
      );
      this.manipulateClass(parents, '.footer', 'removeClass', 'mobile');
      this.manipulateClass(
        parents,
        '.container-login',
        'removeClass',
        'mobile'
      );
      this.setAttributeIfNotNull(
        parents,
        '.container-login .navigation>a>.content_text',
        'text',
        'Kembali Ke Beranda'
      );
    }
  }

  static manipulateClass(parents = document, element, action, className) {
    var targetElement = parents.querySelector(element);
    if (targetElement) {
      if (action === 'addClass') {
        targetElement.classList.add(className);
      } else if (action === 'removeClass') {
        targetElement.classList.remove(className);
      }
    }
  }

  static generalConfirmDialogBuilder() {
    /**
     *
     * @param {object} element - The Object that wrapper of confirmBox should be placed on last child using element.appenchild(confirmboxwrapper). Ex: document.body
     * @param {object} params - Object that how if "Ok Button" or "Cancel Button"  be executed. Example: { ok: function () { functionWhenOkButtonClicked() }, cancel: function () { functionWhenCancelButtonClicked() }
     * @param {string inside array} title - Array that contain a string of Title in confirm box. Ex: ['INI JUDUL CONFIRM BOX']
     * @param {string inside array} value - Array that contain a string of Title in confirm box. Ex: ['Box ini merupakan box confirmation pengganti sweet alert']
     * @param {boolean} showSuccess - Boolean apakah menampilkan prompt success ketika di klik OK
     * @param {string inside array} ok_value - string yang akan ditampilkan di tombol OK
     * @param {string inside array} cancel_value - string yang akan ditampilkan di dalam tombol Cancel
     * example params
     * var ConfirmBox = Utils.generalConfirmDialogBuilder();
        var confBox = new ConfirmBox(
          document.body,
          {
            ok: async function () {
              const { response, responseJson, error } = await NotesApi.deleteNoteById(note_id);
              if (error || !response.ok) {
                confBox.failed(confBox.instance);
              } else {
                confBox.success(confBox.instance);
              }
            },
            cancel: function () {
              return;
            },
          },
          [`Arsipkan Catatan?`, "Yakin?"],
          [
            `Apakah anda yakin ingin mengarsipkan catatan dengan judul: ${note_title}`,
            "Apakah Anda Yakin?",
          ],
          true,
          "Arsipkan",
          "Batal",
          "Sukses Mengarsipkan",
          true,
          "Sedang Mengarsipkan",
          "Gagal Mengarsipkan"
        );
     * 
     */

    function ConfirmBox(
      element,
      params,
      title,
      value,
      showSuccess,
      ok_value,
      cancel_value,
      successValue,
      showLoading,
      loadingValue,
      failedValue
    ) {
      this.element = element || document.body;
      this.params = params || {};
      this.params.ok = params.ok;
      this.params.cancel = params.cancel;
      this.title = title || {};
      this.value = value || {};
      this.showSuccess = showSuccess === false ? false : true;
      this.ok_value = ok_value || 'OK';
      this.cancel_value = cancel_value || 'Batal';
      this.successValue = successValue || 'Sukses';
      this.showLoading = showLoading;
      this.loadingValue = loadingValue || 'Sedang Memproses';
      this.failedValue = failedValue || 'Gagal!';
      this.init();
    }
    ConfirmBox.prototype = {
      init: function () {
        this.instance = null;
        this.parent_ = null;
        this.status = null;
        this.create();
        this.layout();
        this.styling();
        this.actions();
      },
      create: function () {
        if (document.querySelector('#confirm-wrapper') === null) {
          const parent_ = document.createElement('div');
          parent_.id = 'confirm-parent';
          var wrapper = document.createElement('div');
          wrapper.id = 'confirm-wrapper';
          var html =
            "<div id='confirm-box'><h2 id='confirm-header-title'></h2><h2 id='confirm-header'></h2>";
          if (this.params.ok) {
            html += `<div id='confirm-buttons'><button id='confirm-ok'>${this.ok_value}</button>`;
          }
          if (this.params.cancel) {
            html += `<button type='button' id='confirm-cancel'>${this.cancel_value}</button></div>`;
          }
          html += '</div>';
          wrapper.innerHTML = html;
          parent_.appendChild(wrapper);
          this.element.appendChild(parent_);
        }
        this.instance = document.querySelector('#confirm-wrapper');
        this.parent_ = document.querySelector('#confirm-parent');
      },
      layout: function () {
        var wrapper = this.instance;
        var winHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        wrapper.style.height = winHeight + 'px';
      },

      styling: function () {
        let styleGeneral = document.createElement('style');
        let stylesGeneral = `
        #confirm-wrapper{width:100%;position:fixed;top:0;left:0;z-index:1000000;background:rgba(204,204,204,.6);display:none;transition:opacity .5s ease-in;height:1378px;display:flex;opacity:1;flex-direction:column;flex-wrap:nowrap;align-content:center;justify-content:center;align-items:center}#confirm-box{width:350px;background:var(--third-color);min-height:200px;border:3px solid var(--fourth-color);border-radius:1rem;COLOR:white;display:flex;flex-direction:column;align-content:center;flex-wrap:nowrap;align-items:center;justify-content:center;padding:0 1rem}#confirm-buttons{width:100%;text-align:center;bottom:0;left:0;padding-bottom:1em}#confirm-buttons button{display:inline-block;background:0 0;color:#fff;font-size:1em;font-family:Lato,Arial,sans-serif;font-weight:700;cursor:pointer;text-transform:uppercase;border:2px solid;margin:0 1em;padding:.6em 0;width:120px;border-radius:1rem}#confirm-header{text-align:center;font-size:1em;font-weight:400;text-transform:none;margin:2.5em 0 1.5em}#confirm-header:after{content:' ';display:block;width:1em;margin:.4em auto}#confirm-header-title{text-align:center;font-size:1rem;margin:1rem 0 0}.checkmark{width:100px;height:100px;border-radius:50%;display:block;stroke-width:2;stroke:white;stroke-miterlimit:10;box-shadow:inset 0 0 0 var(--third-color);animation:.4s ease-in-out .4s forwards fill,.3s ease-in-out .9s both scale;position:relative;top:5px;margin:0 auto}.checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2px;stroke-miterlimit:10;stroke:white;fill:var(--third-color);animation:.6s cubic-bezier(.65,0,.45,1) forwards stroke}circle.checkmark__circle2{stroke-dasharray:195;stroke-dashoffset:195;stroke-width:10px;stroke-miterlimit:6}.checkmark__check{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:.3s cubic-bezier(.65,0,.45,1) .8s forwards stroke}@keyframes stroke{100%{stroke-dashoffset:0}}.red-stroke{stroke:hsl(9,100%,50%)}.circular circle.path,.cross{stroke-linecap:round;opacity:1}.circular circle.path{stroke-dasharray:330;stroke-dashoffset:0;animation:1.5s ease-out draw-circle}@keyframes draw-circle{0%{stroke-dasharray:0,330;stroke-dashoffset:0;opacity:1}80%{stroke-dasharray:330,330;stroke-dashoffset:0;opacity:.4}100%{opacity:1}}.cross{stroke-width:10;position:absolute;top:54px;left:54px;width:40px;height:40px}.cross .first-line{animation:1.5s ease-out draw-first-line}.cross .second-line{animation:1.5s ease-out draw-second-line}@keyframes draw-first-line{0%{stroke-dasharray:0,56;stroke-dashoffset:1;opacity:1}50%{stroke-dasharray:0,0;stroke-dashoffset:1}80%{opacity:.4}100%{stroke-dasharray:56,0;stroke-dashoffset:70;opacity:1}}@keyframes draw-second-line{0%{stroke-dasharray:0,55;stroke-dashoffset:1;opacity:1}50%{stroke-dasharray:0,0;stroke-dashoffset:1}80%{opacity:.4}100%{stroke-dasharray:55,0;stroke-dashoffset:70;opacity:1}}
        `;
        styleGeneral.textContent = stylesGeneral;
        this.parent_.appendChild(styleGeneral);
      },

      show: function (element) {
        element.style.display = 'flex';
        element.style.opacity = 1;
        this.status = 'show';
      },
      hide: function (element) {
        element.style.opacity = 0;
        setTimeout(() => {
          this.parent_.remove();
        }, 1000);
        this.status = 'hide';
      },
      success: function (element) {
        var element_success = `<div id='confirm-box'><svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='margin: 1rem;'><circle class='checkmark__circle2' cx='26' cy='26' r='30' fill='none'></circle><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'></circle><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'></path></svg><h2 id='confirm-header-title' style='font-size: 1.5rem;margin: 1rem;'>${this.successValue}</h2><div id='confirm-buttons'><button id='confirm-ok'>OK</button></div></div>`;
        element.innerHTML = element_success;
        element.style.opacity = 1;
        this.status = 'success';
        const confirmButton = element.querySelector('#confirm-ok');
        confirmButton.addEventListener('click', () => {
          setTimeout(() => {
            this.hide(element);
          }, 500);
        });
      },
      loading(element) {
        const loadingHtml = `
              <div id='confirm-box'>
              <div class='loader'></div>
                  <h2 id='confirm-header-title'>${this.loadingValue}<span class="wait"></span></h2>
              </div>
              <style>.wait:after{content:' .';animation:2s steps(7,end) infinite dots}@keyframes dots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style>`;
        element.innerHTML = loadingHtml;
        element.style.opacity = 1;
        this.status = 'loading';
        setTimeout(() => {
          if (this.status == 'loading') {
            this.failed(element);
          }
        }, 15000);
      },
      failed(element, rincian) {
        rincian = rincian || false;
        const failedHtml = `
              <div id='confirm-box'>
                  <div style="position: relative;width: 150px;height: 150px;">
                      <svg class="circular red-stroke">
                          <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="10" stroke-miterlimit="10" />
                      </svg>
                      <svg class="cross red-stroke">
                          <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                              <path class="first-line" d="M634.087,300.805L673.361,261.53" fill="none" />
                          </g>
                          <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                              <path class="second-line" d="M634.087,300.805L673.361,261.53" />
                          </g>
                      </svg>
                  </div>
                  <h2 id='confirm-header-title' style="margin:1rem auto;">${this.failedValue}</h2>
                  <div id='confirm-buttons'>
                      <button id='confirm-ok'>OK</button>
                  </div>
              </div>`;
        element.innerHTML = failedHtml;
        element.style.opacity = 1;
        this.status = 'failed';
        if (rincian) {
          let that = this;

          const html_rincian = `<div id="rincian-buttons" style="width:100%;text-align:center;bottom:0;left:0;padding-bottom:1em"><button id="confirm-ok" style="display:inline-block;background:0 0;color:#fff;font-family:Lato,Arial,sans-serif;font-weight:400;cursor:pointer;text-transform:uppercase;border:2px solid;margin:0 1em;padding:.6em 0;width:150px;border-radius:1rem">Lihat Rincian</button></div>`;
          const divRincian = document.createElement('div');
          divRincian.innerHTML = html_rincian;
          const confirmBox = element.querySelector('#confirm-box');
          confirmBox.appendChild(divRincian);
          const rincianButton = divRincian.querySelector('#rincian-buttons');
          rincianButton.addEventListener('click', () => {
            showRincian();
          });
          function showRincian() {
            element.innerHTML = `<div id='confirm-box'><h2 id="confirm-header-title">Error<h2><h2 id="confirm-header">${rincian}</h2><div id="confirm-buttons"><button id="confirm-ok-rincian">Ok</button></div></div>`;
            const confirmButtonRincian = element.querySelector(
              '#confirm-ok-rincian'
            );
            confirmButtonRincian.addEventListener('click', () => {
              setTimeout(() => {
                that.hide(element);
              }, 100);
            });
          }
        }
        const confirmButton = element.querySelector('#confirm-ok');
        confirmButton.addEventListener('click', () => {
          setTimeout(() => {
            this.hide(element);
          }, 500);
        });
      },
      actions: function () {
        var self = this;
        if (
          self.value &&
          Array.isArray(self.value) &&
          self.title &&
          Array.isArray(self.title)
        ) {
          self.instance.querySelector('#confirm-header').innerHTML =
            self.value[0];
          self.instance.querySelector('#confirm-header-title').innerHTML =
            self.title[0];
          var currentIndex = 1;
          if (self.params.ok) {
            self.instance.querySelector('#confirm-ok').addEventListener(
              'click',
              function () {
                if (currentIndex < self.value.length) {
                  self.instance.querySelector('#confirm-header').innerHTML =
                    self.value[currentIndex];
                  self.instance.querySelector(
                    '#confirm-header-title'
                  ).innerHTML = self.title[currentIndex];
                  currentIndex++;
                } else {
                  if (self.showSuccess && !self.showLoading) {
                    self.success(self.instance);
                  } else if (self.showLoading) {
                    self.loading(self.instance);
                    async function showSuccess_s() {
                      let execute_promise = new Promise(function () {
                        self.params.ok();
                      });
                      result = await execute_promise;
                    }
                    showSuccess_s();
                  } else {
                    setTimeout(function () {
                      self.hide(self.instance);
                    }, 200);
                  }
                }
              },
              false
            );
          }
          if (self.params.cancel) {
            self.instance.querySelector('#confirm-cancel').addEventListener(
              'click',
              function () {
                self.hide(self.instance);
                setTimeout(function () {
                  self.params.cancel();
                }, 1000);
              },
              false
            );
          }
        } else {
          if (self.element.dataset.question) {
            self.instance.querySelector('#confirm-header').innerHTML =
              self.element.dataset.question;
          } else if (self.value && typeof self.value === 'string') {
            self.instance.querySelector('#confirm-header').innerHTML =
              self.value;
          }
          if (self.element.dataset.tooltip) {
            self.instance.querySelector('#confirm-header-title').innerHTML =
              self.element.dataset.tooltip;
          } else if (self.title && typeof self.title === 'string') {
            self.instance.querySelector('#confirm-header-title').innerHTML =
              self.title;
          }
          self.show(self.instance);
          if (self.params.ok) {
            self.instance.querySelector('#confirm-ok').addEventListener(
              'click',
              function () {
                self.success(self.instance);
                setTimeout(function () {
                  self.params.ok();
                }, 2000);
              },
              false
            );
          }
          if (self.params.cancel)
            self.instance.querySelector('#confirm-cancel').addEventListener(
              'click',
              function () {
                self.hide(self.instance);
                setTimeout(function () {
                  self.params.cancel();
                }, 1000);
              },
              false
            );
        }
      },
    };
    return ConfirmBox;
  }

  static formatDateToReadable(dateString) {
    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ];

    const date = new Date(dateString);
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${year} ${hours}.${minutes} WIB`;
  }

  static truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
}
export default Utils;
