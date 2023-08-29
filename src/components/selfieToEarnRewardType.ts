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
// Healthy
// Overweight
// Obese
export const calBMIType = (bmi: number) => {
  if (bmi < 18.5){
    return {
      type: "Underweight",
      color: "#4136F1"
    }
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    return {
      type: "Healthy",
      color: "#39B3AF"
    }
  } else if (bmi > 22.9 && bmi <= 24.9) {
    return {
      type: "Overweight",
      color: "#FF9F3E"
    }
  } else {
    return {
      type: "Obese",
      color: "#F51EE2"
    }
  }
}