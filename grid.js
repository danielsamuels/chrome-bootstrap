if (document.getElementsByClassName('cb-grid-lines').length){
    document.body.removeChild(document.getElementsByClassName('cb-grid-lines')[0]);
}

else {
    document.body.innerHTML += '<div class="cb-grid-lines"> \
      <div class="row"> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
        <div class="small-1 columns"><div class="inner"></div></div> \
      </div> \
    </div>';

}
