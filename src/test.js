function testPrint(...string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

testPrint("test", "tyler", "rabbit");

function testLoop(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += i;
    array[i] = i;
  }

  return count;
}

function testMain() {
  let array = [0, 0, 0, 0];

  let count = testLoop(array);

  console.log(count, array);
}

testMain();
