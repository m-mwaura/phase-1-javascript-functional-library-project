// A custom implementation of the 'forEach' function
function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Loop through each element of the array
      for (let i = 0; i < collection.length; i++) {
        // Call the callback with element, index, and the collection
        callback(collection[i], i, collection);
      }
    } else {
      // If it's not an array, assume it's an object and iterate over its keys
      for (const key in collection) {
        // Ensure the key is part of the object itself (not inherited)
        if (collection.hasOwnProperty(key)) {
          // Call the callback with value, key, and the collection
          callback(collection[key], key, collection);
        }
      }
    }
    // Return the original collection for possible chaining
    return collection;
  }
  
  // A custom implementation of the 'map' function
  function myMap(collection, callback) {
    // Create an empty array to store results
    const result = [];
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Loop through each element of the array
      for (let i = 0; i < collection.length; i++) {
        // Apply the callback and push the result to 'result'
        result.push(callback(collection[i], i, collection));
      }
    } else {
      // If it's an object, iterate through the keys
      for (const key in collection) {
        // Ensure the key is part of the object itself (not inherited)
        if (collection.hasOwnProperty(key)) {
          // Apply the callback and push the result to 'result'
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    // Return the array of results
    return result;
  }
  
  // A custom implementation of the 'reduce' function
  function myReduce(collection, callback, acc) {
    // Convert object to an array of values if necessary
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
  
    // If no accumulator is provided, use the first value and start at index 1
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1;
    }
  
    // Iterate through the collection starting from the defined startIndex
    for (let i = startIndex; i < values.length; i++) {
      // Apply the callback and update the accumulator
      acc = callback(acc, values[i], collection);
    }
  
    // Return the final accumulated result
    return acc;
  }
  
  // A custom implementation of the 'find' function
  function myFind(collection, predicate) {
    // Convert object to an array of values if necessary
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    // Iterate through the collection
    for (let i = 0; i < values.length; i++) {
      // If predicate returns true, return the current value
      if (predicate(values[i])) return values[i];
    }
  
    // Return undefined if no match was found
    return undefined;
  }
  
  // A custom implementation of the 'filter' function
  function myFilter(collection, predicate) {
    // Create an empty array to store filtered results
    const result = [];
    // Convert object to an array of values if necessary
    const values = Array.isArray(collection) ? collection : Object.values(collection);
  
    // Loop through the collection
    for (let i = 0; i < values.length; i++) {
      // If predicate returns true, add the value to 'result'
      if (predicate(values[i])) result.push(values[i]);
    }
  
    // Return the array of filtered results
    return result;
  }
  
  // A custom implementation of the 'size' function
  function mySize(collection) {
    // Return length for arrays, or count of keys for objects
    return Array.isArray(collection)
      ? collection.length
      : Object.keys(collection).length;
  }
  
  // A custom implementation of the 'first' function
  function myFirst(array, n = 1) {
    // If n is 1, return the first element; otherwise return the first n elements
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // A custom implementation of the 'last' function
  function myLast(array, n = 1) {
    // If n is 1, return the last element; otherwise return the last n elements
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // A custom implementation of the 'sortBy' function
  function mySortBy(array, callback) {
    // Create a shallow copy of the array and sort it based on the callback function
    return [...array].sort((a, b) => {
      const aVal = callback(a);
      const bVal = callback(b);
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    });
  }
  
  // A custom implementation of the 'flatten' function
  function myFlatten(array, shallow = false, newArr = []) {
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
      // If the element is an array and deep flattening is needed, recurse
      if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], shallow, newArr);
      } else if (Array.isArray(array[i]) && shallow) {
        // If shallow flattening is required, spread the inner array into newArr
        newArr.push(...array[i]);
      } else {
        // If it's not an array, simply push the element to newArr
        newArr.push(array[i]);
      }
    }
    // Return the flattened array
    return newArr;
  }
  
  // A custom implementation of the 'keys' function
  function myKeys(object) {
    // Return an array of the object's own keys
    return Object.keys(object);
  }
  
  // A custom implementation of the 'values' function
  function myValues(object) {
    // Return an array of the object's own values
    return Object.values(object);
  }
  