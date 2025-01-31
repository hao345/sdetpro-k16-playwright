const person = {
    name: "Hao",
    grades: [9, 8, 6]
};

const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Haoo'
person2.grades = [7, 9, 9]

const person3 = JSON.parse(JSON.stringify(person))
person3.name = 'Haooo'
person3.grades = [6, 7, 8]

const bestStudentInfo = theBest([person, person2, person3])
const { bestStudent, currentHighScore } = bestStudentInfo
console.log(`The best is ${JSON.stringify(bestStudent)}`)

function theBest(students) {
    let bestStudent = students[0];
    let currentHighScore = 0;
    //truy cập từng value trong array, mà không cần thay đổi giá trị của nó trong mảng 
    //async, await
    for (const student of students) {
        const average = calculate(student);
        if (average > currentHighScore) {
            bestStudent = student;
            currentHighScore = average;
        }
    }
    return { bestStudent, currentHighScore }
};

function calculate({ grades }) {
    let totalScore = 0;
    for (const grade of grades) {
        totalScore += grade;
    }
    return totalScore
}