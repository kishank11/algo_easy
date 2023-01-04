home_team_won = 1


def tournamentWinner(competitions, results):
    currentBestTeam = ''
    scores = {currentBestTeam: 0}
    for idx, competition in enumerate(competitions):
        result = results[idx]
        homeTeam, awayTeam = competition

        winningTeam = homeTeam if result == home_team_won else awayTeam
        updateScores(winningTeam, 3, scores)
        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam
    return currentBestTeam


def updateScores(team, points, scores):
    if not (team in scores):
        scores[team] = 0
    scores[team] += points


x = tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]


], [0, 0, 0])

print(x)
