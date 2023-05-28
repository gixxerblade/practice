const n=(x,nth)=>{
  let r = [];
  const a = x.split(',').map(Number)
  for (let i = 1; i < a.length; i++) {
    if ((i + 1) % nth === 0) {
      r.push(a[i])
    }
  }
  return r.reduce((a,b) => a + b, 0)
}

const nums1 = '232,872,696,744,456,497,40,776,858,845,637'
const nth1 = 9
console.log(n(nums1, nth1))

const nums2 = '346,544,714,631,735,584,402,283,666,119,925,97,260,723,852'
const nth2 = 13
console.log(n(nums2, nth2));

const nums3 = '215,101,422,670,836,760,419,815,451,506,257'
const nth3 = 10
console.log(n(nums3, nth3));

const nums4 = '178,832,653,223,255,637,574,478,221,462,865,788,345,210,403,513,364,397,29,490,383'
const nth4 = 8
console.log(n(nums4, nth4));
