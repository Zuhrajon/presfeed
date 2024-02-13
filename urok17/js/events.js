const accordContainer = document.querySelector('.accordeon-container');
const question = document.querySelector('.accordeon-container');
accordContainer.addEventListener('click', toggleVisible);

function toggleVisible(evt) {
    console.dir(evt.target);
    // В зависимости от того на какой элемент мы нажали (можем узнать по содержанию в нём возможных классов) будет зависеть как мы найдём вопрос и удалим/добавим класс отображения
    if (evt.target.classList.contains('accordeon-question')) {
        evt.target.classList.toggle('expanded');
    } else if (evt.target.classList.contains('accordeon-item')) {
        const questionAsChild = evt.target.querySelector('.accordeon-question');
        questionAsChild.classList.toggle('expanded');
    } else if (evt.target.classList.contains('accordeon-answer')) {
        evt.stopPropagation();
    }
}

const sliderControls = document.querySelectorAll('.slider-controls');
console.log(sliderControls);
for (let index = 0; index < sliderControls.length; index++) {
    const sliderControl = sliderControls[index];
    sliderControl.addEventListener('click', handleSliderMove);
}

function handleSliderMove(evt) {
    const btn = evt.target;
    if (btn.dataset.action == 'next') {
        const parent = btn.closest('[data-name="slider-header"]');
        console.dir(parent.nextElementSibling);
        const slider = parent.nextElementSibling;
        console.dir(slider);
        console.log(slider.scrollLeft);
        slider.scrollLeft += 200;
    } else if (btn.dataset.action == 'prev') {
        const parent = btn.closest('[data-name="slider-header"]');
        console.dir(parent.nextElementSibling);
        const slider = parent.nextElementSibling;
        console.dir(slider);
        slider.scrollLeft -= 200;
    }
}

// Tariff select

const priceOptionContainer = document.querySelector('.price-options');
priceOptionContainer.addEventListener('click', handlePriceOptionClick);

function handlePriceOptionClick(evt) {
    const elem = evt.target;
    // Убедиться что все опции не выбраны
    const options = document.querySelectorAll('.price-option');
    // Так делают БОТЫ
    // for (let index = 0; index < options.length; index++) {
    //     const option = options[index];
    //     option.classList.remove('best-price-option');
    //     const applyBtn = option.querySelector('.btn');
    //     applyBtn.classList.add('btn-outline-primary');
    //     applyBtn.classList.remove('btn-primary');
    // }
    // Так делают прогеры 100500 уровня А.У.Е
    options.forEach((option) => {
        option.classList.remove('best-price-option');
        const applyBtn = option.querySelector('.btn');
        applyBtn.classList.add('btn-outline-primary');
        applyBtn.classList.remove('btn-primary');
    });

    if (elem.classList.contains('price-option')) {
        elem.classList.add('best-price-option');
        const applyBtn = elem.querySelector('.btn');
        if (applyBtn.classList.contains('btn-outline-primary')) {
            applyBtn.classList.remove('btn-outline-primary');
            applyBtn.classList.add('btn-primary');
        }
    } else {
        const parentWhichIsOption = elem.closest('.price-option');
        parentWhichIsOption.classList.add('best-price-option');
        const applyBtn = parentWhichIsOption.querySelector('.btn');
        if (applyBtn.classList.contains('btn-outline-primary')) {
            applyBtn.classList.remove('btn-outline-primary');
            applyBtn.classList.add('btn-primary');
        }
    }
}

const marquee = document.querySelector('.marquee');
const partnerImgs = Array.from(marquee.children);

partnerImgs.forEach((img) => {
    const duplicateImg = img.cloneNode(true);
    console.log(img);
    console.log(duplicateImg);
    duplicateImg.setAttribute('aria-hidden', true);
    marquee.appendChild(duplicateImg)
});
console.log(partnerImgs);
