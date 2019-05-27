export const vector2d = function (qx, qy, px = null, py = null) {

    //let v = px != null & py != null ? { "x": px - qx, "y": py - qy } : { "x": qx, "y": qy };
    let x = qx;
    let y = qy;

    const add = function (other) {
        this.x = this.x + other.x;
        this.y = this.y + other.y;
        return this;
    }

    const substract = function (other) {
        this.x = this.x - other.x;
        this.y = this.y - other.y;
        return this;
    }

    const dir = function (other) {
        const thetaT = (other.y - y) / (other.x - x);
        derived["getDir"] = Math.atan(thetaT);
        return this;
    }

    const normalize = function () {
        this.x = this.x / derived["getMag"];
        this.y = this.y / derived["getMag"];
        return this;
    }

    const scale = function (scalar) {
        this.x = this.x * scalar;
        this.y = this.y * scalar;
        return this;
    }

    const vec = function(){
        return {"x" : this.x, "y" : this.y}
    }

    //Add functions to object
    const derived = { x, y, dir, scale, add, normalize, substract, vec };

    derived["getMag"] = Math.sqrt((x) * (x) + (y) * (y));
    derived["getUnit"] = { "x": x / derived["getMag"], "y": y / derived["getMag"] };

    return derived;
};

function radToDeg(val) {
    return val * 180 / Math.PI;
}