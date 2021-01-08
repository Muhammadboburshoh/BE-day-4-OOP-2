class RGB {

  R = 0
  G = 0
  B = 0

  constructor(R, G, B) {
    this.R = R
    this.G = G
    this.B = B
  }

  setValue (channel, value) {

    this[channel] = this.isValid(value) ?? this[channel]
  }

  set red (value) { 
    this.setValue("R", value)
  }

  set green (value) {
    this.setValue("G", value)
  }

  set blue (value) {
    this.setValue("B", value)
  }

  get qizil () {
    return this.R
  }

  isValid (value) {

    return Number.isInteger(value) && value >= 0 && value <= 255 ? value : undefined
  }
}


const rgb = new RGB(100, 10, 155)

console.log(rgb);