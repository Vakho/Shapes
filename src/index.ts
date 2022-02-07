import { getArea } from "./area";
import { Circle, Triangle, Rectangle, Shapes } from "./util";

const circle: Circle = {
  type: Shapes.Circle,
  radius: 20,
};

const triangle: Triangle = {
  type: Shapes.Triangle,
  sideA: 7,
  sideB: 10,
  sideC: 5,
};

const rectangle: Rectangle = {
  type: Shapes.Rectangle,
  sideA: 20,
  sideB: 30,
};

getArea(circle);
getArea(triangle);
getArea(rectangle);
