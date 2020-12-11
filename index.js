function addactiveclass(options) {
  const workArray = document.querySelectorAll(options.arrayClass);
  workArray.forEach(element => {
      element.classList.remove(options.activeClass);
  });
  workArray[options.index].classList.add(options.activeClass);
}

module.exports.addactiveclass = addactiveclass;
