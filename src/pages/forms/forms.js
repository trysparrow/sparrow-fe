import url from './forms.less';

$(document).ready(function() {
    $('input[name="birthday"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10),
        minDate: moment().subtract(100, 'years').format(),
        maxDate: moment().format()

    });

    // For future proofing let's create our own javascript in Plain JS
    const clearCollapsedForms = () => {
        const collapsedContainerSelector = 'form.form .collapse';
        const collapsedElements = document.querySelectorAll(`${collapsedContainerSelector} input, ${collapsedContainerSelector} select, ${collapsedContainerSelector} textarea`);
        collapsedElements.forEach(el => {
            el.required = false;
            el.checked = false;
            el.value = null;
        });
    };
});
