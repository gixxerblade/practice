const expect = (input) => {
  return {
    toBe: (inputCheck) => {
      try {
        if (input === inputCheck) return `✅: Values match: ${true}`;
        else {
          throw new Error("false");
        }
      } catch (error) {
        return `❌: Values match: ${error.message}`;
      }
    },
  };
};
console.log(expect(3).toBe(4)); //false
console.log(expect(3).toBe(3)); //true
