let homeBtn = document.getElementById('home-btn');
let historyBtn = document.getElementById('history-btn');
let pikachuBtn = document.getElementById('pikachu-btn');
let bulbasaurBtn = document.getElementById('bulbasaur-btn');
let squirtleBtn = document.getElementById('squirtle-btn');
let charmanderBtn = document.getElementById('charmander-btn');

let pageHome = document.querySelector("#page-home");
let pageHistory = document.querySelector("#page-history");
let pagePikachu = document.querySelector('#page-pikachu');
let pageBulbasaur = document.querySelector("#page-bulbasaur");
let pageSquirtle = document.querySelector("#page-squirtle");
let pageCharmander = document.querySelector("#page-charmander");

loadData();

async function loadData() {
  let response = await axios.get('home.txt');
  pageHome.innerHTML = response.data;
}

homeBtn.addEventListener('click', async function(){
  console.log("home btn");

  pageHome.innerHTML = "";
  pageHistory.innerHTML = "";
  pagePikachu.innerHTML = "";
  pageBulbasaur.innerHTML = "";
  pageCharmander.innerHTML = "";
  pageSquirtle.innerHTML = "";

  pageHistory.classList.remove('shown');
  pageHistory.classList.add('hidden');
  
  pagePikachu.classList.remove('shown');
  pagePikachu.classList.add('hidden');

  pageBulbasaur.classList.remove('shown');
  pageBulbasaur.classList.add('hidden');

  pageCharmander.classList.remove('shown');
  pageCharmander.classList.add('hidden');

  pageSquirtle.classList.remove('shown');
  pageSquirtle.classList.add('hidden');

  let response = await axios.get('home.txt');
  pageHome.innerHTML = response.data;
  
  pageHome.classList.add('shown');
})


historyBtn.addEventListener('click', async function(){
  console.log("history btn");

  pageHome.innerHTML = "";
  pageHistory.innerHTML = "";
  pagePikachu.innerHTML = "";
  pageBulbasaur.innerHTML = "";
  pageCharmander.innerHTML = "";
  pageSquirtle.innerHTML = "";

  pageHome.classList.remove('shown');
  pageHome.classList.add('hidden');
  
  pagePikachu.classList.remove('shown');
  pagePikachu.classList.add('hidden');

  pageBulbasaur.classList.remove('shown');
  pageBulbasaur.classList.add('hidden');

  pageCharmander.classList.remove('shown');
  pageCharmander.classList.add('hidden');

  pageSquirtle.classList.remove('shown');
  pageSquirtle.classList.add('hidden');

  let response = await axios.get('history.txt');
  pageHistory.innerHTML = response.data;
  
  pageHistory.classList.add('shown');
})

pikachuBtn.addEventListener('click', async function(){
  console.log("history btn");

  pageHome.innerHTML = "";
  pageHistory.innerHTML = "";
  pagePikachu.innerHTML = "";
  pageBulbasaur.innerHTML = "";
  pageCharmander.innerHTML = "";
  pageSquirtle.innerHTML = "";

  pageHome.classList.remove('shown');
  pageHome.classList.add('hidden');
  
  pageHistory.classList.remove('shown');
  pageHistory.classList.add('hidden');

  pageBulbasaur.classList.remove('shown');
  pageBulbasaur.classList.add('hidden');

  pageCharmander.classList.remove('shown');
  pageCharmander.classList.add('hidden');

  pageSquirtle.classList.remove('shown');
  pageSquirtle.classList.add('hidden');

  let response = await axios.get('pikachu.txt');
  pagePikachu.innerHTML = response.data;
  
  pagePikachu.classList.add('shown');
})

bulbasaurBtn.addEventListener('click', async function(){
  console.log("bulbasaur btn");

  pageHome.innerHTML = "";
  pageHistory.innerHTML = "";
  pagePikachu.innerHTML = "";
  pageBulbasaur.innerHTML = "";
  pageCharmander.innerHTML = "";
  pageSquirtle.innerHTML = "";

  pageHome.classList.remove('shown');
  pageHome.classList.add('hidden');
  
  pageHistory.classList.remove('shown');
  pageHistory.classList.add('hidden');

  pagePikachu.classList.remove('shown');
  pagePikachu.classList.add('hidden');

  pageCharmander.classList.remove('shown');
  pageCharmander.classList.add('hidden');

  pageSquirtle.classList.remove('shown');
  pageSquirtle.classList.add('hidden');

  let response = await axios.get('bulbasaur.txt');
  pageBulbasaur.innerHTML = response.data;
  
  pageBulbasaur.classList.add('shown');
})

charmanderBtn.addEventListener('click', async function(){
  console.log("charmander btn");

  pageHome.innerHTML = "";
  pageHistory.innerHTML = "";
  pagePikachu.innerHTML = "";
  pageBulbasaur.innerHTML = "";
  pageCharmander.innerHTML = "";
  pageSquirtle.innerHTML = "";

  pageHome.classList.remove('shown');
  pageHome.classList.add('hidden');
  
  pageHistory.classList.remove('shown');
  pageHistory.classList.add('hidden');

  pagePikachu.classList.remove('shown');
  pagePikachu.classList.add('hidden');

  pageBulbasaur.classList.remove('shown');
  pageBulbasaur.classList.add('hidden');

  pageSquirtle.classList.remove('shown');
  pageSquirtle.classList.add('hidden');

  let response = await axios.get('charmander.txt');
  pageCharmander.innerHTML = response.data;
  
  pageCharmander.classList.add('shown');
})

squirtleBtn.addEventListener('click', async function(){
  console.log("squirtle btn");

  pageHome.innerHTML = "";
  pageHistory.innerHTML = "";
  pagePikachu.innerHTML = "";
  pageBulbasaur.innerHTML = "";
  pageCharmander.innerHTML = "";
  pageSquirtle.innerHTML = "";

  pageHome.classList.remove('shown');
  pageHome.classList.add('hidden');
  
  pageHistory.classList.remove('shown');
  pageHistory.classList.add('hidden');

  pagePikachu.classList.remove('shown');
  pagePikachu.classList.add('hidden');

  pageBulbasaur.classList.remove('shown');
  pageBulbasaur.classList.add('hidden');

  pageCharmander.classList.remove('shown');
  pageCharmander.classList.add('hidden');

  let response = await axios.get('squirtle.txt');
  pageSquirtle.innerHTML = response.data;
  
  pageSquirtle.classList.add('shown');
})
