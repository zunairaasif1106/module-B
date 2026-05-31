//question 1
let subject1 = 85; 
let subject2 = 90;
let subject3 = 78;
const totalMarks = subject1 + subject2 + subject3;
const percentage = (totalMarks / 300) * 100; 
let grade;
if (percentage >= 90) {
  grade = 'A';
} else if (percentage >= 80) {
  grade = 'B';
} else if (percentage >= 70) {
  grade = 'C';
}
else if (percentage >= 60) {
  grade = 'D';
} else {
  grade = 'Fail';
}
document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Percentage: ${percentage.toFixed(2)}%<br>`);
document.write(`Grade: ${grade}<br>`);

//question 2
function myReduce(arr, type) {
    let result;
    if (type === "sum") {
        result = 0;
        for (let i = 0; i < arr.length; i++) {
            result = result + arr[i];
        }
    }
    if (type === "multiply") {
        result = 1;

        for (let i = 0; i < arr.length; i++) {
            result = result * arr[i];
        }
    }
    return result;
}
let nums = [1, 2, 3, 4];
document.write(myReduce(nums, "sum") + "<br>");
document.write(myReduce(nums, "multiply"));

//question 3
let arr = [1, 2, 3, 4, 5];
let result = [];
while (arr.length > 0) {
    let a = arr.pop();
    result.push(a);
}
arr = result;
document.write(arr);

//question 4
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [];
for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
}
document.write(merged);

//question 5
let sentence = "hello world";
let words = sentence.split(" ");
let result = "";
for (let i = words.length - 1; i >= 0; i--) {
    result = result + words[i] + " ";
}
document.write(result);

//question 6
console.log("VAR:", a, "| LET:", b, "| CONST:", c);
var a = 10;
let b = 20;
const c = 30;
function hello() {
    return "Hello from function";
}
console.log("FUNCTION:", hello());

//question 7
showResult();
function showResult() {
    console.log("Marks:", marks);
    var marks = 60;
    if (marks >= 50) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }
}

//question 8
function generateEmail(name, emailType) {
    let message;
    if (emailType === "welcome") {
        message = `
        Hello ${name},
        Welcome to our website.
        `;
    }
    else if (emailType === "order") {
        message = `
        Hello ${name},
        Your order has been confirmed.
        `;
    }
    return message;
}
document.write(generateEmail("Guriya", "welcome"));
