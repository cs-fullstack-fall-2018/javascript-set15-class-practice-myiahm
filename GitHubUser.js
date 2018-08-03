class GitHubUser{
constructor(userName, fileName, descriptionOfRepository, code)
{
    this.userName = userName;
    this.fileName = fileName;
    this.discriptionOfRepository = discriptionOfRepository;
    this.code = code;
}
    printAllAttributes()
    {
        alert("The user "+ this.userName + this.fileName+ this.discriptionOfRepository+this.code)
    }

}

function main()
{
var username = new GitHubUser("cat_N_the_Hat","javaLoops ","ClassWork "," for(x=0,x>5,x++) ")
    username.printAllAttributes()
}

main();