import { createHash } from 'crypto';

async function findMD5Hash(secret: string, numZeros: number) {
  const prefix = '0'.repeat(numZeros);
  let counter = 0;

  while (true) {
    const input = secret + counter;
    const hash = createHash('md5').update(input).digest('hex');

    if (hash.startsWith(prefix)) {
      return counter;
    }
    counter++;
  }
}

// Part 1
findMD5Hash('yzbqklnj', 5).then(out => console.log(out));
// Part 2
findMD5Hash('yzbqklnj', 6).then(out => console.log(out));
