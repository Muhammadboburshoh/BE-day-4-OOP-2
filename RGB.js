class RGB {

  R = 0
  G = 0
  B = 0

  set red (value) {

    if( this.isValid(value) ) {
      this.R = value
    }
  }
  set green (value) {

    if( this.isValid(value) ) {
      this.G = value
    }
  }
  set blue (value) {
    
    if( this.isValid(value) ) {
      this.B = value
    }
  }

  get qizil () {
    return this.R
  }

  isValid (value) {
    return Number.isInteger(value) && value >= 0 && value <=255
  }
}


const rgb = new RGB()

rgb.red = 200

console.log(rgb.qizil);