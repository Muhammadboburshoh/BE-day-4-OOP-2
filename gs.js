class Axis {

  get cube () {
    return this.x * this.y
  }

  set cube (x) {

    if(!(x%2)) {
      this.x = x/2
      this.y = x/2
    }
  }

}

const axis = new Axis()

axis.x = 2
axis.y = 2
axis.z = 0

axis.cube = 6

console.log(axis.cube)