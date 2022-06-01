class Liga{
    // constructor(){
    //     this.season = new Date().getFullYear();        
    // }  

    async getStandings(){
        const tableResponce = await fetch('/standings');
        const standings = await tableResponce.json();
        // console.log(standings);
        return standings.response[0];
    }

    async getMatches(){
        // console.log(this.season);
        const matchResponce = await fetch(`/matches`);
        const matches = await matchResponce.json();
        return matches.response;
    }

    async getStats(){
        // console.log(this.season);
        const Responce = await fetch('/stats');
        const statistics = await Responce.json();
        return statistics.response;
    }

    async getTeams(){
        const teamResponse = await fetch('/teams');
        const teams = await teamResponse.json();
        return teams.response;

    }

    async getPlayers(id){
      const playersResponse = await fetch(`/players?team=${id}`);
        const players = await playersResponse.json();
        return players.response;
    }
}

