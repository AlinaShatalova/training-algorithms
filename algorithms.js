// Нахождение наибольшего элемента массива с помощью рекурсии
const maxChar = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr[0] < arr[1]) {
        arr.splice(0, 1);
    } else {
        arr.splice(1, 1);
    }
    return maxChar(arr);
}

// Алгоритм быстрой сортировки
const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    const less = [];
    const greater = [];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return `${quickSort(less)} ${pivot} ${quickSort(greater)}`;
}

console.log(quickSort([62, 154, 6, 20, 18]));

