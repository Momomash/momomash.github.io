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
    open(document.getElementById("left_menu"));
};

const closed = (elem) => {
    let className = elem.className;
    if (className.indexOf(' dropdown-left') !== -1) {
        className = className.replace(' dropdown-left', '');
    }
    elem.className = className;

    return false;
};
closed_menu.onclick = function () {
    closed(document.getElementById("left_menu"));
};




