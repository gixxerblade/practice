const gradingStudents = (grades: number[]) => {
  return grades.map((grade) => {
    const closestM5 = (grade + 5) - (grade % 5)
    if (grade < 40) {
      return grade
    }
    if (closestM5 - grade < 3 && grade >= 40) {
      return closestM5
    }
    return grade
  })
}

const grades = [73,67,38,33]
console.log(gradingStudents(grades));
