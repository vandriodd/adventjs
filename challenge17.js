function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const resultIntervals = [];
  let firstInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] <= firstInterval[1]) {
      firstInterval[1] = Math.max(firstInterval[1], interval[1]);
    } else {
      resultIntervals.push(firstInterval);
      firstInterval = interval;
    }
  }
  resultIntervals.push(firstInterval);
  return resultIntervals;
}
