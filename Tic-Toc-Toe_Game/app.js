let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('.reset');
let msgContainer=document.querySelector('.msg-container');
let playagainBtn=document.querySelector('.play-again');
let msg=document.querySelector('#msg');
let turn0=true;
const WinPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add('hide');

};    
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        //o as red color and x as blue color
        if(turn0){
            let myColor='#3A0B04'//pink color code
            box.style.color=myColor;
            box.innerText='O';
            turn0=false;
        }
        else{
            let myColor='blue';
            box.style.color=myColor;
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText='';  
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const checkWinner=()=>{
    for (let pattern of WinPattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if (posval1!=''||posval2!=''||posval3!=''){
            if(posval1==posval2&&posval2==posval3){
                showWinner(posval1);
            }
        }
    }
};
playagainBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);

