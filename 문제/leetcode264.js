var nthUglyNumber = function(n) {
  var answersList = [1];
  var ind2 = 0;
  var ind3 = 0;
  var ind5 = 0;

  while (answersList.length < n) {
    let multipleTwo = answersList[ind2] * 2;
    let multipleThree = answersList[ind3] * 3;
    let multipleFive = answersList[ind5] * 5;
    let nextSmallestAnswer = Math.min(multipleTwo, multipleThree, multipleFive);

    if (nextSmallestAnswer % 2 === 0) ind2++;
    if (nextSmallestAnswer % 3 === 0) ind3++;
    if (nextSmallestAnswer % 5 === 0) ind5++;
    answersList.push(nextSmallestAnswer);
  }
  return answersList[n - 1];
};
