var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    // es el primer elemento a evaluar
    startEl = document.body; //indica que se debe iniciar por el body del documento
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(
      matchFunc,
      startEl.children[i]
    );
    resultSet = [...resultSet, ...ressult];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] == ".") return "class";
  if (selector[0] == "#") return "id";
  if (selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunc;
  if (selectorType === "id") {
    matchFunc = (element) => "#" + element.id === selector;
  } else if (selectorType === "class") {
    matchFunc = (element) => "." + element.id === selector;
  } else if (selectorType === "tag.class") {
    let [tag, clase] = selector.split(".");
    return (
      matchFunctionMaker(tag)(element) && matchFunctionMaker(clase)(element)
    );
    //matchFunc = (element) => "." + element.id === selector;
  } else if (selectorType === "tag") {
    if (selector.toLowerCase() === element.tagName.tpLowerCase()) return true;
    //matchFunc = (element) => "." + element.id=== selector;
  }
  return matchFunc;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
