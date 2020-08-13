// SELECTORS

// $('h1#heading-one').hide();
// $('.heading-two').hide();

// $('p span').css('color', 'green');

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