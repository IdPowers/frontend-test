import $ from 'jquery';
import 'semantic-ui-sidebar/sidebar.min';

$('.header__cart').on('click', () => {
  $('.ui.sidebar').sidebar('toggle');
});
