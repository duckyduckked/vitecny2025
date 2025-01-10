export const generate4DNumbers = (
  alphabet,
  lastName,
  birthYear,
  homeCleaning
) => {
  let numbers = 0;
  const firstAlphaAscii = alphabet.charCodeAt(0);
  const firstDigitOfAscii = Math.floor(firstAlphaAscii / 10);
  const secondDigitOfAscii = firstAlphaAscii % 10;
  const lengthOfLastName = lastName.replace(/\s+/g, "").length;
  const birthYearString = birthYear.toString();
  const firstBirthYearNumber = Number(birthYearString[0]);
  const secondBirthYearNumber = Number(birthYearString[1]);
  const thirdBirthYearNumber = Number(birthYearString[2]);
  const fourthBirthYearNumber = Number(birthYearString[3]);

  let homeCleaningNumber = 0;
  console.log(lengthOfLastName);
  // Determine homeCleaningNumber using a switch case
  switch (homeCleaning) {
    case "everyday":
      homeCleaningNumber = 1;
      break;
    case "every-other-day":
      homeCleaningNumber = 2;
      break;
    case "once-a-week":
      homeCleaningNumber = 3;
      break;
    case "once-every-2-weeks":
      homeCleaningNumber = 4;
      break;
    case "once-a-month":
      homeCleaningNumber = 5;
      break;
    case "no-regular-cleaning":
      homeCleaningNumber = 6;
      break;
    default:
      homeCleaningNumber = 0; // Default value for other cases
  }

  // First lucky number

  let startingPoint = 0;
  switch (fourthBirthYearNumber) {
    case 0:
      startingPoint = 1000;
      break;
    case 1:
      startingPoint = 2000;
      break;
    case 2:
      startingPoint = 3000;
      break;
    case 3:
      startingPoint = 4000;
      break;
    case 4:
      startingPoint = 5000;
      break;
    case 5:
      startingPoint = 6000;
      break;
    case 6:
      startingPoint = 7000;
      break;
    case 7:
      startingPoint = 8000;
      break;
    case 8:
      startingPoint = 9000;
      break;
    case 9:
      startingPoint = 5500;
      break;
    default:
      startingPoint = 0; // Default value for other cases
  }

  numbers = Math.round(
    startingPoint / homeCleaningNumber +
      firstDigitOfAscii * secondDigitOfAscii +
      birthYear / lengthOfLastName
  );

  if (numbers < 1000) {
    numbers = numbers + 1000 * 3;
  } else if (numbers > 9999) {
    numbers = numbers / 2;
  }
  // if (secondBirthYearNumber == 9) {
  //   numbers = Math.round(
  //     ((numbers + fourthBirthYearNumber + firstBirthYearNumber) *
  //       homeCleaningNumber) /
  //       2 +
  //       2000 +
  //       thirdBirthYearNumber
  //   );
  // } else {
  //   numbers = Math.round(
  //     ((numbers + fourthBirthYearNumber + firstBirthYearNumber) *
  //       homeCleaningNumber) /
  //       2 +
  //       2150 +
  //       thirdBirthYearNumber +
  //       Number(birthYearString * 2)
  //   );
  // }

  console.log(numbers);
  return numbers;
};
