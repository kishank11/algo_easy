import java.util.*;

class ProductSum {
    // Tip: You can use `element instanceof ArrayList` to check whether an item
    // is an array or an integer.
    public static int productSum(List<Object> array) {
        return productSumHelper(array, 1);

    }

    public static int productSumHelper(List<Object> array, int multiplier) {
        int sum = 0;
        for (Object el : array) {
            if (el instanceof ArrayList) {
                @SuppressWarnings("unchecked")
                ArrayList<Object> ls = (ArrayList<Object>) el;
                sum += productSumHelper(ls, multiplier + 1);
            } else {
                sum += (int) el;
            }
        }
        return sum * multiplier;
    }

    public static void main(String args[]) {
        List<Object> al = new ArrayList<Object>();
        List<Object> al1 = new ArrayList<Object>();

        Integer mys1 = 34;
        al1.add(4);
        al1.add(89);
        al.add(3);
        al.add(34);
        al.add(4);
        al.add(9);
        al.add(al1);

        System.out.println(productSum(al));
    }
}