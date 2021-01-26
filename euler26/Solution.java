import java.util.ArrayList;

public class Solution {
    public static void main(String[] args) {
        int numberWithMaxRecurringLength = 1;
        int maxRecurringLength = 0;
        for (int i = 1; i < 1000; i++) {
            int recurringDecimalLength = countRecurringDecimalLength(i);
            if (maxRecurringLength < recurringDecimalLength) {
                numberWithMaxRecurringLength = i;
                maxRecurringLength = recurringDecimalLength;
            }
        }
        System.out.println("Number with max recurring length: " + numberWithMaxRecurringLength);
        System.out.println("Max recurring length: " + maxRecurringLength);
    }

    public static int countRecurringDecimalLength(int denominator) {
        ArrayList<Integer> reminders = new ArrayList<>();

        int numerator = 1;
        int reminder = numerator % denominator;

        while (reminder != 0) {
            if (reminders.contains(reminder)) {
                return reminders.size();
            }

            reminders.add(reminder);
            reminder = (reminder * 10) % denominator;
        }
        return 0;
    }
}