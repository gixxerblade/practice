import { BunFile } from 'bun';
const file = Bun.file('./input.txt');

async function p1(file: BunFile) {
  const input = await file.text();
  const s = input.split('\n');
  let niceCount = 0;
  /**
   * It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
   * It contains at least one letter that appears twice in a row, like xx, abcdde (dd),
   * or aabbccdd (aa, bb, cc, or dd).
   * It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other
   * requirements.
   */
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    const maybeNaughtyRe = /ab|cd|pq|xy/;
    const vowelsRe = /[aeiou]/g;
    const vowels = str.match(vowelsRe);
    const hasAtLeast3Vowels = vowels && vowels.length > 2;
    const letters = str.match(/(.)\1+/g);
    const hasDoubleLetters = letters && letters.length;
    const meetsReqs = hasAtLeast3Vowels && hasDoubleLetters;
    if (meetsReqs && !maybeNaughtyRe.test(str)) {
      niceCount += 1;
    }
  }
  return niceCount;
}
p1(file).then(out => console.log(out));

async function p2(file: BunFile) {
  const input = await file.text();
  const s = input.split('\n');
  let niceCount = 0;

  /**
   * It contains a pair of any two letters that appears at least twice in the string without overlapping
   * like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
   * It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi
   * (efe), or even aaa.
   */
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    const appearsTwice = /(..).*\1/g;
    const repeating = /(.).\1/g;
    if (repeating.test(str) && appearsTwice.test(str)) {
      niceCount += 1;
    }
  }
  return niceCount;
}

p2(file).then(out => console.log(out));
