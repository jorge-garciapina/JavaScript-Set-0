class Shape {
  constructor(edges) {
    this.edges = edges;
  }
  perimeter() {
    let corners = this.edges.length;
    let sides = [];
    for (let i = 0; i <= this.edges.length - 1; i++) {
      let xComponent =
        this.edges[i % corners][0] - this.edges[(i + 1) % corners][0];
      let yComponent =
        this.edges[i % corners][1] - this.edges[(i + 1) % corners][1];

      let side = Math.pow(
        Math.pow(xComponent, 2) + Math.pow(yComponent, 2),
        0.5
      );
      sides.push(side);
    }

    let perim = 0;
    for (let elmnt of sides) {
      perim += elmnt;
    }
    return perim;
  }
}

class Quadrilateral extends Shape {
  constructor(edges) {
    super(edges);
  }

  area() {
    let corners = this.edges.length;
    let sides = [];
    for (let i = 0; i <= 2 - 1; i++) {
      let xComponent =
        this.edges[i % corners][0] - this.edges[(i + 1) % corners][0];
      let yComponent =
        this.edges[i % corners][1] - this.edges[(i + 1) % corners][1];

      let side = Math.pow(
        Math.pow(xComponent, 2) + Math.pow(yComponent, 2),
        0.5
      );
      sides.push(side);
    }

    return sides[0] * sides[1];
  }
}

class Square extends Quadrilateral {
  constructor(edges) {
    super(edges);
  }

  area() {
    let corners = this.edges.length;
    let sides = [];
    for (let i = 0; i <= 2 - 1; i++) {
      let xComponent =
        this.edges[i % corners][0] - this.edges[(i + 1) % corners][0];
      let yComponent =
        this.edges[i % corners][1] - this.edges[(i + 1) % corners][1];

      let side = Math.pow(
        Math.pow(xComponent, 2) + Math.pow(yComponent, 2),
        0.5
      );
      sides.push(side);
    }

    if (sides[0] !== sides[1]) {
      throw new Error("This is not a square");
    }

    return sides[0] * sides[1];
  }
}

class Triangle extends Shape {
  constructor(edges) {
    super(edges);
  }

  area() {
    let base = Math.abs(this.edges[2][0] - this.edges[0][0]);
    let height = Math.abs(this.edges[1][1]);
    return 0.5 * base * height;
  }
}

const shipp = new Shape([
  [0, 0],
  [3, 3],
  [7, 3],
  [9, 2],
  [5, 0],
]);
console.log(shipp.perimeter());

const cuadro = new Quadrilateral([
  [0, 0],
  [0, 3],
  [7, 3],
  [7, 0],
]);
console.log(cuadro.area());

const square = new Square([
  [0, 0],
  [0, 2],
  [2, 2],
  [0, 2],
]);
console.log("Square:", square.area());

const triangulo = new Triangle([
  [0, 0],
  [3, 3],
  [5, 0],
]);
console.log(triangulo.area());
