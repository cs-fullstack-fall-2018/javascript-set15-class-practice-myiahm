class CodeSchoolInstructor{
constructor(teachername, previousEmployer, knownLanguages)
{
    this.teachername = teachername;
    this.previousEmployer = previousEmployer;
    this.knownLanguages = knownLanguages;
}
printAllAttributes()
{
    alert("The teacher "+ this.teachername+ " previously worked for "+ this.previousEmployer+ ",and speaks "+ this.knownLanguages)
}
}

function main()
{
var instructor1 = new CodeSchoolInstructor("Sally Mae "," Wal-Mart ","(spanish,french,english)");
    instructor1.printAllAttributes()
}

main();