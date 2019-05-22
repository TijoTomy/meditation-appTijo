const  app =()=>{
    const song=document.querySelector(".song");
    const play=document.querySelector(".play");
    const outline=document.querySelector(".mooving-outline circle");
    const vedio=document.querySelector(".vedio-container video");
    const sound=document.querySelectorAll(".sound-picker button");
    const timeDisplay=document.querySelector(".time-display");
    const timeSelect=document.querySelectorAll(".time-select button");
    const outlinelength=outline.getTotalLength();
    console.log(outlinelength)
    let fakeduration=600;
   
    outline.style.strokeDasharray=outlinelength;
    outline.style.strokeDashoffset=outlinelength;
    play.addEventListener('click',()=>{
        checkplaying(song);}
    

    )
    const checkplaying=song=>{
        if(song.paused){
            song.play();
            vedio.play();
            
            play.src="./image/pause1.svg";
        }
        else {
            song.pause();
            vedio.pause();
            play.src="./image/play1.svg";
        }

        }

        song.ontimeupdate=()=>{
            let currenttime=song.currentTime;
           let ellapsed=fakeduration-currenttime;
           let second=Math.floor(ellapsed % 60);
           
           let minute=Math.floor(ellapsed / 60);
           let progress=outlinelength-(currenttime/fakeduration)*outlinelength;
           
           outline.style.strokeDashoffset=progress;
        timeDisplay.textContent=`${minute}:${second}`;
        if(currenttime >= fakeduration){
            song.pause();
            song.currentTime=0;
            play.src="./image/play1.svg";
            vedio.pause();
        }
           

        }
        timeSelect.forEach(option=>{
            option.addEventListener("click",function(){
                fakeduration=this.getAttribute("data-time");
                console.log(fakeduration );
                timeDisplay.textContent=`${Math.floor(fakeduration /60)}:${Math.floor(fakeduration %60)}`;

            })
        })
        sound.forEach(button=>{
            button.addEventListener('click',function(){
                song.src=this.getAttribute('data-sound');
                vedio.src=this.getAttribute('data-vedio');
                checkplaying(song);
            })
        })
            
    
    
}
app();