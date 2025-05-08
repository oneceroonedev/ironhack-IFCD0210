package bigdecimal;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Rounder {
    public static double roundToNearestHundredth(BigDecimal number) {
        // Round to two decimal places using HALF_UP
        BigDecimal rounded = number.setScale(2, RoundingMode.HALF_UP);
        return rounded.doubleValue();
    }
}