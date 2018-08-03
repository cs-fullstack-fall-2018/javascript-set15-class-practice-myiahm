class TwitterUser{
    constructor(userName, followingNumber, followersNumber, pictureURL)
    {
        this.userName = userName;
        this.followingNUmber = followingNumber;
        this.followersNumber = followersNumber;
        this.pictureURL = pictureURL;
    }
printAllAttributes()
{
    alert(this.userName + "is following: "+ this.followingNUmber+ "people " +" and has "+ this.followersNumber +"followers "+ this.pictureURL);
}
}

function main()
{
var user1 = new TwitterUser("cat_Fish01 ",25,35,"http://tineye.com/images/widgets/mona.jpg.");
user1.printAllAttributes()
}

main();