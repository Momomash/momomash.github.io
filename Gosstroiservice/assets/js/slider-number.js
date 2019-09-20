let counter = 0;

const sliderCheck = () => {
    let newCounter = +$("li.carousel-indicator.active")[0].getAttribute("data-slide-to");
    if (newCounter !== counter) {
        let currentSliderNumber = document.getElementById("current_slider");
        currentSliderNumber.innerHTML = "0" + (newCounter + 1 );
        counter = newCounter;
    }
};

setInterval(sliderCheck, 199);