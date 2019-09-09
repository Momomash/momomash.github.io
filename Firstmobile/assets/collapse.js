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
