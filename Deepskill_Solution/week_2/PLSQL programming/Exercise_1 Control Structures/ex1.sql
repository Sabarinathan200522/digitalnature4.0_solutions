-- Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.
SET SERVEROUTPUT ON;
BEGIN
    FOR rec IN (
        SELECT c.CustomerID, c.DOB, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
    ) LOOP
        IF MONTHS_BETWEEN(SYSDATE, rec.DOB) / 12 > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate * 0.99
            WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/
-- Scenario 2: A customer can be promoted to VIP status based on their balance.
SET SERVEROUTPUT ON;
BEGIN
    FOR rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/
-- Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.
SET SERVEROUTPUT ON;
BEGIN
    FOR rec IN (
        SELECT LoanID, CustomerID, EndDate 
        FROM Loans
        WHERE EndDate <= SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID || 
                             ' for Customer ID ' || rec.CustomerID || 
                             ' is due on ' || TO_CHAR(rec.EndDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/



