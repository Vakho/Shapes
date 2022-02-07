export enum Shapes {
  Circle,
  Triangle,
  Rectangle,
}

export interface Circle {
  type: Shapes.Circle;
  radius: number;
}

export interface Triangle {
  type: Shapes.Triangle;
  sideA: number;
  sideB: number;
  sideC: number;
}

export interface Rectangle {
  type: Shapes.Rectangle;
  sideA: number;
  sideB: number;
}
