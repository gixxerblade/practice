// const obj = {
//   '1': 'something',
//   '2': 'anything',
//   '3': 'nothing',
// }

// console.log(Object.values(obj).sort().join('\n'))

// let datatype: string = 'somedata'

// type Value<T> = T
// const datatypo: Value<string> = 'somedata'


// function testUniqueChars(text: string) {
//   const test = new Set();
//   let unique = true;
//   text.split('').forEach((char) => {
//     if (test.has(char)) {
//       unique = false
//     } else {
//       test.add(char)

//     }
//   })
//   return unique
// }

// console.log(testUniqueChars('Coode'))
// console.log(testUniqueChars('Code'))


// enum Countries {
//   UNITED_STATES = 'United States',
//   CANADA = 'Canada',
//   MEXICO = 'Mexico',
// }

// const CHAR_REGEX: RegExp = /.*[A-Za-z].*/;
// const US_REGEX = /(^\d{5}$)|(^\d{9}$)|(^\d{5}[ -]\d{4}$)/;
// const CA_REGEX = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
// const MX_REGEX = /^\d{5}$/;

// const validatePostalCode = (postalCode: string, country: string): boolean => {
//   if (country === Countries.CANADA) {
//     return CA_REGEX.test(postalCode);
//   }
//   if (country === Countries.MEXICO) {
//     return MX_REGEX.test(postalCode);
//   }
//   return US_REGEX.test(postalCode);
// };

// const countryMap = {
//   [Countries.UNITED_STATES]: US_REGEX,
//   [Countries.CANADA]: CA_REGEX,
//   [Countries.MEXICO]: MX_REGEX,
// }
// const validatePostalCodeTest = (postalCode, country: Countries) => countryMap[country].test(postalCode)

// console.log(validatePostalCode('90210', Countries.UNITED_STATES))
// console.log(validatePostalCodeTest('90210', Countries.UNITED_STATES))

// interface Underline<T> {
//   uniq: (arr: T[]) => T[]
// }
// const _: Underline<unknown> = {
//   uniq: (arr) => [...new Set(arr)]
// }

// console.log(_.uniq([2, 1, '2', 2, '2']))

const farms: FarmProps[] = [
  {
    id: "001",
    farmName: "farm-01",
    fields: [
      {
        id: "001",
        fieldName: "field-01",
        area: 100,
        zones: [
          {
            id: "001",
            zoneName: "zone-01",
            area: 50,
          },
          {
            id: "002",
            zoneName: "zone-02",
            area: 50,
          },
        ],
      },
    ]
  },
  {
    id: "002",
    farmName: "farm-01",
    fields: [
      {
        id: "001",
        fieldName: "field-01",
        area: 300,
        zones: [
          {
            id: "001",
            zoneName: "zone-01",
            area: 150,
          },
          {
            id: "002",
            zoneName: "zone-02",
            area: 150,
          },
        ],
      },
    ]
  }
];

interface Zone {
  id: string,
  zoneName: string,
  area: number,
}
interface Field {
  id: string,
  fieldName: string,
  area: number,
  zones?: Zone[]
}
interface FarmProps {
  id: string
  farmName: string,
  fields: Field[]
}
const findAreaAndSort = (farms: FarmProps[]): FarmProps[] => {
  return farms.sort((a, b) => {
    const largest = a.fields.reduce((acc, field) => (acc + (field.area)), 0)
    const smallest = b.fields.reduce((acc, field) => (acc + (field.area)), 0)
    return smallest - largest
  })
} 
console.log(findAreaAndSort(farms))