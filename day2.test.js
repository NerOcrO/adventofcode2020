const day2P1 = input => {
  let correctPasswordNumber = 0

  for (let index = 0; index < input.length; index++) {
    const splitBySpace = input[index].split(' ')
    const output = splitBySpace[2].match(new RegExp(splitBySpace[1][0], 'g'))
    const range = splitBySpace[0].split('-')

    if (output && output.length >= range[0] && output.length <= range[1]) {
      correctPasswordNumber++
    }
  }

  return correctPasswordNumber
}

it.skip('day2P1', () => {
  const input = require('./day2-input')

  // When
  const output = day2P1(input)

  // Then
  expect(output).toBe(2)
})

const day2P2 = input => {
  let correctPasswordNumber = 0

  for (let index = 0; index < input.length; index++) {
    const splitBySpace = input[index].split(' ')
    const range = splitBySpace[0].split('-')

    if (
      splitBySpace[2][range[0] - 1] === splitBySpace[1][0] && splitBySpace[2][range[1] - 1] !== splitBySpace[1][0] ||
      splitBySpace[2][range[0] - 1] !== splitBySpace[1][0] && splitBySpace[2][range[1] - 1] === splitBySpace[1][0]
    ) {
      correctPasswordNumber++
    }
  }

  return correctPasswordNumber
}

it.skip('day2P2', () => {
  // Given
  const input = require('./day2-input')

  // When
  const output = day2P2(input)

  // Then
  expect(output).toBe(1)
})
