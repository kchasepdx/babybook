import React from "react";

function GetNumMonths(babyBDay) {
  var today = new Date();
  var birthDate = new Date(babyBDay + " 00:");
  var dateOfBday = birthDate.getDate();
  var dateOfNow = today.getDate();
  var numOfMonths;

  if (dateOfBday <= dateOfNow) {
    numOfMonths =
      today.getMonth() -
      birthDate.getMonth() +
      12 * (today.getFullYear() - birthDate.getFullYear());
  } else {
    numOfMonths =
      today.getMonth() -
      1 -
      birthDate.getMonth() +
      12 * (today.getFullYear() - birthDate.getFullYear());
  }

  return numOfMonths;
}

export default GetNumMonths;
