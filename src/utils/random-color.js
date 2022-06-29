export const getRandomHexColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  if (r === 255 && g === 255 && b === 255) {
    r = 0;
    g = 0;
    b = 255;
  }
  return `rgb(${r}, ${g}, ${b})`;
};
