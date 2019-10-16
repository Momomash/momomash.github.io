const switchClass = (classList, className) => {
    classList.contains(className) ? classList.remove(className) : classList.add(className);
};

const toggle = () => {
    const hamburger = document.getElementById("c-hamburger");
    switchClass(hamburger.classList, "is-active");
};
