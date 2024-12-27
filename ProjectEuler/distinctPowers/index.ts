const main = () => {
  const set = new Set<bigint>();

  for (let a = 2 ; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
      const base = BigInt(a)
      const res = base**BigInt(b)
      set.add(res)
    }
  }
  console.log(set.size)
}
main()