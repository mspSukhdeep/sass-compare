(function handleStarClick() {
    let $ratingStar = $(".write-review__form .rating__star"),
        $ratingInr = $ratingStar.find(".rating__star-inr"),
        ratingWidth = $ratingStar.width();

    $ratingStar.on("click", function (e) {
        let rating = Math.ceil((e.offsetX / ratingWidth) * 5) || 1;
        $ratingInr.width((rating * 20) + "%");
        $(".write-review__field--rating .write-review__input").val(rating)[0].setCustomValidity("");
    });
}());

$(".write-review__submit").on("click", function () {
    $(".write-review__form").addClass("write-review__form--submitted");

    var $ratingField = $(".write-review__field--rating .write-review__input"),
        ratingVal = $ratingField.val();
    if (!ratingVal) {
        $ratingField[0].setCustomValidity("You must select a rating.");
        return false;
    }
    else {
        $ratingField[0].setCustomValidity("");
    }

    var $reviewField = $(".write-review__field--review .write-review__input"),
        reviewVal = $reviewField.val(),
        reviewWords = reviewVal.match(/\s*\S+\s*/g);
    if (!reviewWords || reviewWords.length < 20) {
        $reviewField[0].setCustomValidity("Your review must be at least 20 words long.");
        return false;
    }
    else {
        $reviewField[0].setCustomValidity("");
    }
});

$(".write-review__form").on("submit", function (e) {
    e.preventDefault();

    fetch("", {
        "method": "POST",
        "body": JSON.stringify({
            "product": $(".write-review__section").data("pid"),
            "email": decodeURIComponent(window.location.search),
            "rating": $(".write-review__field--rating .write-review__input").val(),
            "title": $(".write-review__field--title .write-review__input").val(),
            "review": $(".write-review__field--review .write-review__input").val(),
            "name": $(".write-review__field--name .write-review__input").val(),
            "job": $(".write-review__field--job .write-review__input").val(),
            "company": $(".write-review__field--company .write-review__input").val()
        })
    }).then(function (response) {
        if (response.ok) {
            $(".write-review__section").addClass("write-review__section--collapsed");
        }
    });
});