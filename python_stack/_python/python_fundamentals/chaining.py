# Create a file with the User class, including the __init__ and make_deposit methods	

# Add a make_withdrawal method to the User class	

# Add a display_user_balance method to the User class	

# Create 3 instances of the User class	

# Have the first user make 3 deposits and 1 withdrawal and then display their balance	

# Have the second user make 2 deposits and 2 withdrawals and then display their balance	

# Have the third user make 1 deposits and 3 withdrawals and then display their balance	

class User:		# here's what we have so far
    def __init__(self, name):
        self.name = name
        self.account_balance = 0
        # adding the deposit method
    def make_deposit(self, amount):	        # takes an argument that is the amount of the deposit
        self.account_balance += amount   	# the specific user's account increases by the amount of the value received
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

april = User("april")
tuna = User("tuna")
dwight = User("dwight")
april.make_deposit(10).make_deposit(10).make_deposit(10).make_withdrawal(5)
print(april.account_balance)
tuna.make_deposit(10).make_deposit(10).make_withdrawal(2).make_withdrawal(2)
print(tuna.account_balance)
dwight.make_deposit(50).make_withdrawal(10).make_withdrawal(10).make_withdrawal(10)
print(dwight.account_balance)