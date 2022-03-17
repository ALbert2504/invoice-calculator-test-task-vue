const isFormItemValid = ([key, value]) => {
  switch (key) {
    case 'name':
      return !!value.length;
    case 'price':
    case 'quantity':
      return !!value && !isNaN(+value);
    default:
      return false;
  }
};

export default isFormItemValid;