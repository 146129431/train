  
$(document).ready(function () {

    function get(page) {
        $('#loading').css('display', 'block');
        axios.get('https://mock-api.com/jzA6yGgk.mock/new?page=' + page)
            .then(function (res) {
                console.log("res", res.data);
                var i;
                var item;
                $('#introduce tr:not(:first-child)').remove();
                for (i = 0; i < res.data.length; ++i) {
                    item = res.data[i];
                    console.log('item', item);
                    $('#introduce').append('<tr>' +
                        '<td> <img " src="' + item.imgurl + ' " </td>' +
                        '<td style="padding:30px;">' + item.name + '</td>' +
                        '<td style="padding:30px;">' + item.sonority + '</td>' +
                        '<td style="padding:30px;"> <a href="' + item.url + '"><button class="btn btn-warning">人物介绍</button></a> </td>' +
                        '</tr>');
                }
                $('#loading').css('display', 'none');

            })
            .catch(function (e) {
                console.log('e', e);
            });
    }
    get(1);
    $('#pagination button').click(function (){
        var page = Number($(this).text());
        get(page);
        $('#pagination button').removeClass('active');
        $(this).addClass('active');
    });

});
$('.btn-group button-padding').click(function (){
    var label = $(this).children()[1];
    console.log(label.innerText);
    _czc.push(["_trackEvent",'英雄页面','点击',label.innerText,1]);
})
