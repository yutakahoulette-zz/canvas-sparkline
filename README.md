
# canvas-sparkline

Draw a "sparkline" graph, which is a small and minimal line graph, often used to represent tweets, shares, stock values, etc, etc.

> A sparkline is a small intense, simple, word-sized graphic with typographic resolution. Sparklines mean that graphics are no longer cartoonish special occasions with captions and boxes, but rather sparkline graphics can be everywhere a word or number can be: embedded in a sentence, table, headline, map, spreadsheet, graphic. Data graphics should have the resolution of typography. 

http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR

```js
import sparkline from 'canvas-sparkline'

const data = [1,4,3,5,6,4,5,3,2] // any numbers you want
let canvas = document.querySelector('#mycanvas')

sparkline(data, canvas, {
  lineWidth: 2        // in pixels (defaults to 1)
, lineColor: 'red'    // css color value (defaults to black)
, showBaseline: false // whether to show the '0' horizontal x-axis line (defaults to true)
, showStartDot: true  // whether to show a dot at the beginning of the line (defaults to false)
, showEndDot: true    // whether to show a dot at the end of the line (defaults to true)
, width: 200          // pixel width of graph (defaults to 100)
, height: 100         // pixel height of graph (defaults to 50)
})
```

