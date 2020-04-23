class User:		# here's what we have so far
    def __init__(self, name):
        self.name = name
        self.account = BankAccount(int_rate=.02, balance=0)
        # adding the deposit method
    def make_deposit(self, amount):	        # takes an argument that is the amount of the deposit
        self.account.balance += amount   	# the specific user's account increases by the amount of the value received
        return self
    def make_withdrawal(self, amount):
        self.account.balance -= amount
        return self

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

april = User("april")
april.make_deposit(10).make_withdrawal(5)
print(april.account.balance)