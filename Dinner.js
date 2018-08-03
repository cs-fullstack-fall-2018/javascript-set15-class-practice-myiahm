class Dinner{
    constructor(dishName, protein, veggie, price)
    {
    this.dishName = dishName;
    this.protein = protein;
    this.veggie = veggie;
    this.price = price;
    }
printAllAttributes()
{
    alert(this.dishName +" has " + this.protein + ",and "+ this.veggie + " and cost $" + this.price);
}
}

function main()
{
var plate1 = new Dinner("Chicken Dinner ","chicken ", "carrots ", 10);
    plate1.printAllAttributes()
}

main();