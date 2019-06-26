const data = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]

function findSum(data) {
  return data.map(row => {
    let big = -Infinity
    let small = Infinity
    row.forEach(num => {
      if (num > big) big = num
      if (num < small) small = num
    })
    return (big - small)
  })
}

function checkSum(data) {
  return findSum(data).reduce(add)
}

const add = (a, b) => a + b