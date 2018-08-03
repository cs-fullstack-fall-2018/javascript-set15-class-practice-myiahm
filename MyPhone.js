class Phone{
    constructor(phoneName, storageLimit, isAndroid, screenSize, hasHeadPhoneJack)
    {
        this.phoneName = phoneName;
        this.storageLimit = storageLimit;
        this.isAndroid = isAndroid;
        this.screenSize = screenSize;
        this.hasHeadPhoneJack = hasHeadPhoneJack;
    }
    printAllAttributes()
    {
        alert(this.phoneName + " has " + this.storageLimit +"GB."+ "This " + this.isAndroid +"an android," + " it also has a " + this.screenSize + " in. screen " + " and " + this.hasHeadPhoneJack + " head phone jack. ");

    }
}

function main()
{
    var phone1 = new Phone("iPhone",128,"is not ", 5,"does" )
    phone1.printAllAttributes()
}

main();