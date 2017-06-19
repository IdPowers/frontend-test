import $ from 'jquery';
import 'select2/dist/css/select2.min.css';
import 'select2';

$('.light-select > select').select2({
  minimumResultsForSearch: -1,
  placeholder: () => {
    $(this).data('placeholder');
  },
});
