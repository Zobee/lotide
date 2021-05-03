# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alchemxist/lotide`

**Require it:**

`const _ = require('@alchemxist/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: Returns an object {character : characterCount} where each key (character) is a character in str. amd characterCount is the number of instances of that character.
* `countOnly(allItems, itemsToCount)`: Returns an object (item: numOccurrences) where each key is an item in allItems, and numOccurrences is the number of times that item appears in allItems. itemsToCount is an object {item: shouldFind} where item is a corresponding item in allItems, and shouldFind is a boolean. If true, the item should be counted.
* `eqArrays(arr1, arr2)`: Returns true if arr1 is equal to arr2 and false otherwise. Supports deep equivalence checks for nested arrays.
* `eqObjects(object1, object2)`: Returns true if object1 and object 2 have identical keys with identical values. Supports deep equivalence checks for nested objects.
* `findKey(obj, callback)`: Returns the key of obj that passes the callback. 
* `findKeyByValue(obj, val)`: Returns the key of obj associated with the value val.
* `flatten(arr)`: Returns a flattened version of the input array.
* `head(arr)`: Returns the head (first value) of arr
* `letterPositions(str)`: Returns an object {character : [ positions ]) whose keys are the letters in str, and whose values are arrays with the indicies of each instance of the character.
* `map(arr, callback)`: Homemade Array.map() which takes an array and a callback, and returns a new array consisting of all elements of the input array after being modified by callback.
* `middle(arr)`: Returns the middle index of an array. If arr.length is even, the two middle indicies will be returned.
* `tail(arr)`: Returns the tail (arr[ 1 ] -> arr.length -1) of arr.
* `takeUntil(arr, callback)`: Returns a new array consisting of the values in arr up to the element that causes callback to return true.
* `without(source, itemsToRemove)`: Returns a new array consisting of the values in source, excluding elements in itemsToRemove.
