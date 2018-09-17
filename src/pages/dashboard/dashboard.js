import url from './dashboard.less';

window.addEventListener('load', () => {
    const selectAll = document.querySelector('#select-all');

    const checkboxes = document.querySelectorAll('.employee-table-row input[type="checkbox"]');
    selectAll.addEventListener('click', () => {
        checkboxes.forEach(checkbox => checkbox.checked = selectAll.checked);
    });

    const handleEmployeeRowClick = event => {
        const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        handleCheckboxesChange();
    };

    const handleCheckboxesChange = () => {
        let allSelected = true;
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) allSelected = false;
        });

        selectAll.checked = allSelected;
    };

    document.querySelectorAll('.employee-table-row')
        .forEach(el => {
            el.addEventListener('click', handleEmployeeRowClick);
            el.querySelector('input[type="checkbox"]').addEventListener('change', handleCheckboxesChange);
        });
});
