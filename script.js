const carousel = document.querySelector('.carousel');
const icons    = Array.from(document.querySelectorAll('.icon'));
const title    = document.getElementById('section-title');

let activeIndex = 1;

function updateActive(index) {
  icons.forEach((icon, i) => icon.classList.toggle('active', i === index));

  const desktopOffset = 500;
  const mobileOffset  = 400;
  const offsetValue   = window.innerWidth <= 1060
    ? mobileOffset
    : desktopOffset;

  const offset = (index - 1) * offsetValue;
  carousel.style.transform = `translateX(-${offset}px)`;

  title.textContent = icons[index].dataset.title;
}

icons.forEach((icon, i) => {
  icon.addEventListener('click', () => updateActive(i));
});

window.addEventListener('resize', () => updateActive(activeIndex));

updateActive(activeIndex);
