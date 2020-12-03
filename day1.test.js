const day1P1 = input => {
  const inputLength = input.length

  for (let index1 = 0; index1 < inputLength; index1++) {
    for (let index2 = 0; index2 < inputLength; index2++) {
      if (input[index1] + input[index2] === 2020) {
        return input[index1] * input[index2]
      }
    }
  }
}

it.skip('day1P1', () => {
  // Given
  const input = require('./day1-input')

  // When
  const output = day1P1(input)

  // Then
  expect(output).toBe(542619)
})

const day1P2 = input => {
  const inputLength = input.length

  for (let index1 = 0; index1 < inputLength; index1++) {
    for (let index2 = 0; index2 < inputLength; index2++) {
      for (let index3 = 0; index3 < inputLength; index3++) {
        if (input[index1] + input[index2] + input[index3] === 2020) {
          return input[index1] * input[index2] * input[index3]
        }
      }
    }
  }
}

it.skip('day1P2', () => {
  // Given
  const input = require('./day1-input')

  // When
  const output = day1P2(input)

  // Then
  expect(output).toBe(32858450)
})
