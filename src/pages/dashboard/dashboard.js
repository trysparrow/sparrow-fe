import url from './dashboard.less';

window.addEventListener('load', () => {
    const selectAll = document.querySelector('#select-all');
    console.log({ selectAll });

    const checkboxes = document.querySelectorAll('.employee-table-row input[type="checkbox"]');
    selectAll.addEventListener('click', () => {
        checkboxes.forEach(checkbox => checkbox.checked = selectAll.checked);
    });
});
