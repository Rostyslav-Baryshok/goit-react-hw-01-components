export const getRandomHexColor = () =>
  `#${Math.floor(('00000' + Math.random() * 0xffffff) << 0).toString(16)}`;
