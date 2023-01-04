import java.util.*;

class tourn {
    public static int HOME_TEAM_WON = 1;

    public static String tournamentWinner(
            ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {
        String currentBestTeam = "";
        HashMap<String, Integer> scores = new HashMap<String, Integer>();
        scores.put(currentBestTeam, 0);
        for (int idx = 0; idx < competitions.size(); idx++) {
            ArrayList<String> competition = competitions.get(idx);
            int result = results.get(idx);
            String homeTeam = competition.get(0);
            String awayTeam = competition.get(1);
            String winTeam = (result == HOME_TEAM_WON) ? homeTeam : awayTeam;
            updateScores(winTeam, 3, scores);
            if (scores.get(winTeam) > scores.get(currentBestTeam)) {
                currentBestTeam = winTeam;
            }
        }
        return currentBestTeam;
    }

    public static void

            updateScores(String team, int points, HashMap<String, Integer> scores) {

        if (!scores.containsKey(team)) {
            scores.put(team, 0);
        }
        scores.put(team, scores.get(team) + points);
    }

    public static void main(String[] args) {
        ArrayList<ArrayList<String>> test = new ArrayList<ArrayList<String>>();
        ArrayList<String> first = new ArrayList();
        first.add("HTML");
        first.add("C#");

        ArrayList<String> second = new ArrayList();
        second.add("C#");
        second.add("Python");

        ArrayList<String> third = new ArrayList();
        third.add("Python");
        third.add("HTML");

        test.add(first);
        test.add(second);
        test.add(third);
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(0);
        arr.add(0);
        arr.add(1);
        String x;
        x = tournamentWinner(test, arr);
        System.out.println(x);

    }

}

// {"HTML", "C#"},
// {"C#", "Python"},
// {"Python", "HTML"},