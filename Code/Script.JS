"use strict";
////Event listener function which is what's called when sumbit is pressed
window.onload = function () {
  let submit = document.getElementById("submit");
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const inputtedName = document.getElementById("GivenName");
    const name = inputtedName.value;
    const inputtedEmail = document.getElementById("GivenEmail");
    const email = inputtedEmail.value;
    const inputtedCardNum = document.getElementById("GivenCardNum");
    const cardNum = inputtedCardNum.value;
    const subject = "Welcome your now a member of this group";
    const body = `These are the details stored in our system : (Name: ${name}\n Email: ${email}\n Card Number: ${cardNum}) Press send if you would like to recieve this email`;
    const mailtoLink = `mailto:${email}\n?subject=${subject}&body=${body}`;

    ////Checks if all inputs are validated and sends email if it is or highlights pink if its not
    if (
      CheckName(inputtedName) === true &&
      CheckCardNum(inputtedCardNum) === true &&
      CheckEmail(email) === true
    ) {
      window.location.href = mailtoLink;
    } else {
      if (CheckName(inputtedName) === false) {
        document.getElementById("GivenName").style.backgroundColor = "pink";
      }
      if (CheckEmail(email) === false) {
        document.getElementById("GivenEmail").style.backgroundColor = "pink";
      }
      if (CheckCardNum(GivenCardNum) === false) {
        document.getElementById("GivenCardNum").style.backgroundColor = "pink";
        alert("The card num must be 16 characters");
      }
    }
  });
};
////Checks if the name is validated i.e needs a firstname and surname and no special characters
function CheckName(inputtedName) {
  inputtedName = inputtedName.value;
  inputtedName = inputtedName.toString();
  let Valid = true;
  let nameParts = inputtedName.split(" ");
  if (nameParts.length > 1) {
    const surname = nameParts[nameParts.length - 1];
    const firstname = nameParts[0];
    if (surname.length > 1 && firstname.length > 1) {
      Valid = true;
    } else {
      Valid = false;
    }
  } else {
    Valid = false;
  }

  const specialChars = "[#$%&'*+/?=^_`{|}~]";

  for (let i = 0; i < inputtedName.length; i++) {
    if (specialChars.includes(inputtedName[i])) {
      Valid = false;
    }
  }
  return Valid;
}

////checks if the email entered is validated
function CheckEmail(inputtedEmail) {
  let Valid = true;
  inputtedEmail = inputtedEmail.toString();
  if (
    inputtedEmail.substring(inputtedEmail.length - 4, inputtedEmail.length) !==
    ".com"
  ) {
    Valid = false;
  }
  if (inputtedEmail[inputtedEmail.length - 5] === "@") {
    Valid = false;
  }
  if (inputtedEmail[0] === "@") {
    Valid = false;
  }
  let found = 0;
  for (let i = 0; i < inputtedEmail.length; i++) {
    if (inputtedEmail[i] === "@") {
      found = found + 1;
    }
  }
  if (found !== 1) {
    Valid = false;
  }
  console.log(Valid);

  if (Valid === true) {
    return true;
  } else {
    return false;
  }
}

function CheckCardNum(inputtedCardNum) {
  ///check if the card numbers have a length of 16
  inputtedCardNum = inputtedCardNum.value;
  inputtedCardNum = inputtedCardNum.toString();

  if (inputtedCardNum.length !== 16) {
    return false;
  } else {
    return true;
  }
}

////on blur validation for name
function OnBlurCheckName() {
  let inputtedNameElement = document.getElementById("GivenName");
  let inputtedName = inputtedNameElement.value;
  inputtedName = inputtedName.toString();
  let Valid = true;
  let nameParts = inputtedName.split(" ");
  if (nameParts.length > 1) {
    const surname = nameParts[nameParts.length - 1];
    const firstname = nameParts[0];
    if (surname.length > 1 && firstname.length > 1) {
      Valid = true;
    } else {
      Valid = false;
    }
  } else {
    Valid = false;
  }

  const specialChars = "[#$%&'*+/?=^_`{|}~]";

  for (let i = 0; i < inputtedName.length; i++) {
    if (specialChars.includes(inputtedName[i])) {
      Valid = false;
    }
  }

  if (Valid === false) {
    document.getElementById("GivenName").style.backgroundColor = "pink";
  } else {
    document.getElementById("GivenName").style.backgroundColor = "White";
  }
}

////on blur validation for card number
function onBlurCheckCard() {
  let Valid = true;
  let inputtedCardNumElement = document.getElementById("GivenCardNum");
  let inputtedCardNum = inputtedCardNumElement.value;
  inputtedCardNum = inputtedCardNum.toString();

  ///check if the card numbers have a length of 16
  if (inputtedCardNum.length !== 16) {
    Valid = false;
  }

  if (Valid === false) {
    document.getElementById("GivenCardNum").style.backgroundColor = "pink";
  } else {
    document.getElementById("GivenCardNum").style.backgroundColor = "White";
  }
}
