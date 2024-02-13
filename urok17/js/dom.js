console.log(document);
console.dir(document);
const partnersContainer = document.querySelector('.partners-container');
const partnerImages = partnersContainer.querySelectorAll('.partner-img');
for (let index = 0; index < partnerImages.length; index++) {
    const image = partnerImages[index];
    image.setAttribute('alt', `Partner ${index + 1}`);
}
console.dir(partnersContainer);
console.dir(partnerImages);

const title = document.querySelector('h1');
console.dir(title);
// title.textContent = ' Sozi';
// title.nextElementSibling.textContent = "center"
// title.nextElementSibling.className  += " text-danger";
// title.nextElementSibling.className  += " text-danger";
// title.nextElementSibling.className  += " text-danger";
title.classList.add('display-1');
title.classList.add('display-1');
title.classList.add('display-1');
title.classList.add('display-1');
const newDiv = document.createElement('div');
newDiv.classList.add("text-primary", "fw-bolder", "display-4")
newDiv.textContent = "Lorem";
const footer = document.querySelector('footer')
footer.appendChild(newDiv)
footer.removeChild(newDiv)
footer.remove()
