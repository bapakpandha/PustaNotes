import "../components/pn_header.js"
import "../components/pn_notes_wrapper.js"
import "../components/pn_notelist.js"

function loadContent () {
    const content = document.querySelector('pn-content');
    const contentElement = document.createElement('pn-notes-wrapper');
    content.appendChild(contentElement);
    console.log(content)
}
loadContent();
