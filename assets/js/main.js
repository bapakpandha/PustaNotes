function greetings() {
    function greet4() {
        var confBox = new ConfirmBox(element, {
            ok: function () {
                sessionStorage.setItem('hideGreet', false);
            }
        }, ["SELAMAT DATANG"], [`Jika anda Dicoding Reviewer untuk Submission Aplikasi Pengelolaan Data Menggunakan DOM dan Web Storage, ikuti petunjuk berikut:<br><br><span style='text-align:left;'> 1. Klik tombol SIGN IN di bagian Header navigasi<br><br>2. Masuk menggunakan username='dicoding', password='dicoding'<br><br>3. Klik tombol dicoding pada navigasi di Header untuk menuju ke RAK BUKU</span>`], showSuccess = false, ok_value = "OK");
    }
    function greet3() {
        var confBox = new ConfirmBox(element, {
            ok: function () {
                window.location = "https://bapakpandha.github.io/Pustabooks";
            },
            cancel: function () {
                modifyHrefAttribute();
            }
        }, ["CORS Policy Error Terdeteksi"], ["Kami mendeteksi anda membuka file index.html melalui file explorer langsung.<br><br>Jika anda tidak memiliki server App, Kami menganjurkan anda untuk menggunakan GITHUB PAGES. <br><br>atau anda bisa memilih mengganti HREF dengan file raw dari github (BETA: Pastikan anda terhubung internet)<br><br>NOTE: Jika anda memilih mengganti HREF, anda mungkin akan menerima notifikasi ini setiap kali anda mengeklik tautan."], showSuccess = false, ok_value = "Gunakan Github Pages", cancel_value = "Ganti HREF");
    }
    function greet2() {
        var confBox = new ConfirmBox(element, {
            ok: function () {
                sessionStorage.setItem('hideGreet', false);
            },
            cancel: function () {
            }
        }, ["Gunakan Server App", "Mengapa demikian?", "Mengapa demikian?"], ["Untuk experience yang optimal, gunakanlah Live Server atau NodeJS atau server yang lainnya sehingga anda membuka dokumen html ini melalui localhost atau 127.0.0.1", "Hal ini dikarenakan dokumen ini menggunakan fetch JSON dan fetch XHR untuk memuat datanya.", " Jika anda membuka file index.html dari file explorer langsung, maka anda mungkin akan mengalami gangguan pemuatan data akibat Kebijakan CORS yang membatasi browser anda."], showSuccess = false);
    }
    function greet1() {
        var confBox = new ConfirmBox(element, {
            ok: function () {
                greet2();
            },
            cancel: function () {
            }
        }, ["Selamat Datang", "Selamat Datang"], ["Ini adalah Website prototipe Pustabooks untuk submisi Tugas Proyek Akhir Dicoding", "Jika anda merupakan Team Reviewer dari DICODING, mohon bacalah baik-baik petunjuk berikut untuk mendapatkan pengalaman yang terbaik.", `Halaman Pentunjuk fitur-fitur dan Kriteria pengumpulan dapat anda lihat melalui <span style="color:blue;cursor:pointer;" onclick="window.open('readme.html', '_blank');">tautan ini</span>`], showSuccess = false);
    }
    var ConfirmBox = generalConfirmDialogBuilder();
    var element = document.querySelector("body");
    if (sessionStorage.getItem("hideGreet") === null) { greet4(); }
    return { greet1: greet1, greet2: greet2, greet3: greet3 }
}
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function fetchDataJson(callback) {
    fetch('assets/json/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Gagal Mengambil data data.json karena:', error);
            if (error.message.includes('Failed')) {
                if (window.data_json) {
                    callback(window.data_json)
                }
                else {
                    function loadScript(url) {
                        var head = document.head;
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        script.onreadystatechange = function () {
                            if (window.data_json) {
                                callback(window.data_json);
                            } else {
                                console.error('Fallback data not found in alternative_data.js');
                            }
                        };
                        script.onload = function () {
                            if (window.data_json) {
                                callback(window.data_json);
                            } else {
                                console.error('Fallback data not found in alternative_data.js');
                            }
                        };
                        head.appendChild(script);
                    }
                    loadScript('assets/json/alternative_data.js');
                }
            }
        });
}
function getHeader() {
    if (localStorage.getItem("loginInfo") === null) {
        var signInButton = `<a class="button" href="assets/pages/login.html"><li>Sign In</li></a>`
    } else {
        var loginInformationData = JSON.parse(localStorage.getItem("loginInfo"));
        var username = loginInformationData.username;
        var signInButton = `<a class="button" href="assets/pages/app.html"><li style=" display: flex; align-items: center; column-gap: 0.5rem; "><svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="1em" height="1em" viewBox="796 796 200 200" enable-background="new 796 796 200 200" xml:space="preserve"> <path d="M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z"/> </svg><span>${username}</span></li></a>`
    }
    var headerContent = `<div class="container-logo-header tautan" data-tautan="index.html"><img class="logo" src="assets/img/icon.png" alt=""><div class="logo_title">Pusta<span>books</span></div></div><div class="container-navbar"><nav class="navbar scale_font scale_width"><ul><a href="index.html"><li>Beranda</li></a><a href="assets/pages/app.html"><li>Daftar Buku</li></a><a href="index.html" disabled="disabled"><li>Kontak</li></a><a href="index.html" disabled="disabled"><li>Tentang Kami</li></a>${signInButton}</ul></nav></div><div class="menu"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
`;
    var headerSebelumrender = document.querySelector("header");
    headerSebelumrender.innerHTML = "";
    var header = document.querySelector('header');
    header.insertAdjacentHTML('beforeend', headerContent);
}
function getFooter() {
    var footerContent = `<div class="container full footer"> <div class="container-alamat"> <div class="container-footer-logo"> <img src="assets/img/icon.png" alt="logo"> <h3 class="logo_title">Pusta<span>Books</span></h3> </div> <div class="container-content-alamat"> <div> <h4>Jl. Kaliurang - Yogyakarta - Indonesia</h4> </div> <div> <h4>Telp. 0822 - 8125 - 7152</h4> </div> <div> <h4>customerservice@pustabooks.com</h4> </div> <div class="sosmed"> <a href="https://instagram.com/pustabooks" target="_blank" rel="noopener noreferrer"> <div><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg></div> </a><a href="https://facebook.com/pustabooks" target="_blank" aria-label="facebook" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg></div> </a><a href="https://twitter.com/pustabooks" target="_blank" aria-label="twitter" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"> </path> </svg></div> </a><a href="https://youtube.com/pustabooks" target="_blank" aria-label="youtube" rel="noopener noreferrer"> <div class=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"> </path> <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon> </svg></div> </a> </div> </div> </div> <div class="container-content-footer"> <div> <h3>Tentang Kami</h3> <a href="" disabled="disabled"> <div> <h4>Profil</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Informasi</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Kontak</h4> </div> </a> </div> <div> <h3>Layanan</h3> <a href="" disabled="disabled"> <div> <h4>Berita</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Forum</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Buku</h4> </div> </a> <a href="" disabled="disabled"> <div> <h4>Kemitraan</h4> </div> </a> </div> <div> <h3>Subscribe</h3> <a href="" disabled="disabled"> <div> <h4>Dapatkan Informasi terbaru dari kami</h4> </div> </a> <div class="subscribe-input"><input placeholder="Masukkan Email Anda" type="email"> <a href="" disabled="disabled"> <div><svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M17.0868 16.2626L7.04411 17.9359C6.92865 17.9552 6.8203 18.0045 6.72995 18.0789C6.63961 18.1534 6.57045 18.2503 6.52944 18.3599L3.06677 27.6372C2.73611 28.4906 3.62811 29.3039 4.44677 28.8932L28.4468 16.8932C28.6127 16.8101 28.7521 16.6824 28.8496 16.5246C28.9471 16.3667 28.9987 16.1848 28.9987 15.9992C28.9987 15.8137 28.9471 15.6318 28.8496 15.4739C28.7521 15.316 28.6127 15.1884 28.4468 15.1052L4.44677 3.10524C3.62811 2.6959 2.73611 3.50924 3.06677 4.36124L6.53077 13.6386C6.57178 13.7482 6.64094 13.8451 6.73129 13.9195C6.82163 13.994 6.92998 14.0433 7.04544 14.0626L17.0881 15.7359C17.1508 15.7459 17.2078 15.7779 17.249 15.8262C17.2901 15.8744 17.3127 15.9358 17.3127 15.9992C17.3127 16.0627 17.2901 16.124 17.249 16.1723C17.2078 16.2206 17.1508 16.2526 17.0881 16.2626H17.0868Z' fill='white' /> </svg> </div> </a> </div> </div> </div></div>`;
    var footer = document.querySelector('footer');
    footer.insertAdjacentHTML('beforeend', footerContent);
}
function addHeroElement(data) {
    var heroes = data.hero;
    var container = document.querySelector('.greet');
    heroes.forEach(function (item, index) {
        var element = `
        <div><h1>${item.title}</h1></div><div><article style="text-align: justify;">${item.subtitle}</article></div><div class="container-greet-button"><a class="button" href="assets/pages/app.html">Menuju Aplikasi <img src="assets/icons/arrow-open-right.svg" style="margin-left: 0.5rem; display: inline-block; width: 1rem; color: var(--main-color);" alt=""></a><a style="display: flex; align-items: center; " href="#" disabled="disabled"> <img src="assets/icons/play-button.svg" style="margin-right: 0.5rem; display: inline-block; width: 3rem; color: var(--first-color);" alt=""> Apa itu Pustabooks?</a></div>
        `;
        var element2 = `<img src="assets/img/Book-lover-bro.svg" alt="">`
        var temp = document.createElement('div');
        var temp2 = document.createElement('div');
        temp2.classList.add('container-hero');
        temp.classList.add('container-greet');
        temp.innerHTML = element.trim();
        temp2.innerHTML = element2.trim();
        container.insertBefore(temp2, container.firstChild);
        container.insertBefore(temp, container.firstChild);
    });
}
function addLayananElement(data) {
    var layanan = data.layanan;
    var listService = document.querySelector('.list-service');
    layanan.forEach(function (item, index) {
        var newElement = `
      <div class="item reveal"><img src="${item.logo}" alt="Logo"><h2>${item.judul}</h2><h3>${item.subjudul}</h3><a href="${item.linkRef}" title="${item.linkTitle}">${item.linkTitle}</a></div>
        `;
        var temp = document.createElement('div');
        temp.innerHTML = newElement.trim();
        var layananElement = temp.firstChild;
        listService.appendChild(layananElement);
    });
}
function addBukuPopulerElement(data) {
    var buku_populer = data.daftar_buku_populer;
    var listBook = document.querySelector('.list-book');
    if (buku_populer.length > 9) {
        var randomIndices = [];
        while (randomIndices.length < 9) {
            var randomIndex = Math.floor(Math.random() * buku_populer.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
        var buku_terpilih = randomIndices.map(index => buku_populer[index]);
    } else {
        var buku_terpilih = buku_populer;
    }
    buku_terpilih.forEach(function (item, index) {
        var newElement = `<div class="item scale_hover"><img src="${item.url_gambar}" alt="Logo"><h4>${item.judul}</h4><a href="${item.link_buku}" title="Lihat">Baca</a></div>`;
        var temp = document.createElement('div');
        temp.innerHTML = newElement.trim();
        var bukuElement = temp.firstChild;
        listBook.appendChild(bukuElement);
    });
    var arrowLeft = document.querySelector('.arrow-left');
    arrowLeft.innerHTML = '<svg fill="#0F1035" height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M18.7,20.3c0.4,0.4,0.4,1,0,1.4C18.5,21.9,18.3,22,18,22s-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4l5-5c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L14.4,16L18.7,20.3z"/></svg>';
    arrowLeft.addEventListener('click', function () {
        listBook.scrollLeft -= 250;
    });
    var arrowRight = document.querySelector('.arrow-right');
    arrowRight.innerHTML = '<svg fill="#0F1035" height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M19.7,16.7l-5,5C14.5,21.9,14.3,22,14,22 s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5C20.1,15.7,20.1,16.3,19.7,16.7z"/></svg>';
    arrowRight.addEventListener('click', function () {
        listBook.scrollLeft += 250;
    });
}
function addAboutUsSection(data) {
    var about_us = data.about_us;
    var aboutUsContainer = document.getElementById('about_us');
    aboutUsContainer.innerHTML = "";
    about_us.forEach(function (item, index) {
        var element = `<div class="container container-section"><div class=section-title><div class="button button-layanan"><h3>${item.title}</h3></div></div><div class=container-about_us><article><span class=pustabooks-logo><div class=logo_title>Pusta<span>books</span></div></span>${item.description}</article><aside><img alt=founder class=founder_img src=${item.img_src}></aside></div></div>`;
        var temp = document.createElement('div');
        temp.innerHTML = element.trim();
        var aboutUsElement = temp.firstChild;
        aboutUsContainer.appendChild(aboutUsElement);
    });
}
function changeFontSize(factor, element, property) {
    var viewportWidth = window.innerWidth;
    var scaleFactor = viewportWidth / 1440;
    if (property == 'font-size') {
        var rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        var fontSize = parseFloat(getComputedStyle(element).fontSize);
        var newFontSize = rootFontSize * factor * scaleFactor;
        var remNewFontSize = newFontSize / rootFontSize;
        element.style.fontSize = remNewFontSize + 'rem';
    } else if (property == 'width') {
        var newHeight = (scaleFactor * 10) + factor;
        element.style.width = newHeight + '%';
    }
}
function setAttributeIfNotNull(selector, property, value) {
    var elements = document.querySelectorAll(selector);
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
function manipulateClass(element, action, className) {
    var targetElement = document.querySelector(element);
    if (targetElement) {
        if (action === 'addClass') {
            targetElement.classList.add(className);
        } else if (action === 'removeClass') {
            targetElement.classList.remove(className);
        }
    }
}
function checkWindowWidth() {
    if (window.matchMedia('(min-width: 992px) and (max-width: 1200px)').matches) {
        setAttributeIfNotNull('.header', 'style', 'flex-direction: column; height: auto;');
        setAttributeIfNotNull('.header .container-navbar', 'style', 'justify-content: center;');
        setAttributeIfNotNull('main .container-greet-button', 'style', 'font-size: 1rem;');
        setAttributeIfNotNull('.header .navbar', 'style', 'width: 100%;');
        setAttributeIfNotNull('.list-service .item', 'style', 'flex: 0 0 40%; margin: 1.5rem;');
        setAttributeIfNotNull('.container-login .login-form', 'style', 'margin: 5rem 0;');
    } else {
        setAttributeIfNotNull('.header', 'style', 'flex-direction: ;');
        setAttributeIfNotNull('.header .container-navbar', 'style', 'justify-content: ;');
        setAttributeIfNotNull('.header .navbar', 'style', 'width: ;');
        setAttributeIfNotNull('main .container-greet-button', 'style', 'font-size: ;');
        setAttributeIfNotNull('.list-service .item', 'style', 'flex: ; margin: ;');
        setAttributeIfNotNull('.container-login .login-form', 'style', 'margin: ;');
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        setAttributeIfNotNull('.menu', 'style', 'display: block;');
        manipulateClass('.header', 'addClass', 'mobile');
        manipulateClass('.greet', 'addClass', 'mobile');
        manipulateClass('.container-about_us', 'addClass', 'mobile');
        manipulateClass('.footer', 'addClass', 'mobile');
        manipulateClass('.container-login', 'addClass', 'mobile');
        setAttributeIfNotNull('.container-login .navigation>a>.content_text', 'text', '');
    } else {
        setAttributeIfNotNull('.menu', 'style', 'display: none;');
        manipulateClass('.header', 'removeClass', 'mobile');
        manipulateClass('.greet', 'removeClass', 'mobile');
        manipulateClass('.container-about_us', 'removeClass', 'mobile');
        manipulateClass('.footer', 'removeClass', 'mobile');
        manipulateClass('.container-login', 'removeClass', 'mobile');
        setAttributeIfNotNull('.container-login .navigation>a>.content_text', 'text', 'Kembali Ke Beranda');
    }
}
function generalConfirmDialogBuilder() {
    function ConfirmBox(element, params, title, value, showSuccess, ok_value, cancel_value) {
        this.element = element;
        this.params = params || {};
        this.params.ok = params.ok;
        this.params.cancel = params.cancel;
        this.title = title || {};
        this.value = value || {};
        this.showSuccess = (showSuccess === false) ? false : true;
        this.ok_value = ok_value || "OK"
        this.cancel_value = cancel_value || "Batal"
        this.init();
    }
    ConfirmBox.prototype = {
        init: function () {
            this.instance = null;
            this.create();
            this.layout();
            this.actions();
        },
        create: function () {
            if (document.querySelector("#confirm-wrapper") === null) {
                var wrapper = document.createElement("div");
                wrapper.id = "confirm-wrapper";
                var html = "<div id='confirm-box'><h2 id='confirm-header-title'></h2><h2 id='confirm-header'></h2>";
                if (this.params.ok) { html += `<div id='confirm-buttons'><button id='confirm-ok'>${this.ok_value}</button>`; }
                if (this.params.cancel) { html += `<button type='button' id='confirm-cancel'>${this.cancel_value}</button></div>`; }
                html += "</div>";
                wrapper.innerHTML = html;
                document.body.appendChild(wrapper);
            }
            this.instance = document.querySelector("#confirm-wrapper");
        },
        layout: function () {
            var wrapper = this.instance;
            var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            wrapper.style.height = winHeight + "px";
        },
        show: function (element) {
            element.style.display = "flex";
            element.style.opacity = 1;
        },
        hide: function (element) {
            element.style.opacity = 0;
            setTimeout(function () {
                element.remove();
            }, 1000);
        },
        success: function (element) {
            var element_success = "<div id='confirm-box'><svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='margin: 1rem;'><circle class='checkmark__circle2' cx='26' cy='26' r='30' fill='none'></circle><circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none'></circle><path class='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'></path></svg><h2 id='confirm-header-title' style='font-size: 1.5rem;margin: 1rem;'>Sukses</h2><div id='confirm-buttons'><button id='confirm-ok'>OK</button></div></div>";
            element.innerHTML = element_success;
            element.style.opacity = 1;
            setTimeout(function () {
                element.remove();
            }, 2000);
        },
        actions: function () {
            var self = this;
            if (self.value && Array.isArray(self.value) && self.title && Array.isArray(self.title)) {
                self.instance.querySelector("#confirm-header").innerHTML = self.value[0];
                self.instance.querySelector("#confirm-header-title").innerHTML = self.title[0];
                var currentIndex = 1;
                if (self.params.ok) {
                    self.instance.querySelector("#confirm-ok").
                        addEventListener("click", function () {
                            if (currentIndex < self.value.length) {
                                self.instance.querySelector("#confirm-header").innerHTML = self.value[currentIndex];
                                self.instance.querySelector("#confirm-header-title").innerHTML = self.title[currentIndex];
                                currentIndex++;
                            }
                            else {
                                if (self.showSuccess) {
                                    self.success(self.instance);
                                } else {
                                    setTimeout(function () {
                                        self.hide(self.instance);
                                    }, 200);
                                }
                                setTimeout(function () {
                                    self.params.ok();
                                }, 2000);
                            }
                        }, false);
                }
                if (self.params.cancel) self.instance.querySelector("#confirm-cancel").
                    addEventListener("click", function () {
                        self.hide(self.instance);
                        setTimeout(function () {
                            self.params.cancel();
                        }, 1000);
                    }, false);
            }
            else {
                if (self.element.dataset.question) { self.instance.querySelector("#confirm-header").innerHTML = self.element.dataset.question; }
                else if (self.value && typeof (self.value) === "string") { self.instance.querySelector("#confirm-header").innerHTML = self.value; }
                if (self.element.dataset.tooltip) { self.instance.querySelector("#confirm-header-title").innerHTML = self.element.dataset.tooltip; }
                else if (self.title && typeof (self.title) === "string") { self.instance.querySelector("#confirm-header-title").innerHTML = self.title; }
                self.show(self.instance);
                if (self.params.ok) {
                    self.instance.querySelector("#confirm-ok").
                        addEventListener("click", function () {
                            self.success(self.instance);
                            setTimeout(function () {
                                self.params.ok();
                            }, 2000);
                        }, false);
                }
                if (self.params.cancel) self.instance.querySelector("#confirm-cancel").
                    addEventListener("click", function () {
                        self.hide(self.instance);
                        setTimeout(function () {
                            self.params.cancel();
                        }, 1000);
                    }, false);
            }
        }
    }
    return ConfirmBox;
}
function SignInFunction() {
    function loginHint() {
        var ConfirmBox = generalConfirmDialogBuilder();
        var confBox = new ConfirmBox(document.querySelector("body"), {
            ok: function () {
                localStorage.setItem("everSeenLoginPage", true)
            }
        }, ["Selamat Datang Di Halaman Login"], ["Jika anda merupakan Tim Dicoding Review, silakan masukkan:<br><br><strong>Username: Dicoding</strong><br><strong>Password: dicoding</strong>"], showSuccess = false, ok_value = "OK");
    }
    if (localStorage.getItem("everSeenLoginPage") === null) {
        sleep(1500).then(() => {
            loginHint();
        });
    }
    if (localStorage.getItem('loginInfo') === null) {
        let loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let username = document.getElementById("username");
            let password = document.getElementById("password");
            if (username.value == "" || password.value == "") {
                alert("Masukkan Username atau Password");
            } else if (username.value.length >= 10) {
                alert("Maksimal username 8 karakter");
            } else {
                alert("Berhasil Log in!");
                var IsSignedIn = true;
                var loginInformation = { "isSignedIn": IsSignedIn, "username": username.value, "password": password.value };
                localStorage.setItem('loginInfo', JSON.stringify(loginInformation));
                window.location.reload();
            }
        });
    }
}
function modifyHrefAttribute() {
    var elements_login = document.querySelectorAll('[href="assets/pages/login.html"]');
    elements_login.forEach(function (element) {
        element.setAttribute('href', 'https://raw.githubusercontent.com/bapakpandha/bapakpandha.github.io/main/MyProject/Pustabooks/login.html');
    });
    var elements_app = document.querySelectorAll('[href="assets/pages/app.html"]');
    elements_app.forEach(function (element) {
        element.setAttribute('href', 'https://raw.githubusercontent.com/bapakpandha/bapakpandha.github.io/main/MyProject/Pustabooks/app.html');
    });
    var elements_index = document.querySelectorAll('[href="index.html"]');
    elements_index.forEach(function (element) {
        element.setAttribute('href', 'https://raw.githubusercontent.com/bapakpandha/bapakpandha.github.io/main/MyProject/Pustabooks/index.html');
    });
}
function fetchBookData(callback) {
    fetch('assets/json/book_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Gagal melakukan fetch operation:', error);
            if (error.message.includes('Failed')) {
                if (window.book_data_json) {
                    callback(window.book_data_json)
                }
                else {
                    function loadScript(url) {
                        var head = document.head;
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        script.onreadystatechange = function () {
                            if (window.book_data_json) {
                                callback(window.book_data_json);
                            } else {
                                console.error('Fallback data not found in alternative_data.js');
                            }
                        };
                        script.onload = function () {
                            if (window.book_data_json) {
                                callback(window.book_data_json);
                            } else {
                                console.error('Fallback data not found in alternative_data.js');
                            }
                        };
                        head.appendChild(script);
                    }
                    loadScript('assets/json/alternative_data.js');
                }
            }
        });
}
function convertDataToElement(data) {
    const currentActiveElement = document.querySelector('main .rak_buku.tabs div.active');
    const tabContent = currentActiveElement.textContent.trim();
    var element_books = "";
    var button_tambahkan = `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
    var button_markAsRead = `<svg fill="#00000" width="1em" height="1em" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0M854.344 1157.975 583.059 886.69l-79.85 79.85 351.135 351.133L1454.4 717.617l-79.85-79.85-520.206 520.208Z" fill-rule="evenodd"/></svg>`
    var button_takeFromBookshelf = `<svg viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"> <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path> </svg>`
    var button_markAsUnread = `<svg width="1em" height="1em" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_book_formula_logical_24_filled" fill="#212121" fill-rule="nonzero"> <path d="M18,2 C19.3807,2 20.5,3.11929 20.5,4.5 L20.5,18.75 C20.5,19.1642 20.1642,19.5 19.75,19.5 L5.5,19.5 C5.5,20.0523 5.94772,20.5 6.5,20.5 L19.75,20.5 C20.1642,20.5 20.5,20.8358 20.5,21.25 C20.5,21.6642 20.1642,22 19.75,22 L6.5,22 C5.11929,22 4,20.8807 4,19.5 L4,4.5 C4,3.11929 5.11929,2 6.5,2 L18,2 Z M12.25,13.5 C11.6977,13.5 11.25,13.9477 11.25,14.5 C11.25,15.0523 11.6977,15.5 12.25,15.5 C12.8023,15.5 13.25,15.0523 13.25,14.5 C13.25,13.9477 12.8023,13.5 12.25,13.5 Z M12.513,5.7501 C11.1982,5.72727 10.3825,6.17582 9.92848,6.78906 C9.71565,7.07652 9.60973,7.36492 9.55665,7.58186 C9.52996,7.69092 9.51591,7.78477 9.50846,7.8559 C9.50473,7.89159 9.50262,7.92198 9.50144,7.94618 C9.50072,7.96084 9.50032,7.9755 9.50006,7.99017 L9.50018311,8.00733509 C9.50292969,8.0898523 9.546875,8.74999 10.25,8.74999 C10.6584,8.74999 10.9905,8.42363 10.9998,8.01752 L10.9998,8.01752 C11.0017,7.99908 11.0052,7.973 11.0137,7.93838 C11.0309,7.86797 11.0656,7.77404 11.134,7.68162 C11.2425,7.53509 11.5518,7.23364 12.487,7.24988 C13.0371,7.25943 13.4439,7.48604 13.6659,7.76153 C13.8789,8.02596 13.9483,8.35977 13.8036,8.72145 C13.6868,9.01346 13.4292,9.16137 12.8875,9.40049 L12.8875,9.40049 L12.8491,9.4174 C12.6276,9.51483 12.3134,9.65303 12.0633,9.85345 C11.752,10.1029 11.5,10.4769 11.5,11 L11.5,11 L11.5,11.7501 C11.5001,12.1643 11.8359,12.5 12.2501,12.5 C12.6643,12.4999 13.0001,12.1634 13,11.7492 L13,11.7492 L13,11.0251 C13.0813,10.9599 13.2147,10.8957 13.4932,10.7728 L13.4932,10.7728 L13.5442,10.7503 C14.0149,10.5437 14.8342,10.1839 15.1964,9.27853 C15.5517,8.3902 15.371,7.48704 14.834,6.82047 C14.3059,6.16497 13.4627,5.76659 12.513,5.7501 Z" id="🎨-Color"> </path> </g> </g> </g></svg>`
    var button_middleDefault = `<svg viewBox="0 0 1024 1024" focusable="false" data-icon="retweet" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0011.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 00-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 00-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"></path></svg>`
    var button_history = `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.01112 11.5747L6.29288 10.2929C6.68341 9.90236 7.31657 9.90236 7.7071 10.2929C8.09762 10.6834 8.09762 11.3166 7.7071 11.7071L4.7071 14.7071C4.51956 14.8946 4.26521 15 3.99999 15C3.73477 15 3.48042 14.8946 3.29288 14.7071L0.292884 11.7071C-0.0976406 11.3166 -0.0976406 10.6834 0.292884 10.2929C0.683408 9.90236 1.31657 9.90236 1.7071 10.2929L3.0081 11.5939C3.22117 6.25933 7.61317 2 13 2C18.5229 2 23 6.47715 23 12C23 17.5228 18.5229 22 13 22C9.85817 22 7.05429 20.5499 5.22263 18.2864C4.87522 17.8571 4.94163 17.2274 5.37096 16.88C5.80028 16.5326 6.42996 16.599 6.77737 17.0283C8.24562 18.8427 10.4873 20 13 20C17.4183 20 21 16.4183 21 12C21 7.58172 17.4183 4 13 4C8.72441 4 5.23221 7.35412 5.01112 11.5747ZM13 5C13.5523 5 14 5.44772 14 6V11.5858L16.7071 14.2929C17.0976 14.6834 17.0976 15.3166 16.7071 15.7071C16.3166 16.0976 15.6834 16.0976 15.2929 15.7071L12.2929 12.7071C12.1054 12.5196 12 12.2652 12 12V6C12 5.44772 12.4477 5 13 5Z" fill="#000000"></path> </g></svg>`
    switch (tabContent) {
        case 'Eksplor':
            var books = data.main;
            var title_tab = "Cari Buku Yang tersedia";
            var tombol_eksekusi = button_tambahkan;
            var tombol_eksekusi2 = button_history;
            var class_of_tombol_eksekusi = "button-puttobookshelf";
            var class_of_tombol_eksekusi2 = "disabled";
            var data_tooltip = "Tambahkan ke Rak Sedang dibaca";
            var data_tooltip2 = "Masukkan ke Rak Riwayat&#13;&#10;(Untuk sementara fitur ini belum tersedia)";
            var data_question = "Apakah anda yakin ingin menambahkan buku ";
            var data_question2 = " ke dalam Rak Buku Sedang Dibaca?";
            var data_question3 = "Apakah anda yakin ingin menambahkan buku ";
            var data_question4 = " ke dalam Rak Riwayat?";
            break;
        case 'Sedang dibaca':
            var books = data.main.filter(function (book) {
                return book.isInBookshelf === true && book.isComplete === false;
            });
            var title_tab = "Buku Yang Sedang Dibaca";
            var tombol_eksekusi = button_markAsRead;
            var tombol_eksekusi2 = button_middleDefault;
            var class_of_tombol_eksekusi = "button-putToComplete"
            var data_tooltip = "Tandai Sudah Selesai Dibaca";
            var data_question = "Apakah anda yakin ingin menandai buku ";
            var data_question2 = " sudah selesai dibaca?";
            var class_of_tombol_eksekusi2 = "button-takeFromBookshelf";
            var data_tooltip2 = "Kembalikan buku ke Rak Eksplor";
            var data_question3 = " Apakah anda yakin ingin membatalkan buku ";
            var data_question4 = " dari rak buku Sedang dibaca?<br><br>Setelah ini buku akan kembali ke dalam rak <strong>Eksplor</strong>";
            break;
        case 'Selesai dibaca':
            var books = data.main.filter(function (book) {
                return book.isComplete === true && book.isInBookshelf === true;
            });
            var title_tab = "Buku Yang Selesai Dibaca";
            var tombol_eksekusi = button_history;
            var tombol_eksekusi2 = button_markAsUnread;
            var class_of_tombol_eksekusi = "button-takeFromBookshelf"
            var data_tooltip = "Masukkan buku ke rak Riwayat";
            var data_question = "Apakah anda yakin ingin menghapus buku ";
            var data_question2 = " dari Rak Buku Selesai dibaca?<br><br>Setelah ini buku akan masuk ke dalam rak <strong>Riwayat</strong>";
            var class_of_tombol_eksekusi2 = "button-markAsUnread";
            var data_tooltip2 = "Tandai Buku belum selesai dibaca";
            var data_question3 = " Apakah anda yakin menandai buku ";
            var data_question4 = " belum selesai dibaca?<br><br>Setelah ini buku akan kembali ke dalam rak <strong>Sedang Dibaca</strong>";
            break;
        case 'Riwayat':
            var books = data.main.filter(function (book) {
                return book.isComplete === true && book.isInBookshelf === false;
            });
            var title_tab = "Riwayat Buku Yang DIbaca";
            var tombol_eksekusi = button_takeFromBookshelf;
            var tombol_eksekusi2 = button_markAsRead;
            var class_of_tombol_eksekusi = "button-markAsUnread"
            var data_tooltip = "Hapus dari daftar Riwayat";
            var data_question = "Apakah anda yakin ingin menghapus buku ";
            var data_question2 = " dari daftar riwayat?";
            var class_of_tombol_eksekusi2 = "button-puttobookshelf";
            var data_tooltip2 = "Kembalikan buku ke rak Selesai Dibaca";
            var data_question3 = " Apakah anda yakin mengembalikan buku ";
            var data_question4 = " pada rak selesai dibaca?<br><br>Setelah ini buku akan kembali ke dalam rak <strong>Selesai Dibaca</strong>";
            break;
        default:
            var books = data.main;
            var title_tab = "Daftar Buku yang Tersedia";
            break;
    }
    books.forEach(function (item) {
        var element_book = ` <div class="item" data-id="${item.id}"> <div><img src="${item.link_cover}" alt="cover" onerror="this.onerror=null; this.src='assets/img/Default_cover_image.jpg'"></div> <h3>${item.title}</h3> <h5>${item.author}</h5> <h5>${item.year}</h5> <div> <ul class=""> <li style="width: 33.3333%;" class="${class_of_tombol_eksekusi} tooltip confirm" data-id="${item.id}" data-tooltip="${data_tooltip}" data-position="top" data-question="${data_question} ${item.title} ${data_question2}"> <span><span role="img" aria-label="delete" tabindex="-1" class="">${tombol_eksekusi}</span></span> </li> <li style="width: 33.3333%;" class="${class_of_tombol_eksekusi2} tooltip confirm" data-id="${item.id}" data-tooltip="${data_tooltip2}" data-position="top" data-question="${data_question3} ${item.title} ${data_question4}"> <span><span role="img" aria-label="retweet" tabindex="-1">${tombol_eksekusi2}</span></span> </li> <li style="width: 33.3333%;" data-tooltip="Hapus Buku Dari Database Pustabooks" data-position="top" class="button-deleteBook tooltip confirm" data-id="${item.id}" data-question="Apakah Anda yakin ingin menghapus buku ${item.title} dari database Pustabooks? Buku yang sudah dihapus tidak dapat dikembalikan kecuali anda menambahkannya ulang."> <span><span role="img" aria-label="share-alt" tabindex="-1" class=""> <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30958 3.54424C7.06741 2.56989 8.23263 2 9.46699 2H20.9997C21.8359 2 22.6103 2.37473 23.1614 2.99465C23.709 3.61073 23.9997 4.42358 23.9997 5.25V18.75C23.9997 19.5764 23.709 20.3893 23.1614 21.0054C22.6103 21.6253 21.8359 22 20.9997 22H9.46699C8.23263 22 7.06741 21.4301 6.30958 20.4558L0.687897 13.2279C0.126171 12.5057 0.126169 11.4943 0.687897 10.7721L6.30958 3.54424ZM10.2498 7.04289C10.6403 6.65237 11.2734 6.65237 11.664 7.04289L14.4924 9.87132L17.3208 7.04289C17.7113 6.65237 18.3445 6.65237 18.735 7.04289L19.4421 7.75C19.8327 8.14052 19.8327 8.77369 19.4421 9.16421L16.6137 11.9926L19.4421 14.8211C19.8327 15.2116 19.8327 15.8448 19.4421 16.2353L18.735 16.9424C18.3445 17.3329 17.7113 17.3329 17.3208 16.9424L14.4924 14.114L11.664 16.9424C11.2734 17.3329 10.6403 17.3329 10.2498 16.9424L9.54265 16.2353C9.15212 15.8448 9.15212 15.2116 9.54265 14.8211L12.3711 11.9926L9.54265 9.16421C9.15212 8.77369 9.15212 8.14052 9.54265 7.75L10.2498 7.04289Z" fill="#000000"></path> </g> </svg> </span></span> </li> </ul> </div></div> `;
        element_books += element_book;
    });
    var obj = { title_tab: title_tab, element_books: element_books };
    return obj
}
function writeBookData(data) {
    var convertedData = convertDataToElement(data);
    var addNewBook = `<div class=item data-id=12 id="tambahBuku" onclick="addNewBookHandler().showModal()"><div style="border:5px dotted;height:90%;display:flex;align-items:center;justify-content:center"><svg height=50% viewBox="0 0 24 24"width=50% xmlns=http://www.w3.org/2000/svg><title></title><g id=Complete><g id=add-2 data-name=add><g><line fill=none stroke=#000000 stroke-linecap=round stroke-linejoin=round stroke-width=2 x1=12 x2=12 y1=19 y2=5></line><line fill=none stroke=#000000 stroke-linecap=round stroke-linejoin=round stroke-width=2 x1=5 x2=19 y1=12 y2=12></line></g></g></g></svg></div><h3 style=text-align:center>Tambahkan Buku Baru Custom</h3></div>`;
    var element_books = convertedData.element_books;
    var title_tab = convertedData.title_tab;
    element_books += addNewBook;
    var element = `<div class=container><div class=title><h2>${title_tab}</h2></div><div id=search><form action=javascript:void(0);><fieldset class=clearfix style=display:flex;flex-direction:row><input type=search value="Cari Buku disini"name=search onblur='""==this.value&&(this.value="Cari Buku disini")'onfocus='"Cari Buku disini"==this.value&&(this.value="")'> <input type=submit value=Search class=button name=search_submit> <input type=submit value=Reset class=button onclick=writeBookDataExec()></fieldset></form></div><div class=content>${element_books}</div></div>`;
    var isiBukuElement = document.querySelector('.isi_buku');
    if (isiBukuElement) {
        isiBukuElement.innerHTML = element;
    }
    generalSearchHandler();
}
function writeBookDataExec() {
    GeneralLocalStorageHandler();
    if (localStorage.getItem('book_data') === null) {
        fetchBookData(function (data) {
            writeBookData(data);
            GeneralLocalStorageHandler.saveDataToStorage(data);
        });
    } else {
        var jsonDataString = GeneralLocalStorageHandler.loadDataFromStorage();
        writeBookData(jsonDataString);
    }
    GeneralButtonBookHandler();
}
function addNewBookHandler() {
    function showModal() {
        if (document.querySelector(".addNewBook") === null) {
            var doc = document.createElement('div');
            doc.classList.add("addNewBook");
            var element = `<div class=demo-page><main class=demo-page-content><section><h1><svg class="feather feather-align-justify"fill=none height=24 style=display:block;margin:auto viewBox="0 0 24 24"width=24 xmlns=http://www.w3.org/2000/svg><g id=SVGRepo_bgCarrier stroke-width=0></g><g id=SVGRepo_tracerCarrier stroke-linecap=round stroke-linejoin=round></g><g id=SVGRepo_iconCarrier><rect fill=white height=24 width=24></rect><path d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"stroke=#000000 stroke-linejoin=round></path><path d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"stroke=#000000 stroke-linejoin=round></path></g></svg> Tambahkan Buku Baru</h1><p>Masukkan Detail Buku dibawah<div class=nice-form-group><label>Judul Buku</label> <input type="text" id=title placeholder="Contoh: The Da Vinci Code"></div><div class=nice-form-group><label>Penulis/Author</label> <input type="text" id="author" placeholder="Contoh: Dan Brown"></div><div class="nice-form-group"><label>Tahun Terbit</label> <input id="year" placeholder="Contoh: 2016"type=number max=2099 min=1900 step=1 value=2016></div><div class=nice-form-group><label>Tautan Gambar Cover (Opsional)</label> <input id=url_cover placeholder="Contoh: https://i.imgur.com/kTw4qFq.jpeg"type=url style=text-transform:lowercase></div><div class=nice-form-group><label>Deskripsi Buku (Opsional)</label> <textarea cols=10 id=book_summary name=Text1 rows=3></textarea></div><div class=addNewBookWrapper><div class=addNewBook_Button onclick=addNewBookHandler().submitBook() id=submitAddNewBook>Tambahkan Buku</div><div class="addNewBook_Button red"onclick=addNewBookHandler().hideModal()>Cancel</div></div></section></main></div><style>.addNewBook{width:100%;position:fixed;top:0;left:0;z-index:1000000;background:rgba(204,204,204,.6);transition:opacity .5s ease-in;opacity:1;height:100%;text-transform:none}.addNewBook main,.addNewBook section{margin-top:0}.addNewBookWrapper{display:flex;justify-content:space-between}.addNewBook .demo-page{margin:0 auto;display:-webkit-flex;display:flex;max-width:55em;justify-content:center;align-items:center;height:100%}.addNewBook .demo-page .demo-page-content{width:calc(100% - 5em)}.addNewBook .demo-page .demo-page-content{padding:2em 1em;max-width:100%}.addNewBook section{background:#fff;padding:2em;border-radius:.75rem;line-height:1.6;overflow:hidden;margin-bottom:2rem;position:relative;font-size:.875rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.addNewBook section h1{font-weight:500;font-size:1.25rem;color:#000;margin-bottom:.75rem;text-align:center}.addNewBook section p{margin:.5rem 0 1.5rem}.addNewBook .nice-form-group{--nf-input-size:1rem;--nf-input-font-size:calc(var(--nf-input-size)*0.875);--nf-small-font-size:calc(var(--nf-input-size)*0.875);--nf-input-font-family:inherit;--nf-label-font-family:inherit;--nf-input-color:#20242f;--nf-input-border-radius:0.25rem;--nf-input-placeholder-color:#929292;--nf-input-border-color:#c0c4c9;--nf-input-border-width:1px;--nf-input-border-style:solid;--nf-input-border-bottom-width:2px;--nf-input-focus-border-color:#3b4ce2;--nf-input-background-color:#f9fafb;--nf-invalid-input-border-color:var(--nf-input-border-color);--nf-invalid-input-background-color:var(--nf-input-background-color);--nf-invalid-input-color:var(--nf-input-color);--nf-valid-input-border-color:var(--nf-input-border-color);--nf-valid-input-background-color:var(--nf-input-background-color);--nf-valid-input-color:inherit;--nf-invalid-input-border-bottom-color:red;--nf-valid-input-border-bottom-color:green;--nf-label-font-size:var(--nf-small-font-size);--nf-label-color:#374151;--nf-label-font-weight:500;--nf-slider-track-background:#dfdfdf;--nf-slider-track-height:0.25rem;--nf-slider-thumb-size:calc(var(--nf-slider-track-height)*4);--nf-slider-track-border-radius:var(--nf-slider-track-height);--nf-slider-thumb-border-width:2px;--nf-slider-thumb-border-focus-width:1px;--nf-slider-thumb-border-color:#fff;--nf-slider-thumb-background:var(--nf-input-focus-border-color);display:block;margin-top:calc(var(--nf-input-size)*1.5);line-height:1;white-space:nowrap;--switch-orb-size:var(--nf-input-size);--switch-orb-offset:calc(var(--nf-input-border-width)*2);--switch-width:calc(var(--nf-input-size)*2.5);--switch-height:calc(var(--nf-input-size)*1.25 + var(--switch-orb-offset))}.addNewBook .nice-form-group>label{font-weight:var(--nf-label-font-weight);display:block;color:var(--nf-label-color);font-size:var(--nf-label-font-size);font-family:var(--nf-label-font-family);margin-bottom:calc(var(--nf-input-size)/2);white-space:normal}.addNewBook .nice-form-group>input[type=checkbox],.nice-form-group>input[type=date],.nice-form-group>input[type=email],.nice-form-group>input[type=month],.nice-form-group>input[type=number],.nice-form-group>input[type=password],.nice-form-group>input[type=radio],.nice-form-group>input[type=search],.nice-form-group>input[type=tel],.nice-form-group>input[type=text],.nice-form-group>input[type=time],.nice-form-group>input[type=url],.nice-form-group>input[type=week],.nice-form-group>select,.nice-form-group>textarea{background:var(--nf-input-background-color);font-family:inherit;font-size:var(--nf-input-font-size);border-bottom-width:var(--nf-input-border-width);font-family:var(--nf-input-font-family);box-shadow:none;border-radius:var(--nf-input-border-radius);border:var(--nf-input-border-width) var(--nf-input-border-style) var(--nf-input-border-color);border-bottom:var(--nf-input-border-bottom-width) var(--nf-input-border-style) var(--nf-input-border-color);color:var(--nf-input-color);width:100%;padding:calc(var(--nf-input-size)*.75);height:calc(var(--nf-input-size)*2.75);line-height:normal;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all .15s ease-out;--icon-padding:calc(var(--nf-input-size)*2.25);--icon-background-offset:calc(var(--nf-input-size)*0.75)}.addNewBook .addNewBook_Button{margin-top:2rem;display:inline-block;padding:.5em 1em;border-radius:5px;font-size:.875rem;background:var(--third-color);top:1em;right:1em;color:#fff;font-weight:500;-webkit-user-select:none;user-select:none;cursor:pointer}.addNewBook .addNewBook_Button.red{background:red}</style>`;
            doc.innerHTML = element;
            document.body.appendChild(doc);
        }
    }
    function hideModal() {
        const modal = document.querySelector(".addNewBook");
        if (modal) {
            modal.remove();
        }
    }
    function submitBook() {
        const modal = document.querySelector('.addNewBook');
        const title = modal.querySelector('#title').value;
        const author = modal.querySelector('#author').value;
        const year = modal.querySelector('#year').value;
        const link_cover = modal.querySelector('#url_cover').value;
        const summary = modal.querySelector('#book_summary').value;
        if (!title || !author || !year) {
            var ConfirmBox = generalConfirmDialogBuilder();
            var confBox = new ConfirmBox(document.body, {
                ok: function () {
                    return
                }
            }, [`Data Buku Tidak Lengkap!`], [`Mohon tambahkan setidaknya Judul, Nama Penulis, dan Tahun terbit!`], showSuccess = false, ok_value = "Ok");
        } else {
            let bookData = JSON.parse(localStorage.getItem("book_data"));
            if (!bookData) {
                bookData = { main: [] };
            }
            let nextId = 1;
            if (bookData.main.length > 0) {
                nextId = bookData.main[bookData.main.length - 1].id + 1;
            }
            const book_data = {
                "id": nextId,
                "title": title,
                "author": author,
                "year": Number(year),
                "isComplete": false,
                "link_cover": link_cover,
                "isInBookshelf": false,
                "summary": summary
            }
            var ConfirmBox = generalConfirmDialogBuilder();
            var confBox = new ConfirmBox(modal, {
                ok: function () {
                    bookData.main.push(book_data);
                    localStorage.setItem("book_data", JSON.stringify(bookData));
                    hideModal();
                    writeBookDataExec();
                },
                cancel: function () {
                }
            }, [`Tambahkan Buku?`], [`Apakah Anda yakin ingin menambahkan buku ${title} ke dalam katalog Buku?`], showSuccess = true, ok_value = "Ok", cancel_value = "Cancel");
        }
    }
    return { showModal: showModal, hideModal: hideModal, submitBook: submitBook }
}
function generalSearchHandler() {
    function handleSearch(searchString) {
        var jsonDataString = GeneralLocalStorageHandler.loadDataFromStorage();
        let filteredBookName = jsonDataString.main.filter(book => book.title.toLowerCase().includes(searchString.toLowerCase()));
        var newBookData = { "main": filteredBookName };
        var elements_books = convertDataToElement(newBookData).element_books;
        let konten = document.querySelector('.isi_buku .content');
        if (konten) {
            konten.innerHTML = elements_books;
            GeneralButtonBookHandler();
        }
    }
    function searchHandler() {
        const searchBar = document.querySelector('input[type="search"][name="search"]');
        let timeoutId;
        searchBar.addEventListener("keyup", e => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                var searchString = e.target.value;
                handleSearch(searchString);
            }, 100);
        });
    }
    function searchButtonClickHandler() {
        const searchBar = document.querySelector('input[type="search"][name="search"]');
        const searchString = searchBar.value;
        handleSearch(searchString);
    }
    const searchButton = document.querySelector('input[name="search_submit"]');
    searchButton.addEventListener("click", searchButtonClickHandler);
    searchHandler();
}
function GeneralLocalStorageHandler() {
    function saveDataToStorage(data) {
        var jsonDataString = JSON.stringify(data);
        localStorage.setItem('book_data', jsonDataString);
    }
    function loadDataFromStorage() {
        var jsonDataString = JSON.parse(localStorage.getItem('book_data')) || {};
        return jsonDataString;
    }
    function putToBookshelf(book_id) {
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isInBookshelf === false) {
            book.isInBookshelf = true;
            saveDataToStorage(jsonDataString);
        }
        writeBookDataExec();
    }
    function putToComplete(book_id) {
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isComplete === false) {
            book.isComplete = true;
            saveDataToStorage(jsonDataString);
        }
        writeBookDataExec();
    }
    function takeFromBookShelf(book_id) {
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isInBookshelf === true) {
            book.isInBookshelf = false;
            saveDataToStorage(jsonDataString);
        }
        writeBookDataExec();
    }
    function markAsUnread(book_id) {
        var jsonDataString = loadDataFromStorage();
        var book = jsonDataString.main.find(function (item) {
            return item.id === book_id;
        });
        if (book && book.isComplete === true) {
            book.isComplete = false;
            saveDataToStorage(jsonDataString);
        }
        writeBookDataExec();
    }
    function deleteBook(book_id) {
        var jsonDataString = loadDataFromStorage();
        const index = jsonDataString.main.findIndex(item => item.id === book_id);
        if (index !== -1) {
            jsonDataString.main.splice(index, 1);
            saveDataToStorage(jsonDataString);
        }
        writeBookDataExec();
    }
    GeneralLocalStorageHandler.loadDataFromStorage = loadDataFromStorage;
    GeneralLocalStorageHandler.putToBookshelf = putToBookshelf;
    GeneralLocalStorageHandler.saveDataToStorage = saveDataToStorage;
    GeneralLocalStorageHandler.putToComplete = putToComplete;
    GeneralLocalStorageHandler.takeFromBookShelf = takeFromBookShelf;
    GeneralLocalStorageHandler.markAsUnread = markAsUnread;
    GeneralLocalStorageHandler.deleteBook = deleteBook;
}
function GeneralButtonBookHandler() {
    var ConfirmBox = generalConfirmDialogBuilder();
    function buttonPutToBookshelf() {
        var parentElements = document.querySelectorAll('.button-puttobookshelf');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.putToBookshelf(book_id);
                            },
                            cancel: function () {
                            }
                        });
                    } else {
                    }
                });
            });
        } else {
        }
    }
    function buttonPutToComplete() {
        var parentElements = document.querySelectorAll('.button-putToComplete');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.putToComplete(book_id);
                            },
                            cancel: function () {
                            }
                        });
                    } else {
                    }
                });
            });
        } else {
        }
    }
    function buttonTakeFromBookshelf() {
        var parentElements = document.querySelectorAll('.button-takeFromBookshelf');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.takeFromBookShelf(book_id);
                            },
                            cancel: function () {
                            }
                        });
                    } else {
                    }
                });
            });
        } else {
        }
    }
    function buttonMarkAsUnread() {
        var parentElements = document.querySelectorAll('.button-markAsUnread');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.markAsUnread(book_id);
                            },
                            cancel: function () {
                            }
                        });
                    } else {
                    }
                });
            });
        } else {
        }
    }
    function buttonDeleteBook() {
        var parentElements = document.querySelectorAll('.button-deleteBook');
        if (parentElements.length > 0) {
            parentElements.forEach(function (parentElement) {
                parentElement.addEventListener('click', function (event) {
                    if (parentElement.hasAttribute('data-id')) {
                        var book_id = parseInt(this.getAttribute('data-id'));
                        var confBox = new ConfirmBox(parentElement, {
                            ok: function () {
                                GeneralLocalStorageHandler.deleteBook(book_id);
                            },
                            cancel: function () {
                            }
                        });
                    } else {
                    }
                });
            });
        } else {
        }
    }
    buttonPutToBookshelf();
    buttonPutToComplete();
    buttonTakeFromBookshelf();
    buttonMarkAsUnread();
    buttonDeleteBook();
}
function imgTooltip() {
    var aboutUs = document.querySelector('.founder_img');
    if (!aboutUs) {
        aboutUs.addEventListener('mouseenter', function (event) {
            if (event.target.classList.contains('founder_img')) {
                event.target.style.cursor = 'pointer';
                event.target.setAttribute('title', 'Foto Founder PustaBooks');
            }
        });
        aboutUs.addEventListener('mouseleave', function (event) {
            if (event.target.classList.contains('founder_img')) {
                event.target.style.cursor = 'auto';
                event.target.removeAttribute('title');
            }
        });
    }
}
function menuNavbarMobileHandler() {
    var menu = document.querySelector('.menu');
    var header = document.querySelector('.header');
    if (!menu || !header) return;
    menu.addEventListener('click', function () {
        menu.classList.toggle('cancel');
        header.classList.toggle('active');
        var menuIcon = menu.querySelector('svg');
        if (menu.classList.contains('cancel')) {
            menuIcon.setAttribute("viewBox", "0,0,330,330");
            menuIcon.innerHTML = '<path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165c90.982,0,165-74.019,165-165S255.982,0,165,0z M165,300 c-74.439,0-135-60.561-135-135S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z"></path><path d="M239.247,90.754c-5.857-5.858-15.355-5.858-21.213,0l-53.033,53.033l-53.033-53.033c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L143.788,165l-53.033,53.033c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.606-4.394l53.033-53.033l53.033,53.033 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L186.214,165 l53.033-53.033C245.105,106.109,245.105,96.612,239.247,90.754z"></path>';
            document.querySelectorAll('.header.mobile nav>ul>a').forEach(function (link) {
                link.classList.add('animated');
            });
        } else {
            menuIcon.innerHTML = '<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>';
            menuIcon.setAttribute("viewBox", "0,0,24,24")
            document.querySelectorAll('.header.mobile nav>ul>a').forEach(function (link) {
                link.classList.remove('animated');
            });
        }
    });
}
function scrollHeaderSticky() {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 99) {
            var header = document.querySelector('.header');
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
            var header = document.querySelector('.header');
            if (header) {
                header.classList.remove('scrolled', 'full');
            }
        }
    });
}
function changeFontSizeFunction() {
    var targetFonts = document.querySelectorAll('.scale_font');
    var targetWidth = document.querySelectorAll('.scale_width');
    window.addEventListener('resize', function () {
        if (window.matchMedia('(min-width: 1200px) and (max-width: 1400px)').matches) {
            targetFonts.forEach(function (element) {
                changeFontSize(1.25, element, 'font-size');
            });
            targetWidth.forEach(function (element) {
                changeFontSize(80, element, 'width');
            });
        } else if (window.matchMedia('(min-width: 1400px)').matches) {
            targetFonts.forEach(function (element) {
                element.style.fontSize = '1.25rem';
            });
            targetWidth.forEach(function (element) {
                element.style.width = '';
            });
        }
    });
}
function muncul_scroll_start() {
    muncul_scroll({ reset: true });
    muncul_scroll().reveal('section', {
        duration: 3000,
        origin: "top",
        distance: "3rem",
        easing: "cubic-bezier(0.5, 0, 0, 1)"
    });
}
function scroll_Reveal() {
    var revealPoint = 150;
    var revealElement = document.querySelectorAll(".reveal");
    for (var i = 0; i < revealElement.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = revealElement[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            revealElement[i].classList.add("revealOn");
        } else {
            revealElement[i].classList.remove("revealOn");
        }
    }
}
function appHtmlTabsHandler(e) {
    if (e.target.classList.contains('tabs')) {
        return;
    }
    const activeElement = document.querySelector('main .rak_buku.tabs div.active');
    if (activeElement !== null) {
        activeElement.classList.remove('active');
    }
    e.target.classList.add('active');
    writeBookDataExec();
    GeneralButtonBookHandler();
}
function formGroupLabelHandler() {
    document.querySelectorAll('.form-control').forEach(function (input) {
        input.addEventListener('input', function () {
            var field = this.closest('.form-group');
            if (this.value) {
                field.classList.add('field--not-empty');
            } else {
                field.classList.remove('field--not-empty');
            }
        });
    });
}
function eventListenerRun() {
    menuNavbarMobileHandler();
    changeFontSizeFunction();
    scrollHeaderSticky();
    window.addEventListener('resize', checkWindowWidth);
    window.addEventListener("scroll", scroll_Reveal);
    routingHandler();
}
function homeHandler() {
    sleep(2000).then(() => {
        greetings();
    });

    fetchDataJson(function (data) {
        getHeader();
        getFooter();
        addHeroElement(data);
        addLayananElement(data);
        addBukuPopulerElement(data);
        addAboutUsSection(data);
        checkWindowWidth();
        scroll_Reveal();
        imgTooltip();
        eventListenerRun();
    });
}
function appHandler() {
    getHeader();
    getFooter();
    writeBookDataExec();
    checkWindowWidth();
    scroll_Reveal();
    eventListenerRun();
}
function loginHandler() {
    formGroupLabelHandler();
    SignInFunction();
    checkWindowWidth();
    scroll_Reveal();
    eventListenerRun();
}
function routingHandler() {
    function handleLinkClick(event) {
        event.preventDefault();
        var element_a = event.target.closest('a');
        if (element_a) {
            var url = element_a.getAttribute("href");
        } else {
            var element_tautan = event.target.closest('.tautan');
            var url = element_tautan.getAttribute("data-tautan");
        }
        fetch(url)
            .then(response => response.text())
            .then(html => {
                var newDocument = createNewDocument(html);
                replaceBodyDocument(newDocument);
                reloadScripts(newDocument);
            })
            .catch(error => {
                console.error('Error loading content:', error);
                greetings().greet3();
            });
    }
    function createNewDocument(content) {
        var newBody = document.createElement('body');
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const bodyContent = doc.body.innerHTML;
        newBody.innerHTML = bodyContent;
        return newBody;
    }
    function reloadScripts(new_Body) {
        var originalScripts = new_Body.querySelectorAll('script');
        originalScripts.forEach(function (originalScript) {
            var newScript = document.createElement('script');
            if (originalScript.src) {
                newScript.src = originalScript.src;
            } else {
                newScript.innerHTML = originalScript.innerHTML;
            }
            originalScript.remove();
            document.body.appendChild(newScript);
        });
    }
    function replaceBodyDocument(html) {
        var oldBody = document.getElementsByTagName('body')[0];
        oldBody.replaceWith(html);
    }
    document.querySelectorAll('a , .tautan').forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
}
