// Your code here
function mapToNegativize(sourceArray) {
    let arr = []
    for (let i=0; i < sourceArray.length; i++) {
        arr.push(sourceArray[i]* -1)
    }
    return arr
}

function mapToNoChange(sourceArray) {
    return sourceArray;
}

function mapToDouble(sourceArray) {
    let arr = []
    for (let i=0; i < sourceArray.length; i++) {
        arr.push(sourceArray[i]* 2)
    }
    return arr
}

function mapToSquare(sourceArray) {
    let arr = []
    for (let i=0; i < sourceArray.length; i++) {
        arr.push(sourceArray[i]** 2)
    }
    return arr
}

function reduceToTotal(sourceArray, startingPoint=0) {
    for (let i=0; i < sourceArray.length; i++) {
        startingPoint += sourceArray[i]
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i=0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
        }
        return true
    }

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i]) return true
    }
    return false
}