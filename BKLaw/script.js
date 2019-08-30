const open = (elem, arrow) => {
    let className = elem.className;
    let className1 = arrow.className;
    if (className.indexOf(' collapse') === -1) {
        className += ' collapse';
        className1 +=' arrow-rotate';
    } else {
        className = className.replace(' collapse', '');
        className1 = className1.replace(' arrow-rotate', '');
    }
    elem.className = className;
    arrow.className = className1;

    return false;
};
arrow_top_1.onclick = function () {
    open(document.getElementById("collapse1"), document.getElementById("arrow_top_1"));
};
arrow_bottom_1.onclick = function () {
    open(document.getElementById("collapse1"),document.getElementById("arrow_top_1"));
};
arrow_top_2.onclick = function () {
    open(document.getElementById("collapse2"), document.getElementById("arrow_top_2"));
};
arrow_bottom_2.onclick = function () {
    open(document.getElementById("collapse2"), document.getElementById("arrow_top_2"));
};
arrow_top_3.onclick = function () {
    open(document.getElementById("collapse3"), document.getElementById("arrow_top_3"));
};
arrow_bottom_3.onclick = function () {
    open(document.getElementById("collapse3"), document.getElementById("arrow_top_3"));
};
arrow_top_4.onclick = function () {
    open(document.getElementById("collapse4"), document.getElementById("arrow_top_4"));
};
arrow_bottom_4.onclick = function () {
    open(document.getElementById("collapse4"), document.getElementById("arrow_top_4"));
};