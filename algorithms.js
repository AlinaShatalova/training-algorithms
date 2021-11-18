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

// Сортировка выбором
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i += 1) {
        let min = i;
        for (let j = i + 1; j < array.length; j += 1) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]];
    }
    return array;
}

// Сортировка пузырьком
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

// Генерация рандомного числа в заданном интервале
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


console.log(Math.floor((Math.random() * 44) + 6));

