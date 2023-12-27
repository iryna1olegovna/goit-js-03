

function slugify(title) {
    // Перетворення усіх символів в нижній регістр
    const titleLower = title.toLowerCase();

    // Розділення слів за допомогою пробілів
    const words = titleLower.split(' ');

    // З'єднання слів тире і створення slug
    const slug = words.join('-');

    return slug;
}

// Приклад використання:
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
