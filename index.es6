import R from 'ramda'

const log = console.log.bind(console)

// [Number] -> CanvasRendering
// 
module.exports = (arr, canvasID, options) => {
  let canvas = document.getElementById(canvasID)
  if(!canvas.getContext) return
  canvas.width = 200
  canvas.height = 100

  // take diff of arr len and 200 
  // divide 200 by diff

  const max = maxAll(arr)
  const min = minAll(arr)
  const len = arr.length
  const segmentLen = 200 / len
  const scaled = R.map(n => 100 - n * 100 / max, arr)

  let ctx = canvas.getContext('2d')
  ctx.beginPath()
  R.addIndex(R.map)(
    (n, i) => ctx.lineTo(i * segmentLen, n)
  , scaled
  )

  ctx.stroke()

  return canvas
}

const maxAll = arr => R.reduce(R.max, R.head(arr), R.tail(arr))
const minAll = arr => R.reduce(R.min, R.head(arr), R.tail(arr))

