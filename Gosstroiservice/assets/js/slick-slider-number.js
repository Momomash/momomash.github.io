let slickCounterAboutCompany = 0;


const wrapper = (counter, caruoselId) => {
    return () => {
        let activeButton = $(caruoselId).find("ul.slick-dots").find(".slick-active").find("button")[0];
        let newCounter = +activeButton.getAttribute("aria-label").split(" ")[0];
        if (newCounter !== counter) {
            let currentSliderNumber = document.getElementById("current_slider");
            currentSliderNumber.innerHTML = "0" + (newCounter);
            counter = newCounter;
        }
    }
};
setInterval(wrapper(slickCounterAboutCompany, "#aboutCompany"), 199);
