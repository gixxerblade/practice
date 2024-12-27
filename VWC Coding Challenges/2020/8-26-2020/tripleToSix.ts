//Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

// three-digit hexadecimal which is expanded to define the six-digit color where each digit is repeated once; thus #RGB defines to the color #RRGGBB.

export const tripleToSix = (code: string) => {
  const re = /^#([A-Fa-f0-9]{3})$/g;
  if (!re.test(code)) return new Error("Must be a 3-digit color code. Example: #fff");
  const arr = code.split("");
  const hashtag = !!arr.length ? arr.shift() : '';
  const res = arr.reduce((acc:string[], curr) => acc.concat([curr, curr]), []);
  res.unshift(hashtag as string)
  return res.join('')
};
