let count = 0
let line = []

function takeANumber () {
    count += 1
    line.push(count)
    return `Your number is: ${count}`
}

console.log(takeANumber())
console.log(takeANumber())
console.log(takeANumber())
console.log(nowServing(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(takeANumber())

function nowServing (arrayOfPeople) {
  if (arrayOfPeople.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = arrayOfPeople.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(line) {
  var returnedLine = 'The line is currently:'
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < line.length; i++) {
      returnedLine += ` ${i + 1}. ${line[i]},`
    }
  }
  return returnedLine.slice(0, -1)
}
