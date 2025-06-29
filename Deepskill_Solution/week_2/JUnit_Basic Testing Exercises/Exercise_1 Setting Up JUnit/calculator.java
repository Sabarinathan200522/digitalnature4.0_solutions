package com.example.junit_demo;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
package com.example.junit_demo;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
    }
}
