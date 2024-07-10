class Utils {
    addBookHandler() {
        showModal() {
            parentElement = document.createElement('div');
            parentElement.innerHTML = `
            <input type="text">
            <button onclick="addBookhandler().submitNote()">Submit</button>
            <button onclick="addBookhandler().hideModal()"> cancel</button>
            `
        }
        SubmitNote() {
            // KODE UNTUK SUBMIT
        }
        hideModal() {
            // KODE UNTUK HIDE MODAL
        }
        return {showModal:showModal,SubmitNote:SubmitNote,hideModal:hideModal}
    }
}