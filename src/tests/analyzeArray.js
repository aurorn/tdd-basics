const analyzeArray = (arr) => {
    if(arr.length === 0) {
        return null
    }

    const arrayAvg = arr.reduce((acc, cv) => acc + cv)/arr.length;

    const arrayMin = arr.reduce((a, b) => {
        return (b < a) ? b: a;
    })

    const arrayMax = arr.reduce((a, b) => {
        return (b > a) ? b: a;
    })

    return {
        average: arrayAvg,
        min: arrayMin,
        max: arrayMax,
        length: arr.length
    }
}

export default analyzeArray;