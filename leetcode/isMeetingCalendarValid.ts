export default function isMeetingCalendarValid(intervals: number[][]): boolean {
  const overlap = (interval1: number[], interval2: number[]): boolean => {
    return (
      (interval1[0] >= interval2[0] && interval1[0] < interval2[1]) ||
      (interval2[0] >= interval1[0] && interval2[0] < interval1[1])
    );
  };

  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (overlap(intervals[i], intervals[j])) {
        return false;
      }
    }
  }
  return true; 
}
// TC: O(n^2) where n is number of intervals
// SC: O(1)

export function isMeetingCalendarValidSort(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }

  return true;
}

// TC: O(n log n) due to sorting
// SC: O(1)
