(function () {
    $(document).ready(function () {
        $('#partial-view').partialViewSlider();
    });
    $(document).ready(function () {
        var partialView = $('#partial-view').partialViewSlider();
        $('#prev').on('click', function () {
            partialView.prev();
        });
        $('#next').on('click', function () {
            partialView.next();
        });
    });
})();