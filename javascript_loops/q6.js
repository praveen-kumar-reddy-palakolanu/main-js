var students=[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var marks=0;
for (var i=0;i<students.length;i++) {
        marks+=students[i][1];
        var avg=(marks/students.length);
}
console.log("Average grade: "+(marks)/students.length);
if (avg < 60){
    console.log("F");      
} 
else if (avg < 70) {
    console.log("D"); 
} 
else if (avg < 80){
    console.log("C"); 
} 
else if (avg < 90) {
    console.log("B"); 
} 
else if (avg < 100) {
    console.log("A"); 
}
