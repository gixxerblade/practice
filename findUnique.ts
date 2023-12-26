type Obj = {
  [key: string]: number,
}
const findUnique = (str): number => {
  const obj: Obj = {};
  let i: number = 1;
  for (const char of str) {
    obj[char] = obj[char] + 1 || 1
  }

  const letter = Object.keys(obj).find((val) => obj[val] === 1)
  return str.indexOf(letter) + 1
}
const string = 'udoucoifmplrvxovfnnbntbybyqcqmdcuatvouvshqekyxivabrbgykdnwfaoretxydbgmssioighlkivgpsydntghrmsxhfmvqvuvdmcuxxpyhmallfnrnsnmvribyosaaurivhmbpdnuaigydkswevuonxrpomsovpadednemetoxsvcoevorybaysvrpsfhruupkqittvfgfsxtkufohxbanqsmovfrtgadniuvhkmmxsycybfaqybichgkbkfeisvtmtfhdunuonumpqhdrrkxkigxthpumtegmxughwnklxlssccvvqacuupoevawmaredahhaeaicnxyaaxdnvbqemhnfsbhdxiifixsdmkhwtuqilhsroiyoopcnvhhdndoihossofwpkolaosgeufyncidtarvpapnrxkmikwdrkcipswtqdeouhrsyhcvhsioyagiqohshkkldditobcowampdwivertdsubuxfbbnrhuaqilaxnvvdvhyqoblxgdqxstxslwamsgbvrdopbuqletdnkxsdhniahfyaftruuvccsumecosaqaromcnviciqrynoagbcafbovytdseeemdihcrifhyacooccmsqbnbouboksonsfsvcpekmilihagirwhdvulhbunbvbrxdcbeqacidgchlhhqkcysspiftbsmeocoxredsbxbmyrwudvwolfdhyoocrnduysiteadcnltuqddnyykoswburrdisibciyoxkkmdfyirmfnrhhvmayypdlwiincmhbgmliiumaqihvkshvpcsqsbcoafrscnywvvtxhuscwoiskvcubemlaixkiiiixhoomoebrbbnlinuxorbsiaihxfmcocrdbtwonekihofnafgntxcyuchwersbmbfcrefbimoohctsupmbvluafpesashansrdmruxonilpkwovbdiaucaaiqavvrdtbuboqvurmhthyyblmhvuppeaxdrhefdatpviabctauvsonj'

// console.log(findUnique(string));
// console.log(findUnique('leetcode'));