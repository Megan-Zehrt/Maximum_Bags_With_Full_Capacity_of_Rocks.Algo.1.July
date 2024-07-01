// 2279. Maximum Bags With Full Capacity of Rocks



// You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. The ith bag can hold a maximum of capacity[i] rocks and currently contains rocks[i] rocks. You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags.

// Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags.







/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    
    let max = 0
    let array = []

    for(let i = 0; i < capacity.length; i++){

        let difference = capacity[i] - rocks[i]

        array.push(difference)
    }

    let additional = additionalRocks
    array.sort((a,b) => a-b)

    for(let  i = 0; i < array.length; i++){
     
        if(additional >= array[i]){
            additional -= array[i]
            max += 1
        }else{
            break
        }
    }

    return max
};



/**

    let max = 0
    let array = []

    for loop
        difference between capacity[i] and rocks[i]
            array.push(difference)

        for loop
            while(array[i] > 0)
                array[i] = array[i] - 1
                additionalRocks = additionalRocks - 1
        
    sort array in ascending order

    for loop
        if array[i] == 0
            max += 1

    return max
 */