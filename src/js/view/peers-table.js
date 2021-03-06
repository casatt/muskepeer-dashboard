/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define(['ractive'], function (Ractive) {

    var _binding;

    return {

        init: function ($el, viewModel, $template) {

            $template = $template || $el;

            _binding = new Ractive({
                el: $el,
                template: $template.html(),
                data: viewModel

            });



            var observer = _binding.observe( 'viewModel.amount', function ( newValue, oldValue ) {
                console.log( 'foo.bar changed to ' + newValue );
            });


        }
    }
});