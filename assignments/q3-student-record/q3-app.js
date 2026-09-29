const students = [
    { name: "Ayesha", rollNo: "FSWD-01", marks: 88 },
    { name: "Ali", rollNo: "FSWD-02", marks: 74 },
    { name: "Sara", rollNo: "FSWD-03", marks: 65 },
    { name: "Ahmed", rollNo: "FSWD-04", marks: 91 },
    { name: "Hina", rollNo: "FSWD-05", marks: 42 }
];

const tableBody = document.getElementById("studentTableBody");
const averageElement = document.getElementById("average");
const topScorerElement = document.getElementById("topScorer");
const sortButton = document.getElementById("sortButton");

function getGrade(marks) {
    if (marks >= 85) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "F";
    }
}

function displayStudents() {
    tableBody.innerHTML = "";

    let totalMarks = 0;
    let topStudent = students[0];

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        totalMarks = totalMarks + student.marks;

        if (student.marks > topStudent.marks) {
            topStudent = student;
        }

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const rollNoCell = document.createElement("td");
        rollNoCell.textContent = student.rollNo;

        const marksCell = document.createElement("td");
        marksCell.textContent = student.marks;

        const gradeCell = document.createElement("td");
        gradeCell.textContent = getGrade(student.marks);

        row.appendChild(nameCell);
        row.appendChild(rollNoCell);
        row.appendChild(marksCell);
        row.appendChild(gradeCell);

        tableBody.appendChild(row);
    }
    const average = totalMarks / students.length;
    averageElement.textContent = `Class Average: ${average.toFixed(1)}`;
    topScorerElement.textContent = `Top Scorer: ${topStudent.name}`;
}

function sortStudents() {
    students.sort(function (studentA, studentB) {
        return studentB.marks - studentA.marks;
    });

    displayStudents();
}
sortButton.addEventListener("click", sortStudents);
displayStudents();