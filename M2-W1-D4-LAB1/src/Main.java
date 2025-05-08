import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = {3, 1, 7, 5, 9, 2};
        System.out.println("Array original: " + Arrays.toString(numbers));

        //Task 1
        System.out.println("Diferencia entre el número más grande y el más pequeño: " + differenceMaxMin(numbers));

        //Task 2
        findSmallests(numbers);

        //Task 3
        int x = 3;
        int y = 5;

        System.out.println("Teniendo en cuenta que x = 3 e y = 5, el resultado de la expresión es: " + calculateExpression(x, y));
    }

    //Task 1
    public static int differenceMaxMin(int[] array) {
        int max = array[0];
        int min = array[0];

        for (int num : array) {
            if (num > max) {
                max = num;
            }
            if (num < min) {
                min = num;
            }
        }

        return max - min;
    }

    //Task 2
    public static void findSmallests(int[] array) {
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;

        for (int num : array) {
            if (num < min1) {
                min2 = min1;
                min1 = num;
            } else if (num < min2 && num != min1) {
                min2 = num;
            }
        }

        System.out.println("El número más pequeño es: " + min1);
        System.out.println("El segundo número más pequeño es: " + min2);
    }

    //Task 3
    public static double calculateExpression(int x, int y) {
        return Math.pow(x, 2) + Math.pow((4.0 * y / 5 - x), 2);
    }
}