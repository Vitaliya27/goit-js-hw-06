// Number of categories
const categoryList = document.getElementById("categories");
const listItem = document.querySelectorAll(".item");
console.log("Number of categories:", listItem.length);

// Heading and elements number
const items = document.querySelectorAll("#categories .item");

items.forEach((item) => {
    const headerText = item.querySelector("h2").textContent;
    const numberOfElement = item.querySelectorAll("li").length;

    console.log(`Categories: ${headerText}`);
    console.log(`Elements: ${numberOfElement}`);
});