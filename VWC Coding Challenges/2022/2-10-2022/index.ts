/**
 * Write a JavaScript program to convert a number in bytes to a human-readable string.
 * Input
 * console.log(prettyBytes(1000));
 * console.log(prettyBytes(-27145424323.5821, 5));
 * console.log(prettyBytes(123456789, 3, false));
 * Output
 * 1 KB
 * -27.145 GB
 * 123MB
 */


const prettyBytes = (num: number, places?: number, noSpace: boolean = true) => {
  const kb = 1000,
    mb = 1000 * kb,
    gb = 1000 * mb,
    tb = 1000 * gb,
    pb = 1000 * tb,
    ex = 1000 * pb;
  const abbreviation = {
    KB: 'KB',
    MB: 'MB',
    GB: 'GB',
    TB: 'TB',
    PB: 'PB',
    EX: 'EB',
  }
  const statement = (num, dataType, abb) => {
    const sign = Math.sign(num);
    return `${places ? ((dataType / num) * sign)
      .toPrecision(places) : (dataType / num) * sign}${noSpace
        ? `${abbreviation[abb]}`
        : ` ${abbreviation[abb]}`}`
  }
  const absNum = Math.abs(num)
  switch (true) {
    case absNum <= kb:
      return statement(num, kb, 'KB')
    case absNum <= mb && absNum > kb:
      return statement(num, mb, 'MB')
    case absNum <= gb && absNum > mb:
      return statement(num, gb, 'GB')
    case absNum <= tb && absNum > gb:
      return statement(num, tb, 'TB')
    case absNum <= pb && absNum > tb:
      return statement(num, pb, 'PB')
    case absNum <= ex && absNum > pb:
      return statement(num, ex, 'EX')
    default:
      break;
  }
}
console.log(prettyBytes(1000));
console.log(prettyBytes(-27145424323.5821, 5));
console.log(prettyBytes(123456789, 3, false));