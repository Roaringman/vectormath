# vectormath
A vector math library. Experimenting with closure and method chaining.

To get started import the function vector2d into your project.

Now you can create a vector like so: 
let newVector = vector2d(x,y).

Immediately the unit vector and magnitude is calculated. These values can be accessed by getUnit and getMag respectively.

Chain the methods like so:
let newVector1 = vector2d(x1,y1).
let newVector2 = vector2d(x2,y2).

newVector1.add(newVector2).normalize().scale(8);
