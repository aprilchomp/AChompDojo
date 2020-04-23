

class BankAccount:
    def __init__(self, int_rate=0, balance=0):  # don't forget to add some default values for these parameters!
        self.int_rate = int_rate
        self.balance = balance                      # your code here! (remember, this is where we specify the attributes for our class)
    def deposit(self, amount):
        self.balance += amount
        return self 
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount 
        else:
            self.balance -= 5 
            print("Insufficient Funds: Charging a $5 fee")
        return self
    def display_account_info(self):
        print("Balance:", "$", self.balance)
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance + self.balance * self.int_rate
        return self
april = BankAccount(balance=100)
april.deposit(10).deposit(10).deposit(10).withdraw(40).yield_interest().display_account_info()
tuna = BankAccount(.01, 500)
tuna.deposit(100).deposit(100).withdraw(50).withdraw(50).withdraw(50).withdraw(50).yield_interest().display_account_info()