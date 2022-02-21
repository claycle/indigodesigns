/*
Before-and-After
Make sure you include the bna.scss (css) file in your project.
*/

function _beforeAndAfter(slider, evt) {
    let starget = slider.getAttribute("data-target");
    //console.debug(slider, evt, starget);
    let target = document.querySelector("#" + starget);
    //console.debug(target);
    if (target != null) {
        target.style.width = slider.value + "%";
    }
    else {
        console.error("bna.js: data-target not found: ", starget);
    }
}

window.addEventListener('load', (evt) => {
    console.info('bna.js Copyright (c) 2022 claycle.com');
    // Locate all bna via ...
    let basliders = document.querySelectorAll("input.baslider");
    basliders.forEach((slider) => {
        //console.debug(slider);
        slider.addEventListener('input', (e) => {
            _beforeAndAfter(slider, e);
        });
        slider.addEventListener('change', (e) => {
            _beforeAndAfter(slider, e);
        });
    });
});


