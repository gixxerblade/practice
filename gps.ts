const lookup = {
  A: 4,
  'A-': 3.7,
  'B+': 3.3,
  B: 3,
  'B-': 2.7,
  'C+': 2.3,
  C: 2,
  'C-': 1.7,
  'D+': 1.3,
  D: 1,
  'D-': 0.7,
  'F': 0,
}
type Grade = 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'F';

const calculateGPA = (grades: Grade[]): number => grades.reduce((acc, curr) => (
  Math.round((acc + lookup[curr] / grades.length) * 10) / 10
), 0)

console.log(calculateGPA(['A']));
console.log(calculateGPA(['F', 'F', 'F']));
console.log(calculateGPA(['A', 'A-', 'B+', 'B', 'B-']));
console.log(calculateGPA(['A', 'B+', 'C-', 'A']));


