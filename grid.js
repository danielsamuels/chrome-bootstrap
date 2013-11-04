if (document.getElementsByClassName('cb-grid-lines').length){
    
    document.body.removeChild(document.getElementsByClassName('cb-grid-lines')[0]);
}

else {
    document.body.innerHTML += '<div class="row cb-grid-lines"> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
        <div class="small-1"></div> \
      </div> \
    </div>';
    
}
