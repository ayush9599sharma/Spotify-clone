console.log("welcome to spotify");
// initialse the variable
let index=1;
let audioelement = new Audio('./songs/1.m4a');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitem = document.getElementsByClassName("songitem");

 
let songs=[
    {songname:"Insane" , filepath:"./songs/1.m4a", coverpath:"./covers/1.jpg" },
    {songname:"Mera Yaar" , filepath:"./songs/2.m4a", coverpath:"./covers/2.jpg" },
    {songname:"Supne" , filepath:"./songs/3.mp3", coverpath:"./covers/3.jpg" },
    {songname:"Tere Liye" , filepath:"./songs/4.m4a", coverpath:"./covers/6.jpg" },
    {songname:"Wajha Tun Ho" , filepath:"./songs/5.m4a", coverpath:"./covers/5.jpg" }
]
Array.from(songitem).forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

masterplay.addEventListener("click",()=>{
    if(audioelement.paused  || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    } else{
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate',()=>{
    // console.log("timeupdate")
    let progress = parseInt(((audioelement.currentTime)/(audioelement.duration))*100);
    // console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})


const makeallplays= ()=>{
    Array.from(document.getElementsByClassName("changesongitem")).forEach((element)=>{
        element.classList.add("fa-pause-circle");
        element.classList.add('fa-play-circle');
    })
}

let changesongitem = document.getElementsByClassName("changesongitem");
Array.from(changesongitem).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target); //gives me that is clicked right now
         index = parseInt(e.target.id)
        makeallplays();
       
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        if(index!=3) audioelement.src=`songs/${index}.m4a`;
        else audioelement.src=`songs/${index}.mp3`;

        mastersongname.innerText = songs[index-1].songname;

        audioelement.currentTime=0;
        audioelement.play();
        
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(index>=5) index=1;
    else index+=1;

    if(index!=3) audioelement.src=`songs/${index}.m4a`;
     else audioelement.src=`songs/${index}.mp3`;

     mastersongname.innerText = songs[index-1].songname;
    audioelement.currentTime=0;
    audioelement.play();
   gif.style.opacity=1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})
document.getElementById("previous").addEventListener("click",()=>{
    if(index<=1) index=5;
    else index-=1;
    if(index!=3) audioelement.src=`songs/${index}.m4a`;
    else audioelement.src=`songs/${index}.mp3`;
    mastersongname.innerText = songs[index-1].songname;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})


