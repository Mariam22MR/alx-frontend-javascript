export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) return students.reduce((prevStudent, curStud) => prevStudent + curStud.id, 0);
  return 0;
}
