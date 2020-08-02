/**
 * Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.
 *
 * Inputs:
 * a = arrival time array example: a = [1, 0, 0, -1] explanation: 1 = 1 minute late, 0 = 0 minute late, -1 early
 * k = # of late (> 0) threshold for cancellation
 */

let angryProfessor = (k, a) => {
  let count = 0;
  a.forEach((element) => {
    element <= 0 && count++;
  });
  return count < k ? "YES" : "NO";
};
console.log(angryProfessor(3, [-1, -3, 4, 2]));
console.log(angryProfessor(2, [0, -1, 2, 1]));
