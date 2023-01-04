const home_team_won = 1;
function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = { [currentBestTeam]: 0 }; console.log(scores)
    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTeam, awayTeam] = competitions[idx]


        const winningTeam = result === home_team_won ? homeTeam : awayTeam
        updateScores(winningTeam, 3, scores);
        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }

    return currentBestTeam
}

function updateScores(team, points, scores) {
    console.log(team)
    if (!(team in scores)) scores[team] = 0
    scores[team] += points;
}


const x = tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
], [0, 0, 0])

console.log(x)