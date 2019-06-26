
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

const row1diff = Math.max.apply(Math,data[0]) - Math.min.apply(Math,data[0])
const row2diff = Math.max.apply(Math,data[1]) - Math.min.apply(Math,data[1])
const row3diff = Math.max.apply(Math,data[2]) - Math.min.apply(Math,data[2])
const row4diff = Math.max.apply(Math,data[3]) - Math.min.apply(Math,data[3])
const row5diff = Math.max.apply(Math,data[4]) - Math.min.apply(Math,data[4])

const checksum = row1diff + row2diff + row3diff + row4diff + row5diff
