package bigdecimal;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // Rounder
        BigDecimal num1 = new BigDecimal("4.2545");
        System.out.println("Número original: " + num1 + " => Redondeo a dos decimales: " + Rounder.roundToNearestHundredth(num1));

        //SignReverser
        BigDecimal num2 = new BigDecimal("1.2345");
        BigDecimal num3 = new BigDecimal("-45.67");
        System.out.println("Número original: " + num2 + " => Invertir signo y redondeo a un decimal: " + SignReverser.reverseSignAndRoundTenth(num2));
        System.out.println("Número original: " + num3 + " => Invertir signo y redondeo a un decimal: " + SignReverser.reverseSignAndRoundTenth(num3));
    }
}