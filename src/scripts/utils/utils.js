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

        .button {
            background-color: var(--third-color);
            color: var(--main-color) !important;
            padding: 0.75rem 2rem;
            border-radius: 2rem;
            display: flex;
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

function AddAnimationStyle(parentElement){
    const styleSheet = document.createElement('style');
    
    const styles = `
        @-webkit-keyframes gradien_background {
            0% {
                background-position: 0% 50%
            }

            50% {
                background-position: 100% 50%
            }

            100% {
                background-position: 0% 50%
            }
        }

        @-moz-keyframes gradien_background {
            0% {
                background-position: 0% 50%
            }

            50% {
                background-position: 100% 50%
            }

            100% {
                background-position: 0% 50%
            }
        }

        @keyframes gradien_background {
            0% {
                background-position: 0% 50%
            }

            50% {
                background-position: 100% 50%
            }

            100% {
                background-position: 0% 50%
            }
        }

        @-webkit-keyframes topToDown {
            0% {
                top: -3rem
            }

            50% {
                top: -1.5rem
            }

            0% {
                top: 0
            }
        }

        @-moz-keyframes topToDown {
            0% {
                top: -3rem
            }

            50% {
                top: -1.5rem
            }

            0% {
                top: 0
            }
        }

        @keyframes topToDown {
            0% {
                top: -3rem
            }

            50% {
                top: -1.5rem
            }

            0% {
                top: 0
            }
        }

        @-webkit-keyframes opacity_fade_in {
            0% {
                opacity: 0
            }

            50% {
                opacity: 0.5
            }

            100% {
                opacity: 1
            }
        }

        @-moz-keyframes opacity_fade_in {
            0% {
                opacity: 0
            }

            50% {
                opacity: 0.5
            }

            100% {
                opacity: 1
            }
        }

        @keyframes opacity_fade_in {
            0% {
                opacity: 0
            }

            50% {
                opacity: 0.5
            }

            100% {
                opacity: 1
            }
        }

        .animated {
            opacity: 0;
            transform: translateY(-3rem);
            animation: fadeInUp .5s ease forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(-3rem);

            }

            to {
                opacity: 1;
                transform: translateY(0);

            }
        }

        .animated:nth-child(1) {
            animation-delay: .1s;
        }

        .animated:nth-child(2) {
            animation-delay: .2s;
        }

        .animated:nth-child(3) {
            animation-delay: .3s;
        }

        .animated:nth-child(4) {
            animation-delay: .4s;
        }

        .animated:nth-child(5) {
            animation-delay: .5s;
        }

        *.reveal {
            scale: 0.94;
            opacity: 0;
            transition: 0.9s;
            transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
        }

        .revealOn {
            opacity: 1;
            top: 0;
            scale: 1;
        }

        /* TOOLTIP */

        li[data-tooltip].tooltip:before,
        li[data-tooltip].tooltip:after {
            transform: translateY(10px);
        }

        li[data-tooltip].tooltip:hover:after,
        li[data-tooltip].tooltip:hover:before {
            transform: translateY(0px);
        }

        li[data-tooltip] {
            position: relative;
        }

        li[data-tooltip]:after,
        li[data-tooltip]:before {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            transition: transform 200ms ease, opacity 200ms;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 99;
        }

        li[data-tooltip]:before {
            content: attr(data-tooltip);
            background: #000;
            color: #fff;
            font-size: 0.8rem;
            font-weight: bold;
            padding: 10px 15px;
            border-radius: 5px;
            white-space: nowrap;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        li[data-tooltip]:after {
            width: 0;
            height: 0;
            border: 6px solid transparent;
            content: '';
        }

        li[data-tooltip]:hover:after,
        li[data-tooltip]:hover:before {
            visibility: visible;
            opacity: 0.85;
            transform: translateY(0px);
        }

        li[data-tooltip][data-position="top"]:before {
            bottom: 100%;
            left: -130%;
            margin-bottom: 9px;
        }

        li[data-tooltip][data-position="top"]:after {
            border-top-color: #000;
            border-bottom: none;
            bottom: 101%;
            left: calc(50% - 6px);
            margin-bottom: 4px;
        }

        .checkmark {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
            stroke-width: 2;
            stroke: white;
            stroke-miterlimit: 10;
            box-shadow: inset 0px 0px 0px var(--third-color);
            animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
            position: relative;
            top: 5px;
            margin: 0 auto;
        }

        .checkmark__circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 2px;
            stroke-miterlimit: 10;
            stroke: white;
            fill: var(--third-color);
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        circle.checkmark__circle2 {
            stroke-dasharray: 195;
            stroke-dashoffset: 195;
            stroke-width: 10px;
            stroke-miterlimit: 6;
        }

        .checkmark__check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }

        @keyframes stroke {
            100% {
                stroke-dashoffset: 0;
            }
        }

        @keyframes scale {

            0%,
            100% {
                transform: none;
            }

            50% {
                transform: scale3d(1.1, 1.1, 1);
            }
        }

        @keyframes fill {
            100% {
                box-shadow: inset 0px 0px 0px 30px var(--third-color);
            }
        }
    `
    
    styleSheet.textContent = styles;
    parentElement.appendChild(styleSheet);
}

function setAttributeIfNotNull(parents = document, selector, property, value) {
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

function checkWindowWidth(parents) {
    if (window.matchMedia('(min-width: 992px) and (max-width: 1200px)').matches) {
        setAttributeIfNotNull(parents, '.header', 'style', 'flex-direction: column; height: auto;');
        setAttributeIfNotNull(parents, '.header .container-navbar', 'style', 'justify-content: center;');
        setAttributeIfNotNull(parents, 'main .container-greet-button', 'style', 'font-size: 1rem;');
        setAttributeIfNotNull(parents, '.header .navbar', 'style', 'width: 100%;');
        setAttributeIfNotNull(parents, '.list-service .item', 'style', 'flex: 0 0 40%; margin: 1.5rem;');
        setAttributeIfNotNull(parents, '.container-login .login-form', 'style', 'margin: 5rem 0;');
    } else {
        setAttributeIfNotNull(parents, '.header', 'style', 'flex-direction: ;');
        setAttributeIfNotNull(parents, '.header .container-navbar', 'style', 'justify-content: ;');
        setAttributeIfNotNull(parents, '.header .navbar', 'style', 'width: ;');
        setAttributeIfNotNull(parents, 'main .container-greet-button', 'style', 'font-size: ;');
        setAttributeIfNotNull(parents, '.list-service .item', 'style', 'flex: ; margin: ;');
        setAttributeIfNotNull(parents, '.container-login .login-form', 'style', 'margin: ;');
    }
    if (window.matchMedia('(max-width: 992px)').matches) {
        setAttributeIfNotNull(parents, '.menu', 'style', 'display: block;');
        manipulateClass(parents, '.header', 'addClass', 'mobile');
        manipulateClass(parents, '.greet', 'addClass', 'mobile');
        manipulateClass(parents, '.container-about_us', 'addClass', 'mobile');
        manipulateClass(parents, '.footer', 'addClass', 'mobile');
        manipulateClass(parents, '.container-login', 'addClass', 'mobile');
        setAttributeIfNotNull(parents, '.container-login .navigation>a>.content_text', 'text', '');
    } else {
        setAttributeIfNotNull(parents, '.menu', 'style', 'display: none;');
        manipulateClass(parents, '.header', 'removeClass', 'mobile');
        manipulateClass(parents, '.greet', 'removeClass', 'mobile');
        manipulateClass(parents, '.container-about_us', 'removeClass', 'mobile');
        manipulateClass(parents, '.footer', 'removeClass', 'mobile');
        manipulateClass(parents, '.container-login', 'removeClass', 'mobile');
        setAttributeIfNotNull(parents, '.container-login .navigation>a>.content_text', 'text', 'Kembali Ke Beranda');
    }
}

function manipulateClass(parents = document, element, action, className) {
    var targetElement = parents.querySelector(element);
    if (targetElement) {
        if (action === 'addClass') {
            targetElement.classList.add(className);
        } else if (action === 'removeClass') {
            targetElement.classList.remove(className);
        }
    }
}

export {AddFontStyle, AddContainerStyle, AddGlobalStyle, setAttributeIfNotNull, checkWindowWidth, AddAnimationStyle}