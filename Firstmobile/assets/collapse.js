//подключай скрипт в самый конец html
const open = (elem) => {
    let className = elem.className;
    if (className.indexOf(' dropdown-left') === -1) {
        className += ' dropdown-left';
    } else {
        className = className.replace(' dropdown-left', '');
    }
    elem.className = className;

    return false;
};
sidenav_drop_1.onclick = function () {
    open(document.getElementById("dropdown_menu_1"));
};
sidenav_drop_2.onclick = function () {
    open(document.getElementById("dropdown_menu_2"));
};
sidenav_drop_3.onclick = function () {
    open(document.getElementById("dropdown_menu_3"));
};
sidenav_drop_4.onclick = function () {
    open(document.getElementById("dropdown_menu_4"));
};
sidenav_drop_5.onclick = function () {
    open(document.getElementById("dropdown_menu_5"));
};
sidenav_drop_6.onclick = function () {
    open(document.getElementById("dropdown_menu_6"));
};
sidenav_drop_7.onclick = function () {
    open(document.getElementById("dropdown_menu_7"));
};
sidenav_drop_8.onclick = function () {
    open(document.getElementById("dropdown_menu_8"));
};
