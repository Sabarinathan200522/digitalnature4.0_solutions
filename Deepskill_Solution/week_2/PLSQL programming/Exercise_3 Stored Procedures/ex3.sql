-- Scenario 1: The bank needs to process monthly interest for all savings accounts.
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR rec IN (SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings') LOOP
        UPDATE Accounts
        SET Balance = rec.Balance * 1.01
        WHERE AccountID = rec.AccountID;
    END LOOP;
    COMMIT;
END;
/
-- Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE Department = dept_name;

    COMMIT;
END;
/
-- Scenario 3: Customers should be able to transfer funds between their accounts.
CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) IS
    from_balance NUMBER;
BEGIN
    SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_account;

    IF from_balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance');
    ELSE
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_account;
        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_account;

        COMMIT;
    END IF;
END;
/
