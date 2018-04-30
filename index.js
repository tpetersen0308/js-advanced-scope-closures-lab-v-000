function produceDrivingRange(blockRange) {
  return function withinRange(start, end) {
    blockNumbers = [start, end].map(pt => { return parseInt(pt.slice(0,2)) });
    tripDistance = Math.abs(blockNumbers[0] - blockNumbers[1]);
    if (tripDistance > blockRange) {
      return `${tripDistance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - tripDistance}`
    }
  }
}

function produceTipCalculator(pct) {
  return function tipCalculator(fare) {
    return fare * pct;
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}