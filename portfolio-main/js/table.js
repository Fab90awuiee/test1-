const talButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");

const changeContect = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

talButtons.forEach((talButton, index) => {
  talButton.addEventListener("click", (event) => {
    const dataValue = talButton.dataset.tabsHandler;

    changeContect(tabDescriptions, dataValue);
    changeContect(tabImages, dataValue);

    talButtons.forEach((btn) => {
      console.log(btn);
      console.log(event.target);
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
