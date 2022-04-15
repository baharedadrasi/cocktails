const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Element doesn't exist, please check your element: "${selection}"`
  );
};

export default getElement;
