import java.util.HashMap;

public class Main {
    public static double futureValue(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return futureValue(principal, rate, years - 1) * (1 + rate);
    }
    static HashMap<Integer, Double> memo = new HashMap<>();

    public static double futureValueMemo(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        if (memo.containsKey(years)) {
            return memo.get(years);
        }
        double value = futureValueMemo(principal, rate, years - 1) * (1 + rate);
        memo.put(years, value);
        return value;
    }

    public static void main(String[] args) {
        double principal = 1000.0;
        double rate = 0.05;       
        int years = 10;
        double result = futureValue(principal, rate, years);
        System.out.println("Future value (recursive): $" + result);
        double resultMemo = futureValueMemo(principal, rate, years);
        System.out.println("Future value (memoized): $" + resultMemo);
    }
}
