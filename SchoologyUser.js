class SchoologyUser{
    constructor(studentName, schoolName, GPA, classes)
    {
        this.studentName = studentName;
        this.schoolName = schoolName;
        this.GPA = GPA;
        this.classes = classes;

    }
printAllAttributes()
{
    alert("This student "+ this.studentName + " goes to "+ " and has a GPA of "+ this.GPA+ ",and is enrolled in "+this.classes+" classes. ")
}
}

function main()
{
var studentUser = new SchoologyUser("Jack","U of M ", "3.9", 4);
    studentUser.printAllAttributes()
}

main();