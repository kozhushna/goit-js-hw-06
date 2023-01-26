const categoriesListItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesListItems.length}`);
categoriesListItems.forEach(item => {
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  );
});

// 2 спосіб
// const categoriesEl = document.querySelector('#categories');

// за допомогою childElementCount
// console.log(`Number of categories: ${categoriesEl.childElementCount}`);

// console.log(`Number of categories: ${categoriesEl.children.length}`);

// for (const item of categoriesEl.children) {
//   const title = item.querySelector('h2').textContent;
//   const count = item.querySelector('ul').children.length;
//   console.log(`Category: ${title}\nElements: ${count}`);
// }
