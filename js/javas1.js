//#region Displays Iniciais / Ids

    // Elements IDs   
    let bstart = document.getElementById('startbutton');    
    let bnext = document.getElementById('nextbutton');    
    let brestart = document.getElementById('resetbutton');  
    
    // Displays
    bstart.style.display = 'block';
    bnext.style.display = 'none';
    brestart.style.display = 'none';
//#endregion


//#region Variaveis Globais

let images = [
    {
        src: "imgs/rosco1.png",
        height: "88",
        width: "294",
        alt: "rosco1teste"
    },
    {
        src: "imgs/andrepina1.png",
        height: "82",
        width: "268",
        alt: "andrepina1"
    },
    {
        src: "imgs/andrepina2.png",
        height: "115",
        width: "256",
        alt: "andrepina2"
    },
    {
        src: "imgs/chuckle1.png",
        height: "65",
        width: "219",
        alt: "chuckle1_sapinhox"
    }

];
//#endregion


//#region Funções Globais

    function start(){
        bstart.style.display = 'none';
        bnext.style.display = 'inline-block';
        brestart.style.display = 'inline-block';
        shuffleImages(images);
    }


    function shuffleImages(array){    
        for(let i = 0; i < array.length; i++){
            let imageIndex = Math.trunc(Math.random() * array.length);
            let tmp = array[imageIndex];
            array[imageIndex] = array[i];
            array[i] = tmp;
        }
    }

    function nextImg(){
        let imageIndex;
        for(let i = 0; i < images.length; i++){
            imageIndex = Math.trunc(Math.random() * images.length);
            console.log(imageIndex);
        }
        let x = document.getElementById("imagem1");
        x.setAttribute("src", images[imageIndex].src);
        x.setAttribute("height",images[imageIndex].height);
        x.setAttribute("width",images[imageIndex].width);
        x.setAttribute("alt", images[imageIndex].alt);
        document.body.appendChild(x);

        /*
       for(let i = 0; i < images.length; i++){
            imageIndex = Math.trunc(Math.random() * images.length);
            console.log(imageIndex);
       }
       let x = document.createElement("IMG");
       x.setAttribute("src", images[imageIndex].src);
       x.setAttribute("width", images[imageIndex].width);
       x.setAttribute("height", images[imageIndex].height);
       x.setAttribute("alt",  images[imageIndex].alt);
       document.body.appendChild(x);
       */
    }

    function restart(){
        bstart.style.display = 'block';
        bnext.style.display = 'none';
        brestart.style.display = 'none';
    }

//#endregion