const sortTypeButtons = document.querySelectorAll('button.sort-type');
const sortTypeSelect = document.querySelector('select[name="mobile-sorting"]');

function sortingTypeChange(type) {
  sortTypeButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.id === type) {
      btn.classList.add('active');
    }
  });
  sortTypeSelect.value = type;
}

// funtion sortTypeSelection(type){
//     button
// }

sortTypeButtons.forEach(btn => {
  btn.addEventListener('click', () => sortingTypeChange(btn.id));
});

sortTypeSelect.addEventListener('change', () =>
  sortingTypeChange(sortTypeSelect.value)
);
