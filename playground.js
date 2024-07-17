function aaa () {
    // Kode disembunyikan
    this.init()
}
aaa.prototype = {
    init: function () {
        // Kode disembunyikan
    },
    create: function () {
        // Kode disembunyikan
    },
    bbb: function () {
        // kode disembunyikan
    },
    ccc: function () {
        setTimeout(function () {
            this.bbb();
          }, 2000);
    },

}

// Menggunakan offsetWidth

let element = document.querySelector("pn-notes-wrapper").shadowRoot.querySelector("pn-noteitem");
let offsetWidth = element.offsetWidth;
console.log('offsetWidth:', offsetWidth); // Lebar termasuk padding dan border

// Menggunakan clientWidth
let clientWidth = element.clientWidth;
console.log('clientWidth:', clientWidth); // Lebar termasuk padding, tidak termasuk border

// Menggunakan getBoundingClientRect
let rect = element.getBoundingClientRect();
let rectWidth = rect.width;
console.log('getBoundingClientRect width:', rectWidth); // Lebar elemen

// Menggunakan getComputedStyle
let computedStyle = window.getComputedStyle(element);
let computedWidth = computedStyle.width;
console.log('getComputedStyle width:', computedWidth); // Lebar sebagai string dengan satuan
