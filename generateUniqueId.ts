// naive solution
class GenerateId {
  private currentId: number;
  private listOfIds: number[];

  constructor() {
    this.currentId = 0;
    this.listOfIds = [0];
  }

  public generate (): number {
    this.currentId ++;
    this.listOfIds.push(this.currentId);
    return this.currentId;
  }

  public reset (start = 0) {
    this.currentId = start;
    this.listOfIds = [start];
    return this.currentId;
  }

  public listIds (): number[] {
    return this.listOfIds;
  }
}

// const id = new GenerateId();
// console.log(id.generate())
// console.log(id.generate())
// console.log(id.generate())
// console.log(id.generate())
// console.log(id.listIds())

// unique solution
class GenerateUniqueId {
  private currentId: string;
  private currentListOfIds: Set<string>

  constructor() {
    this.currentId;
    this.currentListOfIds = new Set();
  }

  add (newId: string) {
    const existing = this.currentListOfIds.has(newId);
    if (existing) {
      console.log('This id already exists')
      return;
    }
    this.currentListOfIds.add(newId);
  }

  list () {
    return [...this.currentListOfIds];
  }

  reset () {
    this.currentListOfIds.clear();
  }

  remove (id: string) {
    if (this.currentListOfIds.has(id)) {
      this.currentListOfIds.delete(id);
    }
  }

  getPos (id: string) {
    return [...this.currentListOfIds].indexOf(id);
  }
}

// const id = new GenerateUniqueId();
// console.log(id.list())
// console.log(id.add('123'))
// console.log(id.list())
// console.log(id.reset())

// console.log(id.add('123'))
// console.log(id.getPos('123'))

class IDManager {
  private availableIds: number[];
  private inUse: Set<number>;
  private max: number;

  constructor(max: number) {
    this.max = max;
    this.availableIds = [];
    this.inUse = new Set<number>();
  }

  alloc(): number {
    let id: number;
    if (this.availableIds.length > 0) {
      id = this.availableIds.shift()!;
    } else {
      id = this.inUse.size;
      if (id >= this.max) {
        throw new Error("No available IDs");
      }
    }
    this.inUse.add(id);
    return id;
  }

  release(id: number): void {
    if (!this.inUse.has(id)) {
      throw new Error("Invalid ID release");
    }
    this.inUse.delete(id);
    this.availableIds.push(id);
  }
}
// const ids = new IDManager(10);
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.release(0));
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.alloc());
// console.log(ids.release(2));
// console.log(ids.alloc());

const generateRandNum = (n: number, exclude: number[]) => {
  if (n === 0) {
    return 0;
  }
  let rand = 0;
  while (exclude.includes(rand)) {
    rand = Math.floor(Math.random() * n)
  }
  return rand;
}

console.log(generateRandNum(10, [0, 1]))


