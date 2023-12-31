function startAnimation() {
    $('#startAnimationButton').hide();

    var decimal_places = 2;
    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

    // Показываем блок p перед началом анимации
    $('#decimals').show();

    $('#decimals')
        .animateNumber(
            {
                number: 879 * decimal_factor,
                numberStep: function(now, tween) {
                    var floored_number = Math.floor(now) / decimal_factor,
                        target = $(tween.elem);

                    if (decimal_places > 0) {
                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);

                        // replace '.' separator with ','
                        floored_number = floored_number.toString().replace('.', ',');
                    }

                    target.text(floored_number + " " + '₽' );
                }
            },
            5000,
        );
}

$(document).ready(function() {
    $('#startAnimationButton').on('click', function() {
        startAnimation();
    });
});