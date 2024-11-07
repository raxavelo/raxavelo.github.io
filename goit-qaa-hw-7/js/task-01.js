const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  console.log("");
  const h2 = category.firstElementChild;
  const list = h2.nextElementSibling;
  console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${list.children.length}`);
}
