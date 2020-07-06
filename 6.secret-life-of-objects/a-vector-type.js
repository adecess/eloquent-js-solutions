class Vec {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    plus(vector) {
        return {
            x: this.x + vector.x,
            y: this.y + vector.y
        }
    }
    minus(vector) {
        return {
            x: this.x - vector.x,
            y: this.y - vector.y
        }
    }
    get length() {
        return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2), 0.5)
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);