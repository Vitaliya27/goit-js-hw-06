const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let html = "";
const list = document.querySelector("#ingredients");

const items = ingredients.reduce((acc, ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${ingredient}`;
    listItem.classList.add("item");
    acc.push(listItem);
    return acc;
},[]);

list.append(...items);