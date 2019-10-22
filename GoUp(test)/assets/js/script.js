for (let i = 1; i <= 4; i++) {
    $('#v-pills-' + i + '-tab').on('shown.bs.tab', function (e) {
        $('.circle').removeClass('active').removeClass('done');
        $('#circle' + i).addClass('active');
        for (let j = 1; j < i; j++) {
            $('#circle' + j).addClass('done');
        }
    });
    $('#circle' + i).on('click', function (e) {
        $('#v-pills-' + i + '-tab').trigger('click')
    })
}