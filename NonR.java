import java.util.*;

class NonR {

    public static int firstNonRepeatingCharacter(String string) {
        // Write your code here.
        HashMap<Character, Integer> characterFrequencies = new HashMap<Character, Integer>();
        for (int idx = 0; idx < string.length(); idx++) {
            char character = string.charAt(idx);
            characterFrequencies.put(character, characterFrequencies.getOrDefault(character, 0) + 1);

        }
        for (int idx = 0; idx < string.length(); idx++) {
            char character = string.charAt(idx);
            if (characterFrequencies.get(character) == 1) {
                return idx;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(firstNonRepeatingCharacter("abcdefabcdefghijklmnopqrstuvwxy"));

    }
}
