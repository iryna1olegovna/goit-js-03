

function filterArray(numbers, value) {
    // Створення порожнього масиву для підходящих чисел
    const resultArray = [];

    // Цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Використання умовного оператора для перевірки та додавання чисел до результату
        if (numbers[i] > value) {
            resultArray.push(numbers[i]);
        }
    }

    // Повернення нового масиву з підходящими числами
    return resultArray;
}

// Приклад використання:
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
