$(".contact__form").on("submit", function (e) {
    e.preventDefault();
    var $form = $(this);

    var $name = $(".contact__form-field--name .contact__form-input"),
        nameVal = $name.val().trim();
    if (!nameVal) {
        $name.parents(".contact__form-field").addClass("contact__form-field--error");
        $name[0].focus();
        return;
    }
    $name.parents(".contact__form-field").removeClass("contact__form-field--error");

    var $email = $(".contact__form-field--email .contact__form-input"),
        emailVal = $email.val();
    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailVal)) {
        $email.parents(".contact__form-field").addClass("contact__form-field--error");
        $email[0].focus();
        return;
    }
    $email.parents(".contact__form-field").removeClass("contact__form-field--error");

    var $message = $(".contact__form-field--message .contact__form-input"),
        messageVal = $message.val().trim();
    if (!messageVal) {
        $message.parents(".contact__form-field").addClass("contact__form-field--error");
        $message[0].focus();
        return;
    }
    $message.parents(".contact__form-field").removeClass("contact__form-field--error");

    var $submit = $(".contact__form-field--submit input");
    $submit[0].disabled = true;

    var formData = new FormData();
    formData.append("name", nameVal);
    formData.append("email", emailVal);
    formData.append("message", messageVal);

    fetch("/contact/messages/", {
        method: "POST",
        headers: {
            "X-CSRFToken": $("input[name='csrfmiddlewaretoken']").val()
        },
        body: formData
    });

    $form[0].style.maxHeight = $form.height() + "px";
    setTimeout(function () {
        $form.addClass("contact__form--done");
    });
});
