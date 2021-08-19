
exports.min = function min (array) {

  if (array === undefined) {
    return 0;
  }

  return array.sort(function(a, b) {
		return b - a;
	}).slice(array.length - 1).join();

}

exports.max = function max (array) {

  if (array === undefined) {
    return 0;
  }

  return array.sort(function(a, b) {
		return a - b;
	}).slice(array.length - 1).join();

}

exports.avg = function avg (array) {

  let numAvg = array;
  let result = 0;

  if (array === undefined) {
    return 0;
  }

	for (i = 0; i < numAvg.length; i++) {
		result += numAvg[i];
    
	};

  if (result === 0) {
    return 0;
  }

	return result / numAvg.length;

}
