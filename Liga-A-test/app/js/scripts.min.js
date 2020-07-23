function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("responsive");
}

//custom select
document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
});
for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select');
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

//toggle mobile filter
document.querySelector('.toggleFilter').addEventListener('click', function () {
    document.getElementById('filter').classList.toggle('open');
});

// reset filter
document.getElementById('filter').addEventListener('change', function () {
    const resetBtn = document.getElementById("reset-filter");
    const filters = document.querySelectorAll('input:checked');
    filters.length !== 0 ? resetBtn.classList.add("visible") : resetBtn.classList.remove("visible");
});

document.getElementById('reset-filter').addEventListener('click', function () {
    const filters = document.querySelectorAll('input');
    const filtersArray = Array.from(filters);
    filtersArray.forEach(el => {
        el.checked = false;
    });
    const maxInput = document.querySelector('[name="maxPrice"]');
    const minInput = document.querySelector('[name="minPrice"]');
    maxInput.value = '';
    minInput.value = '';
});

function getArea(card) {
    const cardData = card.querySelector('[data-area]');
    return +cardData.getAttribute('data-area');
};

function getPrice(card) {
    const cardData = card.querySelector('[data-price]');
    return +cardData.getAttribute('data-price');
};

//filter
function filterPrice(cards) {
    const maxInput = document.querySelector('[name="maxPrice"]');
    const minInput = document.querySelector('[name="minPrice"]');
    const maxPrice = maxInput.value === '' ? maxInput.max : maxInput.value;
    const minPrice = minInput.value === '' ? minInput.min : minInput.value;
    return cards.filter(el => {
        const price = getPrice(el);
        return price >= +minPrice && price <= +maxPrice;
    });
}

function filterArea(cards) {
    const areasItems = document.querySelectorAll('[name="area"]:checked');
    const areas = Array.from(areasItems);
    const areasValue = areas.map(elem => elem.value);
    return cards.filter(el => {
        const area = String(getArea(el));
        return areasValue.includes(area);
    });
}

function filterEquipment(cards) {
    const equipmentFiltersItems = document.querySelectorAll('[name="equipment"]:checked');
    const equipmentFilters = Array.from(equipmentFiltersItems);
    const equipmentsFiltersValues = equipmentFilters.map(elem => elem.value);
    return cards.filter(el => {
        const equipmentItems = el.querySelectorAll('[data-equipment]');
        const equipmentItemsArray = Array.from(equipmentItems);
        const equipmentValues = equipmentItemsArray.map(elem => elem.getAttribute('data-equipment'));
        for (let i = 0; i < equipmentsFiltersValues.length; i++) {
            if (!equipmentValues.includes(equipmentsFiltersValues[i])) {
                return false;
            }
        }
        return true;
    });
}

document.getElementById('to-filter').addEventListener('click', function () {
    let cardsItems = document.querySelectorAll('.card');
    let cards = Array.from(cardsItems);
    cards.forEach(el => el.style.display = "none");
    cards = filterPrice(cards);
    cards = filterArea(cards);
    cards = filterEquipment(cards);
    cards.forEach(el => el.style.display = "block");
});

function getSortFunction(attr,sort) {
    return function (a, b) {
        const attrA = attr === 'area' ? getArea(a) : getArea(a);
        const attrB = attr === 'area' ? getArea(b) : getArea(b);
        let result = 0;
        if (attrA > attrB) {
            result =  1;
        }
        if (attrA < attrB) {
            result = -1;
        }
        return sort === 'DESC' ? result : result * -1;
    }
};

function sortCards(element) {
    const sortParam = element.dataset.sort;
    let cardsItems = document.querySelectorAll('.card');
    let cards = Array.from(cardsItems);
    let itemsArray = [];
    let parent = cards[0].parentNode;
    for (let i = 0; i < cards.length; i++) {
        itemsArray.push(parent.removeChild(cards[i]));
    }
    cards.sort(
        getSortFunction(sortParam.split('=')[0],sortParam.split('=')[1])
    ).forEach(function (card) {
        parent.appendChild(card)
    });
};
