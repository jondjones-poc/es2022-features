function at() {

    const exampleOne = [ 1, 2, 3, 4, 5];
    const exampleTwo = [ 'H', 'E', 'L', 'L', 'O'];

    // Old way
    console.log(exampleOne[exampleOne.length - 3]);     // 3
    console.log(exampleOne.slice(-3)[0]);               // 3
    console.log(exampleTwo[exampleTwo.length - 1]);     // E

     // New Way
     console.log(exampleOne.at(3));                     // 4
     console.log(exampleOne.at(-2));                    // 4
     console.log(exampleTwo.at(1));                     // E
}
