import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        arrayLength(scanner);
        evenAndOdd ();
        tripDraw(scanner);

        scanner.close();
    }

    // Task 1
    public static void arrayLength(Scanner scanner) {
        // Orignal array
        String[] colors = {"Rojo", "Verde", "Azul", "Amarillo", "Naranja", "Morado", "Blanco", "Negro", "Gris", "Rosa"};

        int quantity;

        // Ask the user how many elements they want in the array and validate that the amount doesn't exceed the original size of the array
        while (true) {
            System.out.print("¿Cuántos colores deseas? (máx. " + colors.length + "): ");
            quantity = scanner.nextInt();
            scanner.nextLine();

            if (quantity > 0 && quantity <= colors.length) {
                break; // If the amount is valid, we exit the loop.
            } else {
                System.out.println("Cantidad no válida. Intentalo nuevamente.");
            }
        }

        // Create a new array with the first elements and stop at the index with the value of the amount indicated by the user
        String[] selectedColors = new String[quantity];
        for (int i = 0; i < quantity; i++) {
            selectedColors[i] = colors[i];
        }

        // Show the resulting array
        System.out.println("Colores seleccionados:");
        for (String color : selectedColors) {
            System.out.println(color);
        }
    }

    // Task 2
    public static void evenAndOdd () {
        // Array with 20 elements
        int[] numbers = {4, 7, 2, 9, 6, 3, 10, 20, 8, 13, 14, 1, 0, 25, 12, 15, 18, 17, 16, 22};

        // Count how many numbers in the array are even and odd
        int evenCounter = 0;
        int oddCounter = 0;

        for (int num : numbers) {
            if (num % 2 == 0) {
                evenCounter++;
            } else {
                oddCounter++;
            }
        }

        // Create new arrays by grouping numbers according to whether they are even or odd
        int[] evenArray = new int[evenCounter];
        int[] oddArray = new int[oddCounter];

        int evenIndex = 0;
        int oddIndex = 0;

        for (int num : numbers) {
            if (num % 2 == 0) {
                evenArray[evenIndex++] = num;
            } else {
                oddArray[oddIndex++] = num;
            }
        }

        // Show results
        System.out.println("Array original con " + numbers.length + " elementos: " + Arrays.toString(numbers));
        System.out.println("Hay un total de " + evenArray.length + " números pares: " + Arrays.toString(evenArray));
        System.out.println("Hay un total de " + oddArray.length + " números impares: " + Arrays.toString(oddArray));
    }

    //Task 3
    public static void tripDraw (Scanner scanner){
        // Names array
        ArrayList<String> names = new ArrayList<>();
        names.add("Carlos");
        names.add("Laura");
        names.add("Ana");
        names.add("Pedro");
        names.add("Lucía");

        // We mix the elements of the list
        Collections.shuffle(names);

        String answer;
        int index = 0;

        do {
            if (index < names.size()) {
                String winner = names.get(index);
                System.out.println("¡El ganador es: " + winner + "!");
                index++;
            } else {
                System.out.println("Ya no quedan más personas por premiar.");
                break;
            }

            System.out.print("¿Otra vez? (S/N): ");
            answer = scanner.nextLine().trim().toUpperCase();
        } while (answer.equals("S"));

        System.out.println("Sorteo finalizado.");
    }
}