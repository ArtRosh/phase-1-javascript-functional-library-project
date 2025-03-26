
// Recognizing what type of data we have
function getCollectionValues(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
};


// Itetates over each values in a collection 
// Calls the provided callback function for each element
// Returns the original array
function myEach (collection, callback) {
    // Get values from the collection as an array
    const newArray = getCollectionValues(collection);

    newArray.forEach(element => {
        callback(element);
    });

    return collection;
}

/**
 * Creates a new array populated with the results of calling
 * the provided callback on every element in the collection
 * Works with arrays and objects. Does not modify the original collection
 */

function myMap (collection, callback) {
    //Get values from the collection as an array
    const newArray = getCollectionValues(collection);

    const result = [];

    newArray.forEach(element => {
        result.push(callback(element));
    });

    return result;
}

/**
 * Reduces a collection to a single value by applaying
 * the callback function to each element, accumulating the result.
 */

function myReduce (collection, callback, acc) {
    const values = getCollectionValues(collection);
    

    //If accumulator is not passed - use first element and starts from the second
    let accumulatorIsSet = acc !== undefined;
    let result = acc;

    values.forEach((value, index) => {
        if (!accumulatorIsSet) {
            result = value;
            accumulatorIsSet = true;
        } else {
            result = callback(result, value, collection);
        }
    });
    return result;
}


/**
 * Finds and returns the first value in a collection that the predicate
 * Returns undefined if no matching value is found.
 */
function myFind (collection, predicate) {
    const values = getCollectionValues(collection);

    let result;         // here we'll put found value
    let found = false;  // flag - found or not

    values.forEach(value => {
        if (!found && predicate(value)) {
            result = value;
            found = true;
        }
    })
    return result;
}


/**
 * Returns a new array with all values from the collection that 
 * pass the predicate test.
 */
function myFilter(collection, predicate) {
    const values = getCollectionValues(collection);
    const result = [];

    values.forEach(value => {
        if (predicate(value)) {
            result.push(value);
        }
    })
    return result;
}

/**
 * Return the number of values in a collection
 */
function mySize(collection) {
    const values = getCollectionValues(collection);
   return values.length;
}


/**
 * Returns the first element of the array, 
 * or the first n element if n is provided.
 */
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

/**
 * Returns the last element of the array, 
 * or the last n element if n is provided.
 */
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n)
    }
}


/**
 * Returns all keys of objects
 */
function myKeys(object) {
   return Object.keys(object);
}


/**
 * Return values of the properties
 */
function myValues(object) {
    return Object.values(object);
}