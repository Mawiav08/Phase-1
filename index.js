function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else if (mark < 40) {
        return 'E';
    }
}

function main() {
    while (true) {
        let input = prompt("Enter student's mark (between 0 and 100):");
        let mark = parseFloat(input);

        if (!isNaN(mark) && mark >= 0 && mark <= 100) {
            let grade = calculateGrade(mark);
            console.log(`The grade for ${mark} is ${grade}`);
            break;
        } else {
            alert("Please enter a valid mark between 0 and 100.");
        }
    }
}

main();
