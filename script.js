document.getElementById("learnMore").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#about").offsetTop,
    behavior: "smooth"
  });
});

document.getElementById("learnMore")?.addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#about").offsetTop,
    behavior: "smooth"
  });
});

/* -------------------------
   Enterprises: Filter & Modal
   ------------------------- */
(function () {
  const filterBtns = document.querySelectorAll(".enterprise-filters .filter-btn");
  const companyCards = document.querySelectorAll(".company-card");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImg");
  const modalCaption = document.getElementById("imgModalCaption");
  const modalClose = modal?.querySelector(".img-modal-close");

  // Filter handling
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // UI state
      filterBtns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      companyCards.forEach(card => {
        const type = card.dataset.type;
        if (filter === "all" || filter === type) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Open image modal
  document.querySelectorAll(".view-img").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const imgSrc = btn.dataset.img;
      const card = btn.closest(".company-card");
      const name = card?.querySelector(".company-name")?.textContent || "";
      modalImg.src = imgSrc;
      modalImg.alt = `${name} logo`;
      modalCaption.textContent = name;
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      // trap focus if you want (simple focus)
      modalClose?.focus();
    });
  });

  // Close modal
  modalClose?.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
  });

  // Close modal on backdrop click or ESC
  modal?.addEventListener("click", (e) => {
    if (e.target.classList.contains("img-modal-backdrop")) {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modalImg.src = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modalImg.src = "";
    }
  });
})();