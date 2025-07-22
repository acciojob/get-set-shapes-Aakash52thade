//complete this code
class Rectangle {
	constructor(width, height){
		this._width;
		this._height;
	}
	get width(){
		this._width;
	}

	get height(){
       this._height;
	}

	get getArea(){
		return this._width * this._height;
	}
}

class Square extends Animal {
	constructor(side){
		super(side, side);
		this._side = side;
	}
	getPerimeter(side){
		return this._side * 4;
	}
}

const reactangle = new Rectangle(5,10);
console.log(reactangle.width);
console.log(reactangle.height);
console.log(reactangle.getArea());

const square = new Square(7);
console.log(Square.width);
console.log(Square.height);
console.log(Square.getArea());
console.log(Square.getPerimeter());








// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
