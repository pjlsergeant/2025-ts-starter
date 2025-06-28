#!/usr/bin/env -S npx tsx

import { calculateArea, calculatePerimeter, isValidTriangle } from '../src/triangle.js';

const sides = [3, 4, 5];
console.log(
  `Triangle ${sides}: valid=${isValidTriangle(...sides)}, perimeter=${calculatePerimeter(...sides)}, area=${calculateArea(3, 4)}`,
);
