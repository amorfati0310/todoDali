const colorBox = [
  '#1098ad',
  '#0c8599',
  '#0b7285',
  '#38d9a9',
  '#20c997',
  '#12b886',
  '#0ca678',
  '#099268',
  '#087f5b',
  '#ebfbee',
  '#d3f9d8',
  '#b2f2bb',
  '#8ce99a',
  '#69db7c',
  '#51cf66',
  '#40c057',
  '#37b24d',
  '#2f9e44',
  '#2b8a3e',
  '#f4fce3',
  '#e9fac8',
  '#d8f5a2',
];

const randomColorBox = (box = colorBox) => box[
  Math.floor(Math.random() * (box.length))
];

export default randomColorBox;
