
const carousel = document.querySelector('.carousel');
const icons = document.querySelectorAll('.icon');
const title = document.getElementById('section-title');
let activeIndex = 1;

function updateActive(index) {
  icons.forEach((icon, i) => icon.classList.toggle('active', i === index));
  const offset = (index - 1) * 500;
  carousel.style.transform = `translateX(-${offset}px)`;
  title.textContent = icons[index].dataset.title;
}

icons.forEach((icon, index) => {
  if (icon.style.pointerEvents === "none") return;
  icon.addEventListener('click', () => updateActive(index));
});

updateActive(activeIndex);
