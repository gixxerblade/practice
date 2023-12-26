function reverseBits(n: number): number {
  const bin = n.toString(2).padStart(32, '0');
	return parseInt(bin.split('').reverse().join(''), 2)
};

console.log(reverseBits(0b00000010100101000001111010011100));

function reverseString(s: string[]): void {
  console.log(s.reverse().join(''))
};