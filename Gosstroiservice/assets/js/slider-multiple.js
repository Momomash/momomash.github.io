$(document).ready(() => {
  generateSlider("#carouselCompany", 2);
  generateSlider("#carouselTeam", 4)
});


const generateSlider = (id, numberOfSliders) => {
  let carousel = $(id).find(".carousel-inner");
  let items = carousel.find(".carousel-item");

  let combinations = [];
  for (let i = 0; i < items.length; i++) {
    let combination = [];
    for (let j = 0; j < numberOfSliders; j++) {
      if (i + j < items.length) {
        combination.push(items[i + j])
      } else {
        combination.push(items[i + j - items.length])
      }
    }
    combinations.push(combination);
  }

  carousel.empty();
  combinations.forEach((comb, i) => {
    row = $("<div class='row'></div>");
    comb.forEach(item => {
      col = $("<div class='col'></div>");
      col.append(item.innerHTML);
      row.append(col)
    });
    wrapper = $("<div class='carousel-item'></div>");
    if (i === 0) {
      wrapper.addClass("active");
    }
    wrapper.append(row);
    carousel.append(wrapper);
  })
};