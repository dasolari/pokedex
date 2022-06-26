const zeroesAdder = (value: number) => {
  let number = value.toString();
  switch (number.length) {
    case 1:
      number = `00${number}`;
      break;
    case 2:
      number = `0${number}`;
  }
  return number;
};

export default zeroesAdder;
