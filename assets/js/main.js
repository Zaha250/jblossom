document.addEventListener('DOMContentLoaded', () => {
    const langSelectElem = document.querySelector('.select-lang');
    const queryParams = getQueryParamsFromURL();

    //Проверка на наличия параметра в url
    /*if('ln' in queryParams) {
        const ln = queryParams.ln;

        langSelectElem.setAttribute('data-select-lang', ln);
        langSelectElem.innerHTML = `
                <img src="${`./assets/images/icons/${ln === 'ae' ? 'en' : 'ae'}-lang.svg`}" alt="en" class="lang__icon">
                <span>${ln === 'ae' ? 'English' : 'العربية'}</span>
            `;
    } else {
        const baseURI = new URL(window.location.href);
        baseURI.searchParams.set('ln', 'en');
        history.replaceState(null, '', baseURI);
    }*/

    /*langSelectElem.addEventListener('click', () => {
        const baseURI = new URL(window.location.href);
        const currentLang = langSelectElem.getAttribute('data-select-lang');

        if(currentLang === 'en') {
            langSelectElem.setAttribute('data-select-lang', 'ae');
            baseURI.searchParams.set('ln', 'ae');
            langSelectElem.innerHTML = `
                <img src="./assets/images/icons/en-lang.svg" alt="en" class="lang__icon">
                <span>English</span>
            `;
        } else if(currentLang === 'ae') {
            langSelectElem.setAttribute('data-select-lang', 'en');
            baseURI.searchParams.set('ln', 'en');
            langSelectElem.innerHTML = `
                <img src="./assets/images/icons/ae-lang.svg" alt="ae" class="lang__icon">
                <span>العربية</span>
            `;
        }
        history.replaceState(null, '', baseURI);

        const newQueryParams = getQueryParamsFromURL();

        const allElements = document.querySelectorAll('[data-lang-key]');
        [...allElements].forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            elem.innerHTML = languages[0][key][newQueryParams.ln];
        });
    });

    function getQueryParamsFromURL (url = window.location.href) {
        const paramsEntries = new URL(url).searchParams.entries();
        return Object.fromEntries(paramsEntries);
    }*/
});
