(function () {
    "use strict";

    const modal = document.getElementById("gallery-modal");
    if (!modal || typeof modal.showModal !== "function") return;

    const modalImage = modal.querySelector(".gallery-modal__image");
    const modalCaption = modal.querySelector(".gallery-modal__caption");
    const closeButton = modal.querySelector(".gallery-modal__close");
    let lastTrigger = null;

    document.querySelectorAll(".gallery-card").forEach(function (card) {
        card.addEventListener("click", function () {
            lastTrigger = card;
            modalImage.src = card.dataset.galleryImage;
            modalImage.alt = card.querySelector("img").alt;
            modalCaption.textContent = card.dataset.galleryCaption;
            modal.showModal();
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", function () {
        modal.close();
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) modal.close();
    });

    modal.addEventListener("close", function () {
        modalImage.src = "";
        if (lastTrigger) lastTrigger.focus();
    });
}());
