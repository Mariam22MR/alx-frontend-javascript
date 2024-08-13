export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) return students.reduce((prevStud, curStud) => prevStud + curStud.id, 0);
  return 0;
}
