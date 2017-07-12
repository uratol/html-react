$( document ).ready(function() {
    $('.dropbtn').click(function(){
        $(this).closest('.dropdown').find('.dropdown-content').first().toggleClass('dropdown-show');
    });

// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn'))
            $('.dropdown-show').removeClass('dropdown-show');
    }
});