---
layout: post
title:  "JavaScript: Loop through an array"
date:   2018-02-23
categories: javascript
author: yuci_gou
excerpt_separator: <!--more-->
---

Some use cases of looping through an array in the functional programming way in JavaScript:

### 1. Just loop through an array

    const myArray = [{x:100}, {x:200}, {x:300}];

    myArray.forEach((element, index, array) => {
        console.log(element.x); // 100, 200, 300
        console.log(index); // 0, 1, 2
        console.log(array); // same myArray object 3 times
    });

<!--more-->

### 2. Transform to a new array

    const myArray = [{x:100}, {x:200}, {x:300}];

    const newArray= myArray.map(element => element.x);
    console.log(newArray); // [100, 200, 300]

Note: The map() method creates a new array with the results of calling a provided function on every element in the calling array.

### 3. Sum up a particular property, and calculate its average

    const myArray = [{x:100}, {x:200}, {x:300}];

    const sum = myArray.map(element => element.x).reduce((a, b) => a + b, 0);
    console.log(sum); // 600 = 0 + 100 + 200 + 300

    const average = sum / myArray.length;
    console.log(average); // 200

### 4. Create a new array based on the original but without modifying it

    const myArray = [{x:100}, {x:200}, {x:300}];

    const newArray= myArray.map(element => {
        return {
            ...element,
            x: element.x * 2
        };
    });

    console.log(myArray); // [100, 200, 300]
    console.log(newArray); // [200, 400, 600]

### 5. Count the number of each category

    const people = [
        {name: 'John', group: 'A'}, 
        {name: 'Andrew', group: 'C'}, 
        {name: 'Peter', group: 'A'}, 
        {name: 'James', group: 'B'}, 
        {name: 'Hanna', group: 'A'}, 
        {name: 'Adam', group: 'B'}];

    const groupInfo = people.reduce((groups, person) => {
        const {A = 0, B = 0, C = 0} = groups;
        if (person.group === 'A') {
            return {...groups, A: A + 1};
        } else if (person.group === 'B') {
            return {...groups, B: B + 1};
        } else {
            return {...groups, C: C + 1};
        }
    }, {});

    console.log(groupInfo); // {A: 3, C: 1, B: 2}

### 6. Retrieve a subset of an array based on particular criteria

    const myArray = [{x:100}, {x:200}, {x:300}];

    const newArray = myArray.filter(element => element.x > 250);
    console.log(newArray); // [{x:300}]	

Note: The filter() method creates a new array with all elements that pass the test implemented by the provided function.

### References
 * [Array.prototype.forEach()][1]
 * [Array.prototype.map()][2]
 * [Array.prototype.filter()][3]
 * [Spread syntax][4]


  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  [3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  [4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
