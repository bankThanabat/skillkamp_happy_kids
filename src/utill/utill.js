function rgbToTailwindClass(rgb) {
  if (!rgb) {
    return '';
  };

  if (rgb[0] === '#') {
    return `bg-[${rgb}]`;
  }

  const values = rgb.replace('rgb(', '').replace(')', '');

  // Split the values into an array
  const rgbArray = values.split(',');
  // Get the red, green, and blue values
  const red = rgbArray[0] ? rgbArray[0].trim() : '';
  const green = rgbArray[1] ? rgbArray[1].trim() : '';
  const blue = rgbArray[2] ? rgbArray[2].trim() : '';

  // Return the Tailwind CSS utility class string
  return `bg-rgb-${red}-${green}-${blue}`;
}


export {
  rgbToTailwindClass,
};
