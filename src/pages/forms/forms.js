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
});
