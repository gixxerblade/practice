// const original = [
//   {
//        "Count": 7,
//        "Value": 120,
//        "Category": "A",
//        "GroupId": 22,
//        "Week": 50
//    },
// {
//        "Count": 6,
//        "Value": 120,
//        "Category": "A",
//        "GroupId": 23,
//        "Week": 49
//    },
// {
//        "Count": 6,
//        "Value": 120,
//        "Category": "B",
//        "GroupId": 23,
//        "Week": 49
//    }
// ]

// interface Obj {
//   Count: number;
//   Value: number;
//   Category: string;
//   GroupId: number;
//   Week: number;
// }

// const byGroupId = original.reduce((acc: {}, cur: Obj) => {
//  acc[cur.GroupId] = acc[cur.GroupId] || []
//  acc[cur.GroupId].push(cur)
//  return acc
// }, {})

// console.log(byGroupId)

var a;b=2
foo: {
  a+=2
  break foo;
  b += 4
}
console.log(a,b)

if (isLoading) {
  return <CenteredSpinner />
}

return (
  <View>
   {condition && (
     <MainComponent />
   )}
  </View>
)