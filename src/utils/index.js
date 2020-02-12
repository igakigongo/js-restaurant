const clearElement = (htmlElement) => {
  if (!htmlElement) return;
  while (htmlElement.firstChild) {
    htmlElement.removeChild(htmlElement.firstChild);
  }
};

export default clearElement;