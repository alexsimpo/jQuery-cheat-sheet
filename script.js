// SELECTORS

// $('h1#heading-one').hide();
// $('.heading-two').hide();

$('p span').css('color', 'green');

$('ul#list li:first').css('color', 'blue');
$('ul#list li:last').css('color', 'red');
$('ul#list li:even').css('background-color', 'grey');
$('ul#list li:odd').css('background-color', 'yellow');
$('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':submit').hide();
$('[href]').css('color', 'red');
$('a[href="http://youtube.com"]').css('color', 'green');

// $('*').hide();

// EVENTS

$(document).ready(function() {
    /* $('#btn1').click(function() {
        alert('Button clicked');
    }); */

    $('#btn1').on('click', function() {
        $('#paragraph-three').css('opacity', '0');
    });

    $('#btn2').on('click', function() {
        $('#paragraph-three').css('opacity', '1');
    });

    $('#btn3').on('click', function() {
        $('#paragraph-three').toggle();
    });

    $('#btn4').dblclick(function() {
        $('#paragraph-three').toggle();
    });

    $('#btn5').hover(function() {
        $('#paragraph-three').toggle();
    });

    $('#btn6').on('mouseenter', function() {
        $('#paragraph-three').toggle();
    });

    $('#btn7').on('mouseleave', function() {
        $('#paragraph-three').toggle();
    });

    $('#btn8').on('mousemove', function() {
        $('#paragraph-three').toggle();
    });

    $('#btn9').on('mousedown', function() {
        $('#paragraph-three').toggle();
    });

    $('#btn10').click(function(e) {
        alert(e.currentTarget.id);
        alert(e.currentTarget.innerHTML);
        alert(e.currentTarget.outerHTML);
        alert(e.currentTarget.className)
    });

    $(document).on('mousemove', function(e) {
        $('#coords span').html('Y: '+ e.clientY + ' X: ' + e.clientX);
    });

    $('input').focus(function() {
        // alert('Focus');
        $(this).css('background', 'pink');
    });

    $('input').blur(function() {
        // alert('Focus');
        $(this).css('background', 'white');
    });

    $('input').keyup(function(e) {
        // alert('Focus');
        console.log(e.target.value);
    });

    $('select#gender').change(function(e) {
        alert(e.target.value);
    });

    $('#form').submit(function(e) {
        e.preventDefault();
        var name = $('input#name').val();
        console.log(name);
    });

});

// DOM MANIPULATION

$(document).ready(function() {
    $('p.paragraph-four').css({color: 'red', background: 'yellow'});
    // $('p.paragraph-five').addClass('myClass');
    // $('p.paragraph-five').removeClass('myClass');
    $('#btn12').click(function() {
        $('p.paragraph-five').toggleClass('myClass');
    });

    $('#myDiv').html('<h3>Hello World</h3>');
    $('#myOtherDiv').text('<h3>Hello World</h3>');

    $('ul#dom-list').append('<li>Appended Item</li>');
    $('ul#dom-list').prepend('<li>Prepended Item</li>');

    $('p.paragraph-four').appendTo('p.paragraph-five');
    $('p.paragraph-four').prependTo('p.paragraph-five');
    $('ul#dom-list').before('<h4>Hello</h4>');
    $('ul#dom-list').after('<h4>World</h4>');
    // $('ul#dom-list').empty();
    // $('ul#dom-list').detach();
    
    $('a#yt').attr('target', '_blank');
    // alert($('a#yt').attr('href'));
    // $('a#yt').removeAttr('target');
    
    $('p.paragraph-four').wrap('<h1>');
    $('ul#dom-list').wrapAll('<h3>');

    $('#newItem').keyup(function(e){
        var code = e.which;
        if(code == 13){
            e.preventDefault();
            $('ul').append('<li>' + e.target.value + '</li>')
        }
    });

    var myArr = ['Mason', 'Teller', 'Alice', 'Mike'];

    $.each(myArr, function(i, val){
        $('ul#users').append('<li>' + val + '</li>');
    });

    var newArr = $ ('ul#dom-list li').toArray();
    $.each(newArr, function(i, val){
        console.log(val.innerHTML);
    });

// EFFECTS AND ANIMATION
$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(1000, function(){
            $('#btnFadeOut').text('Its gone!');
        });
    });

    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(1000, function(){
            $('#btnFadeOut').text('Fade Out');
        });
    });

    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000);
    });

    $('#btnSlideDown').click(function(){
        $('#box').slideDown(1000);
    });

    $('#btnSlideUp').click(function(){
        $('#box').slideUp(1000);
    });

    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(1000);
    });

    $('#btnStop').click(function(){
        $('#box').stop();
    });

    $('#btnMoveRight').click(function(){
        $('#box2').animate({
            left: 500,
            height: '300px',
            opacity: 0.4
        });
    });

    $('#btnMoveLeft').click(function(){
        $('#box2').animate({
            left: 0,
            height: '50px',
            opacity: 1
        });
    });

    $('#btnMoveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 0
        });
        box.animate({
            top: 0
        });
    });
});

// AJAX
$(document).ready(function(){
    /* $('#result').load('test.html', function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success"){
            alert('It went fine');
        } else if (statusTxt == "error"){
            alert('Error: '+xhr.statusText);
        }
    }); */

    /* $.get('test.html', function(data) {
        $('#result').html(data);
    }); */

    /* $.getJSON('users.json', function(data){
        $.each(data, function(i, user){
            $('ul#users-json').append('<li>' + user.firstName + '</li>')
        });
    }); */

    /* $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        $.map(data, function(post, i){
            $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>')
        })
    }); */

    $('#postForm').submit(function(e){
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, {title:title, body:body}).done(function(data){
            console.log('Post saved');
            console.log(data);
        });
    })
});

});