package bigdecimal;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class SignReverser {
    public static BigDecimal reverseSignAndRoundTenth(BigDecimal number) {
        // Invert the sign
        BigDecimal reversed = number.negate();
        // Round to one decimal place with HALF_UP
        return reversed.setScale(1, RoundingMode.HALF_UP);
    }
}