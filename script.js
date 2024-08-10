
const imgArray = ['./images/animal1.jpeg','./images/animal2.jpeg','./images/animal3.jpeg','./images/animal4.jpeg','./images/animal5.jpeg','./images/animal6.jpeg','./images/backpacker1.jpeg','./images/backpacker2.jpeg','./images/backpacker3.jpeg','./images/backpacker4.jpeg','./images/backpacker5.jpeg','./images/backpacker6.jpeg','./images/nature1.jpeg','./images/nature2.jpeg','./images/nature3.jpeg','./images/nature4.jpeg','./images/nature5.jpeg','./images/nature6.jpeg'];



for(let i=0;i<imgArray.length;i++){
    const imageDiv = document.querySelector('.images');
    const newImg = document.createElement('img');
    newImg.src = imgArray[i];
    newImg.alt = 'image';
    newImg.className = "img";
    imageDiv.appendChild(newImg)
}














// setTimeout(()=>{
//     for(let i=0;i<imgArray;i++){
//         const imageDiv = document.querySelector('.images');
//         const newImg = document.createElement('img');
//         newImg.src = imgArray[i];
//         newImg.alt = 'image';
//         newImg.className = "img";
//         imageDiv.appendChild(newImg)
//     }    
// },1000);

