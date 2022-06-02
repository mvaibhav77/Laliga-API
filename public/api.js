const loader = document.getElementById('loader');

class Liga{
    // constructor(){
    //     this.season = new Date().getFullYear();        
    // }  

    async getStandings(){
        loader.style='display:block';
        const tableResponce = await fetch('/standings');
        const standings = await tableResponce.json();
        loader.style = 'display:none';
        return standings.response[0];
    }

    async getMatches(){
        loader.style='display:block';
        const matchResponce = await fetch(`/matches`);        const matches = await matchResponce.json();
        loader.style = 'display:none';
        return matches.response;
    }

    async getStats(){
        loader.style='display:block';
        const Responce = await fetch('/stats');
        const statistics = await Responce.json();
        loader.style = 'display:none';
        return statistics.response;
    }

    async getTeams(){
        loader.style='display:block';
        const teamResponse = await fetch('/teams');
        const teams = await teamResponse.json();
        loader.style = 'display:none';
        return teams.response;

    }

    async getPlayers(id){
        loader.style='display:block';
        const playersResponse = await fetch(`/players?team=${id}`);
        const players = await playersResponse.json();
        loader.style = 'display:none';
        return players.response;
    }
}

