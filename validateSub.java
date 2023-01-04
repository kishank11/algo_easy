import java.util.*;

public class validateSub {
    public static boolean isValidSubSequence(List<Integer> array, List<Integer> sequence) {
        int arrIdx = 0;
        int seqIdx = 0;
        while (arrIdx < array.size() && seqIdx < sequence.size()) {
            if (array.get(arrIdx).equals(sequence.get(seqIdx))) {
                seqIdx++;

            }
            arrIdx++;
        }
        return seqIdx == sequence.size();

    }

    public static void main(String[] args) {
        List<Integer> input1 = new ArrayList() {
            {
                add(1);
                add(2);
                add(3);
                add(4);

            }
        };
        List<Integer> input2 = new ArrayList() {
            {
                add(1);
                add(2);
                add(3);

            }
        };

        boolean x;

        x = isValidSubSequence(input1, input2);

        System.out.println(x);

    }

}