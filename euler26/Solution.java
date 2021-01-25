import java.util.ArrayList;
import java.math.BigInteger;

public class Solution {
    public static void main(String[] args) {
        int numberWithMaxRecurringLength = 1;
        int maxRecurringLength = 0;
        for (int i = 1; i < 1000; i++) {
            int recurringDecimalLength = countRecurringDecimalLength(BigInteger.valueOf(i));
            if (maxRecurringLength < recurringDecimalLength) {
                numberWithMaxRecurringLength = i;
                maxRecurringLength = recurringDecimalLength;
            }
        }
        System.out.println("Number with max recurring length: " + numberWithMaxRecurringLength);
        System.out.println("Max recurring length: " + maxRecurringLength);
    }

    public static int countRecurringDecimalLength(BigInteger denominator) {
        ArrayList<BigInteger> reminders = new ArrayList<>();

        BigInteger numerator = new BigInteger("1");
        BigInteger reminder = numerator.mod(denominator);

        while (reminder.compareTo(BigInteger.valueOf(0)) != 0) {
            if (reminders.contains(reminder)) {
                return reminders.size();
            }

            reminders.add(reminder);
            numerator = numerator.multiply(BigInteger.valueOf(10));
            reminder = numerator.mod(denominator);
        }
        return 0;
    }
}