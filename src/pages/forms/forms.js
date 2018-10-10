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
        // This removes the 'required' attribute of anything that is collapsed and invisible before submition.
        const collapsedContainerSelector = 'form.form .collapse';
        const collapsedElements = document.querySelectorAll(`${collapsedContainerSelector} input, ${collapsedContainerSelector} select, ${collapsedContainerSelector} textarea`);
        collapsedElements.forEach(el => {
            el.required = false;
            el.checked = false;
            el.value = null;
        });
    };

    const onSubmit = event => {
        // Stop the submission of the form
        event.preventDefault();

        clearCollapsedForms();

        // Trigger the submition of the form with the cleared out fields
        event.currentTarget.removeEventListener('click', onSubmit)
        event.currentTarget.click();
    };

    document.querySelector('form.form button[type="submit"]').addEventListener('click', onSubmit);
});
