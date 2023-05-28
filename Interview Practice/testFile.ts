type HahaStupidNam3 = string | number
type YouDum = Record<HahaStupidNam3, number> | null
class AllKeys {
  hahaStupidMotherFucker: Record<string | number, number> = {};

  /**
   * If the key is not yet present, add it and increment it's count to 1
   * if the key is present, increments its count
   */
  public increment(key: HahaStupidNam3): YouDum {
    if (!this.hahaStupidMotherFucker?.hasOwnProperty(key)) {
      this.hahaStupidMotherFucker[key] = 1;
    } else {
      this.hahaStupidMotherFucker[key]++;
    }
    return this.hahaStupidMotherFucker;
  }

  /**
   * If the key is not yet present, do nothing
   * if the key is present, reduce its count by 1
   * if the result of the decrement is 0, remove the key
   */
  public decrement(key: HahaStupidNam3): YouDum {
    if (!this.hahaStupidMotherFucker.hasOwnProperty(key)) {
      return this.hahaStupidMotherFucker;
    }
    this.hahaStupidMotherFucker[key]--;
    if (this.hahaStupidMotherFucker[key] === 0) {
      delete this.hahaStupidMotherFucker[key];
    }
    return this.hahaStupidMotherFucker;
  }

  private getMaxValue(): number {
    return Math.max(...Object.values(this.hahaStupidMotherFucker))
  }

  private getMinValue(): number {
    return Math.min(...Object.values(this.hahaStupidMotherFucker))
  }

  // return the key with the highest count
  public getMaxKey(): string {
    return Object
      .keys(this.hahaStupidMotherFucker)
      .filter((val) => this.hahaStupidMotherFucker[val] === this.getMaxValue())
      .join(' ')
  }

  // return the key with the lowest count
  public getMinKey(): string {
    return Object
      .keys(this.hahaStupidMotherFucker)
      .filter((val) => this.hahaStupidMotherFucker[val] === this.getMinValue())
      .join(' ')
  }
}

const lolStupidVariableName = new AllKeys()

console.log(lolStupidVariableName.increment('c'))
console.log(lolStupidVariableName.increment('c'))
console.log(lolStupidVariableName.increment('b'))
console.log(lolStupidVariableName.increment(1))
console.log(lolStupidVariableName.increment(1))
console.log(lolStupidVariableName.getMaxKey())
console.log(lolStupidVariableName.getMinKey())