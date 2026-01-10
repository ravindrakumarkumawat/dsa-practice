export default function staircaseClimbingCombinations(steps: number): number {
  return climbFromStep(0, steps);
}

// Helper function using recursion to find the number of ways from step i to n
function climbFromStep(currentStep: number, totalSteps: number): number {
  // If current step exceeds total steps, no valid way
  if (currentStep > totalSteps) {
    return 0;
  }
  // If current step equals total steps, one valid way found
  if (currentStep === totalSteps) {
    return 1;
  }
  // Sum of ways by taking 1 step or 2 steps
  return (
    climbFromStep(currentStep + 1, totalSteps) +
    climbFromStep(currentStep + 2, totalSteps)
  );
}

export function staircaseClimbingCombinationsDp(steps: number): number {
  // Create an array 'dp' of size n+1 initialized with -1
  // This array will store the number of distinct ways to reach each step
  const dp: number[] = new Array(steps + 1).fill(-1);

  // Base cases
  // There is 1 way to reach step 0 (do nothing)
  dp[0] = 1;
  // There is 1 way to reach step 1 (a single step)
  dp[1] = 1;

  // Fill the dp array using the recurrence relation
  // dp[i] = dp[i-1] + dp[i-2]
  // This relation comes from the fact that you can reach step i either from step i-1 or step i-2
  for (let i = 2; i <= steps; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // The value at dp[n] will be the number of distinct ways to reach the top of the staircase
  return dp[steps];
}



console.log(staircaseClimbingCombinations(10));
console.log(staircaseClimbingCombinationsDp(10));