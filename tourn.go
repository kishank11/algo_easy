package main

import "fmt"

const HOME_TEAM_WON = 1

func tourn(competitions [][]string, results []int) string {
	currentBestTeam := ""
	scores := map[string]int{currentBestTeam: 0}

	for idx, competition := range competitions {

		result := results[idx]
		homeTeam, awayTeam := competition[0], competition[1]
		winTeam := awayTeam
		if result == HOME_TEAM_WON {
			winTeam = homeTeam

		}

		updateScores(winTeam, 3, scores)
		if scores[winTeam] > scores[currentBestTeam] {
			currentBestTeam = winTeam
		}
	}
	return currentBestTeam

}

func updateScores(team string, points int, scores map[string]int) {

	scores[team] += points
}

func main() {

	test := [][]string{
		{"HTML", "C#"},
		{"C#", "Python"},
		{"Python", "HTML"},
	}
	tes := []int{0, 0, 1}
	x := ""
	x = tourn(test, tes)
	fmt.Println(x)
}
