//  Discount Details

let price = 100;
let student = true;
let discount = true;
let discountAmount = 30;
let country = "Egypt";

// User Details

let birthDate = 2000;
let thisYear = 2024;
let theName = "Ibraheem";
let theGender = "Male";
let theAge = thisYear - birthDate;

theGenderResult = theGender === "Male" ? "Mr" : "Mrs";

document.write(`<div>`);
document.write(`<h1>Discount App</h1>`);
document.write(`<small>The Age Must be between 18 and 60</small>`);

//! Discount Condition

if (discount === true) {
  // Nested If => Age Check

  if (theAge >= 18 && theAge <= 60) {
    // Nested If => Country Check

    if (country === "Egypt") {
      // Nested If Student Check

      if (student === true) {
        price -= discountAmount + 20;
        document.write(
          `<p>Hello ${theGenderResult} ${theName} Your Age Is ${theAge}</p>`
        );
        document.write(`<p>Your Price Will be ${price}</p>`);
        document.write(`<p>You Have An Egyption Student Discount!</p>`);
      } else {
        price -= discountAmount + 10;
        document.write(
          `<p>Hello ${theGenderResult} ${theName} Your Age Is ${theAge}</p>`
        );
        document.write(`<p>Your Price Will be ${price}</p>`);
        document.write(`<p>You Have An Egyption Discount!</p>`);
      }

      // End Of Student Chceck Nested
    } else {
      price -= discountAmount;
      document.write(
        `<p>Hello ${theGenderResult} ${theName} Your Age Is ${theAge}</p>`
      );
      document.write(`<p>Your Price Will be ${price}</p>`);
      document.write(`<p>You Have An Regoler Discount!</p>`);
    }

    // End Of Country Check Nested
  } else {
    document.write(
      `<p>Hello ${theGenderResult} ${theName} Your Age Is ${theAge}</p>`
    );
    document.write(`<p>You Don't Have A Discount Becuse You Are UnderAge</p>`);
  }

  // End Of Age Check Nested
} else {
  document.write(`<p>You don't have a discount</p>`);
}
document.write(`</div>`);
