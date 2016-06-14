var assert = require('assert')
var R = require("ramda")

var sparkline = require('../')

function createCanvas(id) {
  let canvas = document.createElement('canvas')
  canvas.id = id
  document.body.appendChild(canvas)
  return canvas
}

test('it renders data with length smaller than 200', () => {
  let canvas = createCanvas('narrow')
  sparkline([3, 7, 4, 2, 4, 6, 10, 1, 3], canvas)
})

test('it renders data with length 200', () => {
  let canvas = createCanvas('twoHundred')
  let ns = R.map(
    () => Math.round(Math.random() * 300)
  , R.range(0, 100)
  )
  sparkline(ns, canvas)
})

test('it renders data with length greater than 200', () => {
  let canvas = createCanvas('fourHundred')
  let ns = R.range(0, 400)
  sparkline(ns, canvas)
})

