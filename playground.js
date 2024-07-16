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