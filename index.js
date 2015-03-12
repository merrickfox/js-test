var add;

//first page of tests pass using this function

// add = function () {
//   var sum;
//   sum = 0;

//   _.forEach(arguments, function (number) {
//     sum += number;
//   });

//   return sum;
// }

//second set of tests pass with this
add = function () {
  var returnAdd,
      sum;

  sum = 0;

  _.forEach(arguments, function (number) {
    sum += number;
  });

  returnAdd = add.bind(null, sum);

  returnAdd.value = function () {
    return sum;
  };
  returnAdd.add = function () {
    _.forEach(arguments, function (number) {
      sum += number;
    });

    return returnAdd;
  };
  returnAdd.valueOf = function () {
    return sum;
  };

  return returnAdd;
};

//I'd be interested to see the one solution that passes all of the tests, first page and second.








































