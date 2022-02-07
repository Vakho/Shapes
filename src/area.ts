import { Circle, Triangle, Rectangle, Shapes } from "./util";

function getCircleArea(circle: Circle) {
  const area: number = Math.PI * circle.radius * circle.radius;
  console.log(`Area of circle is  ${area}`);
}

function getTriangleArea(triangle: Triangle) {
  const p: number = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  const area: number = Math.sqrt(
    p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC)
  );
  console.log(`Are of triangle is  ${area}`);
}

function getRectangleArea(rectangle: Rectangle) {
  const area: number = rectangle.sideA * rectangle.sideB;
  console.log(`Are of Rectangle is  ${area}`);
}

export function getArea(shape: Circle | Triangle | Rectangle) {
  switch (shape.type) {
    case Shapes.Circle:
      getCircleArea(shape);
      break;
    case Shapes.Triangle:
      getTriangleArea(shape);
      break;
    case Shapes.Rectangle:
      getRectangleArea(shape);
      break;
  }
}
