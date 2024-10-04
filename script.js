// Shopping List   10/3/2024

const enterItem = document.querySelector('#enterItem');
const addItem = document.querySelector('#addItem');
const ul = document.querySelector('#list');
const clearAll = document.querySelector('#clearAll');
const filterItems = document.querySelector('#filterItems');

addItem.addEventListener('click', createItem);
clearAll.addEventListener('click', clearItems);
ul.addEventListener('click', removeItem);

// if there are no shopping list items, hide the Clear All and Filter Ui, otherwise show them.
function checkListLength() {
  if (ul.querySelectorAll('li').length === 0) {
    clearAll.classList.add('hidden');
    filterItems.classList.add('hidden');
  } else {
    clearAll.classList.remove('hidden');
    filterItems.classList.remove('hidden');
  }
}

function createItem(e) {
  e.preventDefault();

  const newItem = enterItem.value;

  if (newItem === '') {
    alert('Please enter a shopping item to add to list.');
    return;
  }

  const li = document.createElement('li');
  li.setAttribute('class', 'listItem');

  const txt = document.createTextNode(newItem);
  // clear Enter Item text box
  enterItem.value = '';
  li.appendChild(txt);

  const cross = document.createElement('i');
  cross.setAttribute('class', 'fa-solid fa-x');
  li.appendChild(cross);
  ul.appendChild(li);

  //Reset UI if needed:
  checkListLength();
} // createItem

function clearItems(e) {
  e.preventDefault();
  ul.querySelectorAll('li').forEach((e) => e.remove());
  //Reset UI if needed:
  checkListLength();
} //clearItems

// If the i element is clicked, (red X) remove the parent li
function removeItem(e) {
  e.preventDefault();
  if (e.target.nodeName === 'I') {
    e.target.parentNode.remove();
    //Reset UI if needed:
    checkListLength();
  }
} //removeItem

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//**************** */  These are all other exercises which don't relate to Shopping list app. ******
function insertAfter(child, element) {
  const parent = child.parentNode;
  parent.insertBefore(element, child.nextSibling);
}

//  Replace all items in a ul
const newItems = ['New Item 1', 'New Item 2', 'New Item 3', 'New Item 4'];

// replaces all list items with new items containing array strings.
function rewriteUl(ul, newItems) {
  const li = ul.querySelectorAll('li');
  li.forEach((oldLi, indx) => {
    const newLi = document.createElement('li');
    newLi.textContent = newItems[indx];
    console.log(newLi);
    oldLi.replaceWith(newLi);
  });
}
//rewriteUl(document.querySelector('#list'), newItems);
