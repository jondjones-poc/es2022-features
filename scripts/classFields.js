class ShapeNormal {
  height = 0;
  width = 0;
};

class ShapePrivate {
  #height = 10;
  #width;

  constructor() {
    this.#width = 10;
  }

  #privateMethod() {
    console.log(height + width)
  }
};

class ShapeStatic {
  static height = 10;
  static width = 10;;

  static privateMethod() {
    console.log(this.height + this.width)
  }
};

function classFields() {

  var square = new ShapeNormal();
  square.height = 10;
  square.width = 10;

  var square = new ShapePrivate();
  // These calls all produce an access error
  // square.#height = 5;
  // square.#width = 5;
  // square.#privateMethod();

  // Static Example
  ShapeStatic.height = 5;
  ShapeStatic.width = 5;
  ShapeStatic.privateMethod();
}