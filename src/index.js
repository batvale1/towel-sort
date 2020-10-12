// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const arrToReturn = [];
    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            arrToReturn.push(...item);
        } else {
            arrToReturn.push(...item.reverse());
        }
    });
    return arrToReturn;
}
