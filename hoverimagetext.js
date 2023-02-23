// Alle billede elementerne indsættes her
const images = document.querySelectorAll('.nm-mediatext-combination-fullwidth-image picture');

// Loop gennem hvert billede
images.forEach((image) => {
  const img = image.querySelector('img');
  const width = img.width;
  const height = img.height;

  // Opret hover overlay elementet
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.style.width = `${width}px`;
  overlay.style.height = `${height}px`;

  // Opret text element
  const text = document.createElement('div');
  text.classList.add('text');
  text.innerHTML = image.parentNode.nextElementSibling.innerHTML;
  
  // Tilføj overlay og text elementet til billedeelementet 
  image.appendChild(overlay);
  image.appendChild(text);

  // Skjul text elementet til at starte med
  text.style.display = 'none';

  // Tilføj event listeners for mouseenter og mouseleave på billedeelementet
  image.addEventListener('mouseenter', () => {
    overlay.style.opacity = '0.7';
    text.style.display = 'block';
  });

  image.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
    text.style.display = 'none';
  });
});