import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        whatIsYourAge();
        downCounter();
        parents();
    }

    // Task 1
    public static void whatIsYourAge() {
        Scanner scanner = new Scanner(System.in);
        int age = 0;

        // Repeat until the age is between 6 and 120 years
        while (age < 6 || age > 120) {
            System.out.print("¿Cuántos años tienes? ");
            age = scanner.nextInt();
            scanner.nextLine();

            if (age < 6 || age > 120) {
                System.out.println("Edad no válida. Por favor, introduce una edad entre 6 y 120 años.");
            }
        }

        // Display message according to age
        if (age >= 6 && age <= 11) {
            System.out.println("Estás en primaria.");
        } else if (age >= 12 && age <= 17) {
            System.out.println("Estás en secundaria.");
        } else if (age >= 18 && age <= 25) {
            System.out.println("Estás en la universidad.");
        } else {
            System.out.println("Probablemente estés trabajando.");
        }
    }

    // Task 2
    public static void downCounter() {
        for (int i = 20; i >= 10; i--) {
            int square = i * i;
            System.out.println("Número: " + i + " - Cuadrado: " + square);
        }
    }

    // Task 3
    public static void parents() {
        Scanner scanner = new Scanner(System.in);
        // Mother data
        System.out.print("¿Cómo se llama tu madre? ");
        String motherName = scanner.nextLine();

        System.out.print("¿Qué edad tiene tu madre? ");
        int motherAge = scanner.nextInt();
        scanner.nextLine();

        // Father data
        System.out.print("¿Cómo se llama tu padre? ");
        String fatherName = scanner.nextLine();

        System.out.print("¿Qué edad tiene tu padre? ");
        int fatherAge = scanner.nextInt();
        scanner.nextLine();

        // Calculate average
        double ageAverage = (motherAge + fatherAge) / 2.0;

        // Result
        System.out.println("Tu madre se llama " + motherName + " y tiene " + motherAge + " años, "
                + "y tu padre se llama " + fatherName + " y tiene " + fatherAge + " años, "
                + "y la media de sus edades es " + ageAverage + ".");
    }
}