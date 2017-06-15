import 'blocks/framed-select/framed-select';
import $ from 'jquery';

$('#preview-add-cart').on('click', () => {
  const selectedColor = $('input[name="colors"]:checked').val();
  console.log(selectedColor);
});

