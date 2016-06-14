import R from 'ramda'


// ([Number], Canvas, Object) -> Canvas
module.exports = (arr, canvas, options) => {
  if(!canvas.getContext) return
  [canvas.width, canvas.height] = [100, 50]

  const [max, min, len] = [maxAll(arr), minAll(arr), arr.length]
  const segmentLen = 100 / len
  const scaled = R.map(n => 50 - n * 50 / max, arr)

  let ctx = canvas.getContext('2d')
  ctx.beginPath()
  R.addIndex(R.map)((n, i) => ctx.lineTo(i * segmentLen, n), scaled)
  ctx.stroke()

  return canvas
}

const maxAll = arr => R.reduce(R.max, R.head(arr), R.tail(arr))
const minAll = arr => R.reduce(R.min, R.head(arr), R.tail(arr))
