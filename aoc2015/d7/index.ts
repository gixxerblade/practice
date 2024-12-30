import { BunFile } from 'bun';
const file = Bun.file('./input.txt');

async function parseInstructions(file: BunFile) {
  const input = await file.text();
  return input.split('\n').map(line => {
    const parts = line.split(' -> ');
    const output = parts[1];
    const inputs = parts[0].split(' ');
    if (inputs.length === 1) {
      return { op: 'ASSIGN', inputs, output };
    }
    if (inputs[0] === 'NOT') {
      return { op: 'NOT', inputs: [inputs[1]], output };
    }
    return {
      op: inputs[1],
      inputs: [inputs[0], inputs[2]],
      output,
    };
  });
}

async function p1(file: BunFile) {
  const instructions = await parseInstructions(file);
  const wires = new Map();
  while (instructions.length > 0) {
    for (let i = instructions.length - 1; i >= 0; i--) {
      const inst = instructions[i];
      const hasInputs = inst.inputs.every(input => /^\d+$/.test(input) || wires.has(input));

      if (hasInputs) {
        let value = 0;
        switch (inst.op) {
          case 'ASSIGN':
            value = /^\d+$/.test(inst.inputs[0])
              ? parseInt(inst.inputs[0])
              : wires.get(inst.inputs[0])!;
            break;
          case 'AND':
            const v1 = /^\d+$/.test(inst.inputs[0])
              ? parseInt(inst.inputs[0])
              : wires.get(inst.inputs[0])!;
            value = v1 & wires.get(inst.inputs[1])! & 0xffff;
            break;
          case 'OR':
            value = (wires.get(inst.inputs[0])! | wires.get(inst.inputs[1])!) & 0xffff;
            break;
          case 'LSHIFT':
            value = (wires.get(inst.inputs[0])! << parseInt(inst.inputs[1])) & 0xffff;
            break;
          case 'RSHIFT':
            value = (wires.get(inst.inputs[0])! >>> parseInt(inst.inputs[1])) & 0xffff;
            break;
          case 'NOT':
            value = ~wires.get(inst.inputs[0])! & 0xffff;
            break;
        }
        wires.set(inst.output, value);
        instructions.splice(i, 1);
      }
    }
  }
  return wires.get('a');
}

p1(file).then(o => console.log(o));

async function p2(file: BunFile) {
  // Get initial wire 'a' value
  const wireA = await p1(file);

  // Reset and rerun with new 'b' value
  const instructions = await parseInstructions(file);
  const wires = new Map<string, number>();
  wires.set('b', wireA); // Override b with previous 'a' value

  while (instructions.length > 0) {
    for (let i = instructions.length - 1; i >= 0; i--) {
      const inst = instructions[i];
      if (inst.output === 'b') {
        instructions.splice(i, 1);
        continue;
      }

      const hasInputs = inst.inputs.every(input => /^\d+$/.test(input) || wires.has(input));

      if (hasInputs) {
        let value = 0;
        switch (inst.op) {
          case 'ASSIGN':
            value = /^\d+$/.test(inst.inputs[0])
              ? parseInt(inst.inputs[0])
              : wires.get(inst.inputs[0])!;
            break;
          case 'AND':
            const v1 = /^\d+$/.test(inst.inputs[0])
              ? parseInt(inst.inputs[0])
              : wires.get(inst.inputs[0])!;
            value = v1 & wires.get(inst.inputs[1])! & 0xffff;
            break;
          case 'OR':
            value = (wires.get(inst.inputs[0])! | wires.get(inst.inputs[1])!) & 0xffff;
            break;
          case 'LSHIFT':
            value = (wires.get(inst.inputs[0])! << parseInt(inst.inputs[1])) & 0xffff;
            break;
          case 'RSHIFT':
            value = (wires.get(inst.inputs[0])! >>> parseInt(inst.inputs[1])) & 0xffff;
            break;
          case 'NOT':
            value = ~wires.get(inst.inputs[0])! & 0xffff;
            break;
        }
        wires.set(inst.output, value);
        instructions.splice(i, 1);
      }
    }
  }
  return wires.get('a');
}

p2(file).then(o => console.log('part 2 %s', o));
