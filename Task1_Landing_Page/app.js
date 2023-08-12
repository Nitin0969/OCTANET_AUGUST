
        const slides = document.querySelectorAll(".slide");
        // console.log(slildes)
        var counter = 0;
        var imagecount = 0;
        slides.forEach(
            (slide,index)=>{
                slide.style.left = `${index * 100}%`
                imagecount++;
            }
        )
        const gonext = ()=>{
            if(counter==imagecount-1){
                counter=0;
                slideimage();
            }
            else{
                counter++;
                slideimage();
            }
        }
        const goprev=()=>{
            if(counter==0){
                counter=imagecount-1;
                slideimage();
            }
            else{
                counter--;
                slideimage();
            }
        }
        const slideimage = ()=>{
            slides.forEach(
                (slide)=>{
                    slide.style.transform = `translateX(-${counter*100}%)`
                }
            )
        }
    