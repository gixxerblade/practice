// given these two objects write a function that merges them similar to how the spread operator would work. (do not use spread)
const a = {
    a: {
      b: 'hello',
      nested: {
        c: 'typo'
      }
    },
    d: 'nerds'
  }
  const b = {
    a: {
      b: 'hello',
      nested: {
        c: 'world'
      }
    },
    d: ['nerds'],
    e: 'what'
  }
  /** should return when merging b with a
  {
    "a": {
      "b": "hello",
      "nested": {
        "c": "world"
      }
    },
    "d": [
      "nerds"
    ],
    "e": "what"
  } 
  */