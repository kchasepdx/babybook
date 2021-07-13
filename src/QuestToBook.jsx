import React, { useState, useEffect } from "react";
import BookContent from "../src/BookContent.json";

function QuestToBook(event) {
  // Accessing JSON FILE
  let BookArr = require("/Users/kristenchase/baby-book/src/BookContent.json");
  //   console.log(BookArr.content[0][2]);

  var func = BookArr.content[0][2];
  console.log(func + "(event.target.value)");

  return func + "(event.target.value)";
}
export default QuestToBook;
