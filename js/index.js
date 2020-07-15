(()=>{

    const header = document.querySelector('[data-header]');
    const progressBars = document.querySelectorAll('[data-progress]');
    const top = document.querySelector('[data-top]');

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
                    top.style = '';
                    progressBars.forEach(bar => {
                        bar.style = `${bar.dataset.progress} animation-duration: 3s;`
                    });
                }else{
                    top.style = 'display:none';
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





   
    

    
