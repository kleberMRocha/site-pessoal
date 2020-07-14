(()=>{

    const header = document.querySelector('[data-header]');
    const progressBars = document.querySelectorAll('[data-progress]');

    /*
    //header Parallax
    window.onload = function() {
        header.classList.add('parallax-window');
    };*/

    //scroll
    let scroll = true;
    window.addEventListener('scroll',()=>{
        if(scroll){
            scroll = false;
            let preogressBarL = Math.floor(progressBars[0].getBoundingClientRect().top);
                if(window.innerHeight > preogressBarL){
                    progressBars.forEach(bar => {
                        bar.style = `${bar.dataset.progress} animation-duration: 3s;`
                    });
                }else{
                    progressBars.forEach(bar => {
                        bar.style = ``;
                    });

                }
            
            setTimeout(() => {
            scroll = true;
        }, 500);
            
    }
        
      
        

    });


})()





   
    

    
