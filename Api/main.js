let Search = document.getElementById('Search');
let SearchBtn = document.getElementById('SearchBtn');
let main = document.getElementById('main');
let spiner = document.getElementById("spiner");

let dataCard;

SearchBtn.addEventListener('click', getCard)

async function getCard() {
    spiner.classList.remove('none')
    let response = await fetch(`https://api.github.com/users/${Search.value}`)
    console.log(response)
    if (response.ok){
        dataCard = await response.json()
        console.log(dataCard)
        generateCard()
    }else{
        console.log('Данные не верные')
    }
    spiner.classList.add('none')
}

function generateCard(){
    console.log(dataCard)
    main.classList.remove('none')
    main.innerHTML = `        
        <img src="https://avatars.mds.yandex.net/i?id=2d05f27b48facbd406fdd2f6fca23ad3723de632-5286004-images-thumbs&n=13"/>
        <h1>${dataCard.login}</h1>
        <p>description</p>
        <div>
            <i class="fab fa-js"></i>
            <span>Репрезиториев: 5</span>
        </div>
        <div>
            <i class="fab fa-python"></i>
            <span>Репрезиториев: 6</span>
        </div>
        `
}