// -Create a class called PersonAccount.
// It has firstName, lastName, incomes, expenses properties, and totalincome, totalExpense, addIncome, addExpense and accountBalance methods. 
// Incomes is an array of objects. incomes object have income and discription properties.
// Expenses is also an array of objects which has expense and description properties.

class PersonAccount {
    
    constructor(firstName, lastName, income, expenses){
        this.firstName = firstName;
        this.lastName = lastName;
        this.income = income;
        this.expenses = expenses;
        this.total_income = 0;
        this.totalexpense = 0;

        
        

    }
    totalIncome(){
       

        for(let i = 0;  i < this.income.length; i++){

            this.total_income += this.income[i];
        }
        
        
    }
    getTotalIncome(){
        console.log("The total income is : "  + this.total_income);
    }
    getTotalExpenses(){
        console.log("The total expenses is : "  + this.totalexpense);

    }
    totalExpenses(){
        for(let i = 0;  i < this.expenses.length; i++){

            this.totalexpense += this.expenses[i];
            
        }
        

    }
    addIncome(more_income){

        this.total_income += more_income;
        this.getTotalIncome();


    }
    addExpenses(more_expenses){
        this.totalexpense+=more_expenses;
        this.getTotalExpenses();

    }
    accountBalance(){

        console.log("Your Account balance is : "  + (this.total_income - this.totalexpense));

    }
}
const income = [2000, 8000, 31000];
const expenses = [10000, 2000, 3000];
const acc = new PersonAccount("aman", "nadeem", income, expenses);
acc.totalIncome();
acc.getTotalIncome();
acc.totalExpenses();
acc.getTotalExpenses()
console.log("ADDING MORE INCOME");
acc.addIncome(10000);
console.log("ADDING MORE EXPENSES");
acc.addExpenses(2000);
acc.accountBalance();