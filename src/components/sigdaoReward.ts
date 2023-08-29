export const calRewardSigdaoOnSelfie = (bmi: number) => {
  if (bmi >= 18.5 && bmi <= 22.9) {
    return 5.25
  } else if (bmi > 22.9 && bmi <= 23.4 || bmi >= 18 && bmi < 18.5) {
    return 3.94
  } else if (bmi > 23.4 && bmi <= 23.7 || bmi >= 17.7 && bmi < 18) {
    return 2.63
  } else {
    return 1.31
  }
}