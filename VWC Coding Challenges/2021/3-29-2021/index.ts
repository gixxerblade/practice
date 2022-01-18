/* Write a JavaScript program to target a given value in a nested JSON object, based on the given key.
Example
const json = {
  key: {
    nestedKey: 'data'
  }
};
getKey(json, 'nestedKey') => 'data'

 */

const getKey = (json: any, key: string): any => {
  if (json[key]) {
    return json[key];
  }
  for (const prop in json) {
    if (prop !== key) {
      return getKey(json[prop], key);
    } else {
      return json[prop];
    }
  }
};

const json = {
  key: {
    nestedKey: 'data',
    deeply: [
      {
        a: 'b',
        nested: {
          c: 'd',
          obj: {
            f: 'g',
            toget: {
              i: 'j',
            },
          },
        },
      },
    ],
  },
};
console.log(getKey(json, 'toget'));
