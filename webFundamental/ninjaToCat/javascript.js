$('img').click(function(){
    var $this = $(this);
    var swapImage = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', swapImage);
});