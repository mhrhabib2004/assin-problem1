function calculateMoney(ticketsale){
    if(ticketsale <=0){
        return 'Invalid Number';
    }


    const ticketPrice = 120;
    const gardCost = 500;
    const stafCost = 8*50;

    const income = ticketPrice * ticketsale;
    const totalCost = gardCost + stafCost;
    const totalIncome = income - totalCost;
    return totalIncome;

    
}
// const totalIncome = calculateMoney(10);
const totalIncome = calculateMoney(-130);
// const totalIncome = calculateMoney(10);
// const totalIncome = calculateMoney(10);
console.log(totalIncome);
