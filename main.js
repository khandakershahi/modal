document.addEventListener("DOMContentLoaded", function(){
    let openModalBTN = document.getElementById('openModalBTN');
    let closeModalBTN = document.getElementById('closeModalBTN');
    let modal = document.getElementById('myModal');


    //open modal by click
    openModalBTN.addEventListener("click", function(){
        modal.style.display = "block";
    })

    //close modal by click
    closeModalBTN.addEventListener("click", function(){
        modal.style.display = "none";
    })

    // close the modal if user click outside the modal
   window.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
   })


})