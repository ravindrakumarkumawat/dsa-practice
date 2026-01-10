export default function staircaseClimbingCombinations(steps) {
  function staircaseClimbingCombinationsUtil(currentStep, totalSteps) {
    if(currentStep > totalSteps) return 0
    if(currentStep === totalSteps) return 1

    return staircaseClimbingCombinationsUtil(currentStep + 1,totalSteps) +
    staircaseClimbingCombinationsUtil(currentStep + 2, totalSteps)
  }

  return staircaseClimbingCombinationsUtil(0, steps)
}

console.log(staircaseClimbingCombinations(10))