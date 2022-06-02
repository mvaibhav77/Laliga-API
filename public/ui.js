// const liga = new Liga;

class UI{

    showTable(standings){
        // DOM Changes
        const table = document.createElement('table');
        table.className='table table-hover';
        let output=`
        <thead>
            <tr class="table-primary">
            <th scope="col">Club</th>
            <th scope="col">MP</th>
            <th scope="col">WIN</th>
            <th scope="col">LOSS</th>
            <th scope="col">DRAW</th>
            <th scope="col">GF</th>
            <th scope="col">GA</th>
            <th scope="col">GD</th>
            <th scope="col">Pts</th>    
            </tr>
        </thead>
        <tbody>
        `;
        for(let i=0;i<Object.keys(standings).length;i++){
            output+=`
                <tr class="table-light">
                    <th scope="row"><img src="${standings[i].team.logo}"heigth="23px"width="23px" class="mx-3">${standings[i].team.name}</th>
                    <td>${standings[i].all.played}</td>
                    <td>${standings[i].all.win}</td>
                    <td>${standings[i].all.lose}</td>
                    <td>${standings[i].all.draw}</td>
                    <td>${standings[i].all.goals.for}</td>
                    <td>${standings[i].all.goals.against}</td>
                    <td>${standings[i].goalsDiff}</td>
                    <td>${standings[i].points}</td>
                </tr>
            `
        }
        output+='</tbody>'
        table.innerHTML=output;
        const bodyData=document.querySelector("#mainData");
        bodyData.appendChild(table);
    }

    showMatches(matches){
        const bodyData=document.querySelector("#mainData");

		// Array for showing DayName
		const DayName= ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
		// Array for showing MonthName
		const MonthName=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

        // DOM Changes
        let output=`
        	<table class="table table-bordered">
        `;

        // console.log(matches[379].league.round.slice(17));
        for(let j =38;j>0;j--){
            output+=`<thead><td colspan=2>Match ${j} of 38</td></thead>`
            for(let i=(j*10 - 1);i>=((j-1)*10);i=i-2){
                let date = new Date(matches[i].fixture.date);
                output+=`
                <tr>
                    <td class="p-4">
                        <div class="d-flex flex-row justify-content-between ">
                            <div id="teams" class="d-flex flex-column mx-2 flex-fill" style="padding-right: 10px;border-right: 1px #ccc solid">
                                <div class="d-flex flex-row justify-content-between">
                                    <span><img src="${matches[i].teams.home.logo}"heigth="23px"width="23px" class="mx-3">${matches[i].teams.home.name}</span>
                                    <span>${matches[i].goals.home}</span>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <span><img src="${matches[i].teams.away.logo}"heigth="23px"width="23px" class="mx-3">${matches[i].teams.away.name}</span>
                                    <span>${matches[i].goals.away}</span>
                                </div>
                            </div>
                            <div id="date">
                                ${matches[i].fixture.status.short}<br>
                                ${DayName[date.getDay()]}, ${date.getDate()} ${MonthName[date.getMonth()]}
                            </div>
                        </div>
                    </td>
                    <td class="p-4">
                        <div class="d-flex flex-row justify-content-between ">
                            <div id="teams" class="d-flex flex-column mx-2 flex-fill" style="padding-right: 10px;border-right: 1px #ccc solid">
                                <div class="d-flex flex-row justify-content-between">
                                    <span><img src="${matches[i-1].teams.home.logo}"heigth="23px"width="23px" class="mx-3">${matches[i-1].teams.home.name}</span>
                                    <span>${matches[i-1].goals.home}</span>
                                </div>
                                <div class="d-flex flex-row justify-content-between">
                                    <span><img src="${matches[i-1].teams.away.logo}"heigth="23px"width="23px" class="mx-3">${matches[i-1].teams.away.name}</span>
                                    <span>${matches[i-1].goals.away}</span>
                                </div>
                            </div>
                            <div id="date">
                                ${matches[i-1].fixture.status.short}<br>
                                ${DayName[date.getDay()]}, ${date.getDate()} ${MonthName[date.getMonth()]}
                            </div>
                        </div>
                    </td>
                </tr>
                `
            }
        }
        
        output+='</table>'
        bodyData.innerHTML=output;
        console.log('Working')
    }
  
    showStats(stats){

        // DOM Changes

        const bodyData=document.querySelector("#mainData");
        const table = document.createElement('table');
        table.className='table table-hover';
        bodyData.innerHTML='<h5 class="mt-3 mx-1">Goals</h5>'
        let output=`
            <thead>
                <tr class="table-primary">
                <th colspan=2>Players</th>
                <th>Goals</th>
                </tr>
            </thead>
            <tbody>
        `;
        for(let i=0;i<5;i++){
            output+=`
                <tr class="active">
                <td>${i+1}</td>
                <td>${stats[i].player.name}</td>
                <td>${stats[i].statistics[0].goals.total}</td>
                </tr>
            `
        }

        table.innerHTML=output;
        bodyData.appendChild(table);
    }

    showTeams(teams){
        // DOM Changes
        const bodyData=document.querySelector("#mainData");
        let output=
        `<div class="card"style="background-color:#091094">
            <div class="card-header text-white">Teams</div>
            <div class="card-body bg-light pb-0">`;
        for(let i=0;i<17;i=i+4){
            output+=`
            <div class="row mb-3" style="grid-gap: 10px;">
                `
            for(let j=0;j<4;j++){
                if((i+j)<20){
                    output+=` 
                    <div class="col p-0 border border-secondary rounded pb-2">
                        <a href="#">
                            <div class="mb-2" id="${teams[i+j].team.id}"style="height:115px;background-image: url(${teams[i+j].venue.image});background-size: cover;background-position: center;">
                                <img src="${teams[i+j].team.logo}" alt=""  id="${teams[i+j].team.id}"class="" height="60px">
                            </div>
                        </a>
                        <span class="card-header text-white "style="width:100%;">${teams[i+j].team.name}</span><br>
                        <span class="text-grey d-inline-block fs-6 ml-2 text-truncate" style="max-width:100px">${teams[i+j].venue.name}</span>
                    </div>
                    `;
                }
            }
            output+='</div>'

        }
        output+=`</div></div>`;
        bodyData.innerHTML=output;

        const col = document.querySelector('.card-body');
        // const ui = new UI;
        col.addEventListener('click',(e)=>{
            const id= e.target.id;
            if(id){
                bodyData.innerHTML='';
                liga.getPlayers(id)
                 .then(data => {
                    ui.showPlyrs(data);
                 })
                  .catch(err => console.log(err))}
          })

    }

    showPlyrs(players){
        // DOM Changes
        const bodyData=document.querySelector("#mainData");

        let output=`
            <div class="card"style="background-color:#091094">
                <div class="card-header text-white">
                    <span class="p-0 text-white">${players[0].statistics[0].team.name}</span>
				    <span class="btn btn-link p-0 text-white "id="back"style="float:right;">&#8592 back</span>
                </div>
                <div class="card-body bg-light pb-0">
        `;

        for(let i=0;i<20;i+=4){
            output+=`<div class="row" style="grid-gap:10px;">`;
            for(let j=0;j<4;j++){
                output+=`
                    <div class="col-sm border border-secondary rounded p-0 mb-2">
                        <div class="plyrImg mb-1" style="background-image:url(${players[i+j].player.photo});background-size: cover;background-position: center;height:130px;"></div>
                        <span class="card-header text-white p-1 pb-0 mb-0 d-inline-block text-truncate"style="width:100px";>${players[i+j].player.name}</span><br>
                        <span class="text-muted fs-7 p-2">${players[i+j].statistics[0].games.position}</span>
                    </div>
                `
            }
            output+='</div>'
        }
        output+='</div></div>'
        bodyData.innerHTML=output;

        const back = document.getElementById('back');
        back.addEventListener('click',(e)=>{
            liga.getTeams()
             .then(data => {
                // console.log(data);
                 ui.showTeams(data);
            })
             .catch(err => console.log(err))
        })

    }


}
