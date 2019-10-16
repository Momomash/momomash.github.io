let slickCounterAboutCompany = 0;


const wrapper = (counter) => {
    return () => {
        let activeButton = $('.slider_buttons').find("ul.slick-dots").find(".slick-active").find("button")[0];
        let newCounter = +activeButton.getAttribute("aria-label").split(" ")[0];
        if (newCounter !== counter) {
            let currentSliderNumber = document.getElementById("current_slider");
            currentSliderNumber.innerHTML = "0" + (newCounter) +"/";
            counter = newCounter;
        }
    }
};
setInterval(wrapper(slickCounterAboutCompany, ), 199);
