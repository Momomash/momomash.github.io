//красит дом путем добавления пути к картинке
function colourHouse(buttonId, imageId) {
    document.getElementById(imageId).src = 'img/' + imageId + '/' + buttonId + '.png';
}

document.addEventListener("DOMContentLoaded", function () {
    //blockNames - это массив с айдишниками картинок которым нужно прописывать путь для покраски
    const blockNames = ['roof', 'walls'];
    //навешивает на все кнопки onclick c функцией ColorHouse, и проверяет что навешивание только на кнопки
    blockNames.forEach(blockName => {
        let block = document.getElementById('options_' + blockName);
        block.childNodes.forEach(button => {
            if (button.nodeName  === 'BUTTON') {
                button.onclick = function () {
                    colourHouse(button.id, blockName);
                }
            }
        })
    });
});

//id кнопки должен совпадать с именем картинке в папке, а картинки должны быть разрешения ".png"