
let countries = document.querySelector(".countries")

let z = fetch("https://restcountries.com/v3.1/all");

z.then((response) => {
  return response.json();
})
  .then((info) => {
    countries.innerHTML = ""
    info.forEach((elem) => {
      countries.innerHTML += ` 
    <div data-country='${elem.name.common}'  id='listBox' class="countries__box"> 
    <img 
        src="${elem.flags.png}" 
        alt="user" 
        width="100" 
      /> 
      <div class='countries__textbox'><h5>${elem.name.common}</h5>
      <p>Population:<span>${elem.population}</span></p>
      <p class='region'>Region:<span>${elem.region}</span></p>
      <p>Capital:<span class=''population>${elem.capital}</span></p>
      <p>Timezone:<span>${elem.timezones[0]}</span></p>
      </div>
      
    
      <br />
    
    </div>
    `;
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Ваш запрос прилетел");
  });

// let listBox = document.querySelector('#listBox')

let body= document.querySelector('body')
let searchInp = document.querySelector('.inputbox__inp1')
let circle = document.querySelector('.circle')
let toggle = document.querySelector('.toggle')
let items = document.querySelectorAll('.contaniner,.main,.head,body,.countries,#listBox')


circle.addEventListener('click', () => {
  items.forEach(item => {
    item.classList.toggle('active')

  })
  circle.classList.toggle('active')

})



// circle.addEventListener('click', () => {
//   circle.style.cssText += `
//   position: absolute;
//   left: 35px;

//   `;

// })

// circle.addEventListener('click', () => {
//     circle.classList.toggle('left')

// })


let clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
  searchInp.value=''
})
// countries__box
searchInp.addEventListener('keyup', (event) => {
const boxes = document.querySelectorAll('.countries__box')

  boxes.forEach((elem) => {

    if (elem.dataset.country.toLowerCase().includes(event.target.value.toLowerCase())) {
      elem.style.display = 'flex';
      elem.style.flexDirection='column';
    }
    else {
      elem.style.display='none'

    }
  })

})


// let regionbox =document.querySelector('#region')

// let africaCB = document.getElementById('africa')
// let americasCB =document.querySelector('#americas')
// let europeCB = document.querySelector('#europe')
// let oceaniaCB = document.querySelector('#oceania')
//         let asiaCB = document.querySelector('#asia')




const select = document.querySelector('.region');

select.addEventListener('change', function handleChange(item) {

  // console.log(item.target.value); // 👉️ get selected VALUE
  const boxes = document.querySelectorAll('.countries__box')

  boxes.forEach((elem) => {
    console.log(elem);

    if (elem.textContent.toLowerCase().includes(item.target.value.toLowerCase())) {
      elem.style.display = 'flex';
      elem.style.flexDirection='column';
    }
    else {
      elem.style.display='none'

    }
  })

});
