//  question 1
var marks1 = +(prompt("Marks 1:"));
var marks2 = +(prompt("Marks 2:"));

if (marks1 < 0 || marks1 > 100 || marks2 < 0 || marks2 > 100) {
    alert("Invalid");

} else if (marks1 < 40 || marks2 < 40) {
    alert("Fail");

} else {

    var avg = (marks1 + marks2) / 2;

    if (avg >= 75) {
        alert("Excellent");
    } else if (avg >= 60) {
        alert("Good");
    } else if (avg >= 50) {
        alert("Pass");
    } else {
        alert("Fail");
    }

    if (marks1 > 85 && marks2 > 85) {
        alert("Outstanding Performance");
    }
}

//question 2
var realUsername = "benish";
var realPassword = "22334455";

var username = prompt("Enter username:");
if (username !== realUsername) {
    alert("Invalid Username");

} else {

    var attempts = 0;

    while (attempts < 3) {

        var password = prompt("Enter password:");

        if (password === realPassword) {

            if (attempts === 0) {
                alert("Login Successful Welcome Back");
            } else {
                alert("Login Successful");
            }

            break;

        } else {
            attempts++;

            if (attempts === 3) {
                alert("Too many attempts");
            } else {
                alert("Incorrect Password");
            }
        }
    }
}

// question 3
var product = prompt("Enter product name:");

var price = 0;
var found = false;
if (product === "mobile") {
    price = 6000;
    found = true;
} 
else if (product === "laptop") {
    price = 10000;
    found = true;
} 
else if (product === "book") {
    price = 500;
    found = true;
}

if (!found) {
    alert("Product not available");

} else {

    var total = price;
    if (price > 4000) {
        alert("Premium Product Selected");
    }

    if (total > 5000) {
        total = total - (total * 15 / 100);
    } 
    else if (total > 3000) {
        total = total - (total * 10 / 100);
    }

    alert("Final Bill: " + total);
}

// question 4
var hours = +(prompt("Enter working hours:"));

// invalid check
if (hours < 0 || hours > 24) {
    alert("Invalid input");

} else {

    if (hours >= 8) {
        alert("Full Working Day");
    } 
    else if (hours >= 4) {
        alert("Partially Present");
    } 
    else {
        alert("Absent");
    }

    if (hours > 10) {
        alert("Overtime Detected");
    }
}

// question 5
var password = prompt("Enter password:");

var a = false; 
var b = false;

if (password.length < 6) {
    alert("Weak Password");

} else {

    a = true;
    if (password.includes("123")) {
        alert("Avoid common patterns");
    }

    if (a && b) {
        alert("Strong Password");
    } else {
        alert("Medium Password");
    }
}

// question 6
var balance = 50000;

var deposit = Number(prompt("Enter deposit amount:"));

if (deposit <= 0) {
    alert("Invalid amount");

} else {
    balance += deposit;

    if (deposit > 20000) {
        alert("Large Deposit Detected");
    }

    if (balance > 100000) {
        alert("High Account Balance");
    }

    alert("Updated Balance: " + balance);
}

// question 7
var present = Number(prompt("Enter days present (out of 30):"));

var totalDays = 30;

if (present < 0 || present > 30) {
    alert("Invalid input");

} else {

    var percent = (present / totalDays) * 100;

    if (percent >= 75) {
        alert("Eligible");
    } 
    else if (percent >= 50) {
        alert("Warning");
    } 
    else {
        alert("Not Eligible");
    }

    if (present === 30) {
        alert("Perfect Attendance");
    }
}

// question 8
var brand = prompt("Enter brand:");

if (brand === "Samsung") {
    var price = 60000;
    alert("Price: " + price);

    if (price > 50000) {
        alert("High-End Device");
    } 
    else if (price >= 20000) {
        alert("Mid-Range Device");
    } 
    else {
        alert("Budget Device");
    }

    alert("Top Selling Brand");

} 
else if (brand === "Apple") {
    var price = 120000;
    alert("Price: " + price);

    if (price > 50000) {
        alert("High-End Device");
    } 
    else if (price >= 20000) {
        alert("Mid-Range Device");
    } 
    else {
        alert("Budget Device");
    }

} 
else if (brand === "Xiaomi") {
    var price = 35000;
    alert("Price: " + price);

    if (price > 50000) {
        alert("High-End Device");
    } 
    else if (price >= 20000) {
        alert("Mid-Range Device");
    } 
    else {
        alert("Budget Device");
    }

} 
else {
    alert("Brand not available");
}

// question 9
var score = 0;

var a1 = "html";
var a2 = "css";
var a3 = "js";

var ans;

ans = prompt("Q1: What does HTML stand for?");
if (ans === a1) {
    score++;
}

ans = prompt("Q2: What is used for styling web pages?");
if (ans === a2) {
    score++;
}

ans = prompt("Q3: What is used for scripting in web pages?");
if (ans === a3) {
    score++;
}

if (score === 3) {
    alert("Excellent Performance");
    alert("Perfect Score");

} else if (score === 2) {
    alert("Good Job");

} else if (score === 1) {
    alert("Needs Improvement");

} else {
    alert("Try Again");
}

