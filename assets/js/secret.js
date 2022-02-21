window.addEventListener('load', (event) => {
    console.info('secret.js Copyright (c) 2022 claycle.com');
    let elements = document.querySelectorAll("[data-secret]");
    elements.forEach(el => {
        el.href = atob(el.dataset.secret);
        console.debug("Secret Decoder", el.dataset.secret);
        if (el.dataset.secrettext) {
            el.innerHTML = atob(el.dataset.secrettext);
            console.debug("Secret Decoder Text", el.dataset.secrettext);
        }
    });
});
