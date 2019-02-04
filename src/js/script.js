import {
    Slendr
} from 'slendr'
if (document.querySelectorAll(".slider").length > 0) {
    const myslider = new Slendr({
        slideshow: true
    })
    // myslider.on('move', (direction, index, element) => console.log(direction))
    document.addEventListener('click', (event) => {
        if (event.target.matches('.slider-thumnail__img')) {
            myslider.move(parseInt(event.target.dataset.index));
        }
    })
}

$(".js-form").on("submit", function(event) {
    event.preventDefault();

    let $inputForm = $(this),
        email = $inputForm.find(".intro__form-input").val(),
        $allInputForms = $(".intro__form");

    fetch(`/api/save.php?email=${email}`).then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(data) {
            $allInputForms.addClass("hide").parents(".js-form-wrapper").find(".intro__form-success").removeClass("hide");
        });
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
});

$(".js-expand-product-description").on("click", function () {
    $(this).parents(".product-overview__description-wrapper").addClass("product-overview__description-wrapper--expanded");
});
