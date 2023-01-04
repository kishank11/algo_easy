import java.util.*;

public class TwoSum {

    public static int[] twoSum(int[] input, int target) {
        for (int i = 0; i < input.length; i++) {
            int first = input[i];
            for (int j = i + 1; j < input.length; j++) {
                int second = input[j];
                int total = first + second;
                if (total == target) {
                    return new int[] { first, second };
                }
            }
        }
        return new int[] {};

    }

    public static void main(String[] args) {

        int[] input1 = { 0, 6, 7, 3 };
        int target = 3;
        int[] x = {};

        x = twoSum(input1, target);

        System.out.printf("[%s,%s]", x[0], x[1]);

    }
}
