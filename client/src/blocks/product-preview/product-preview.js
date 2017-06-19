import $ from 'jquery';
import 'blocks/framed-select/framed-select';

$('#preview-add-cart').on('click', () => {
  const selectedColor = $('input[name="colors"]:checked').val();
  console.log(selectedColor);
});

