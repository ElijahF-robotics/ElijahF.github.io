console.log("Javascript Loaded");

mainImage = document.querySelector("img")
quote = document.querySelector("p3")
header = document.querySelector('h1')

function changeCow() {
    currentSRC = mainImage.getAttribute("src");
    if(currentSRC === 'images/Cowtapult.jpg'){
        mainImage.setAttribute("src", "images/CowOnMoon.jpg");
        quote.innerHTML = "Cows on the MOO-n"
        header.innerHTML = "Moon Cows"
    }
    else{
        if(currentSRC === 'images/CowOnMoon.jpg'){
            mainImage.setAttribute("src", "images/CowstructionWorker.jpg")
            quote.innerHTML = "COW-stuction worker"
            header.innerHTML = "Cowstruction Worker"
        }
        else{
           mainImage.setAttribute("src", "images/Cowtapult.jpg")
            quote.innerHTML = "The almighty COW-taput"
            header.innerHTML = "Cowtapult" 
        }
        
    }
}

let myButton = document.querySelector('button');
console.log(myButton);

myButton.onclick = () => {
    changeCow();
};