const liga = new Liga;
const ui =new UI;

// buttons
const tbl=document.getElementById('tbl');
const mtch=document.getElementById('mtch');
const stats=document.getElementById('stats');
const plyrs=document.getElementById('plyrs');

window.addEventListener('load',(e)=>{
    liga.getStandings()
     .then(data => {
         ui.showTable(data.league.standings[0]);
        // console.log(Object.keys(data.league.standings[0]).length)
        })
       .catch(err => console.log(err))});


tbl.addEventListener('click',(e)=>{
  tbl.classList.add('active');
  mtch.classList.remove('active');
  stats.classList.remove('active');
  plyrs.classList.remove('active');
  liga.getStandings()
    .then(data => {
      ui.showTable(data.league.standings[0]);
    })
    .catch(err => console.log(err))
});

mtch.addEventListener('click',(e)=>{
  tbl.classList.remove('active');
  mtch.classList.add('active');
  stats.classList.remove('active');
  plyrs.classList.remove('active');

  liga.getMatches()
    .then(data => {
      ui.showMatches(data);
    })
    .catch(err => console.log(err))
});

stats.addEventListener('click',(e)=>{
  // console.log(tbl.classList);
  // tbl.classList.add('waste');
  // console.log(tbl.classList);
  // tbl.classList.remove('waste');
  // console.log(tbl.classList);
  tbl.classList.remove('active');
  mtch.classList.remove('active');
  stats.classList.add('active');
  plyrs.classList.remove('active');

  // ui.showStats();
  liga.getStats()
    .then(data => {
      ui.showStats(data);
    })
    .catch(err => console.log(err))
});

plyrs.addEventListener('click',(e)=>{
  tbl.classList.remove('active');
  mtch.classList.remove('active');
  stats.classList.remove('active');
  plyrs.classList.add('active');
  liga.getTeams()
    .then(data => {
      ui.showTeams(data);
    })
    .catch(err => console.log(err))
});

