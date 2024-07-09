function AddGlobalStyle(parentElement) {
    const styleSheet = document.createElement('style');

    styleSheet.textContent = `
        :root {
            --main-color: #DCF2F1;
            --secondary-color: #7FC7D9;
            --third-color: #365486;
            --fourth-color: #0F1035;
            --background-clr: linear-gradient(150deg, rgba(180, 198, 197, 1) 3%, rgba(193, 205, 205, 1) 33%, rgba(220, 242, 241, 1) 63%, rgba(255, 255, 255, 1) 93%);
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            outline: none;
            border: none;
            text-transform: capitalize;
            transition: all .4s ease-in-out;
            animation: opacity_fade_in 0.2s;
        }
        a {
            color: inherit !important;
            text-decoration: none !important;
        }

        a[disabled="disabled"] {
            pointer-events: none;
            /* cursor: wait; */
        }
    `;

    parentElement.appendChild(styleSheet);
}

function AddContainerStyle(parentElement) {
    const styleSheet = document.createElement('style');
    
    const styles = `
    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 576px) {
        .container {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        .container {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        .container {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        .container {
            max-width: 1140px;
        }
    }

    @media (min-width: 1400px) {
        .container {
            max-width: 1320px;
        }
    }

    @media (min-width: 1700px) {
        .container {
            max-width: 1512px;
        }
    }

    .container.full {
        max-width: 100%;
    }
    `
    
    styleSheet.textContent = styles;
    parentElement.appendChild(styleSheet);
}

function AddFontStyle(parentElement) {
    const styleSheet = document.createElement('style');
    
    const styles = `
        @font-face {
            font-family: 'Poppins';
            font-weight: 900;
            font-style: normal;
            src: url('../../assets/fonts/Poppins/Poppins-Black.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Poppins';
            font-weight: 700;
            font-style: normal;
            src: url('../../assets/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Poppins';
            font-weight: 500;
            font-style: normal;
            src: url('../../assets/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Poppins';
            font-weight: 400;
            font-style: normal;
            src: url('../../assets/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Poppins';
            font-weight: 100;
            font-style: normal;
            src: url('../../assets/fonts/Poppins/Poppins-Thin.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Poppins';
            font-weight: 100;
            font-style: italic;
            src: url('../../assets/fonts/Poppins/Poppins-ThinItalic.ttf') format('truetype');
        }
    `
    
    styleSheet.textContent = styles;
    parentElement.appendChild(styleSheet);
}

export {AddFontStyle, AddContainerStyle, AddGlobalStyle}