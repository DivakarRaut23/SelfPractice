
// Create an array of objects called schools. Each school should have the following properties: name (string), address (string), headTeacher (object: title(string), lastName(string))

let schools = [
    {
        name: "Gregory Hills Public School",
        address: "Camden Valley Way, Catherine Field",
        headTeacher: {
            title: "Mr",
            lastName: "Wynston"
        }
    },
    {
        name: "Mortdale High Public School",
        address: "Scott St, Mortdale",
        headTeacher: {
            title: "Dr",
            lastName: "Chapell"
        }
    },
    {
        name: "Kingsford High School",
        address: "Alexandria Pde, Kingsford",
        headTeacher: {
            title: "Ms",
            lastName: "Jhonson"
        }
    },
    {
        name: "Port Kembla Public School",
        address: "Jervis Ave, Port Kembla",
        headTeacher: {
            title: "Miss",
            lastName: "Smith"
        }

    }
];


// Add a property called students to each schoolwhich is an object array. Each student has the following properties: firstName (string), lastName (string), age (number), yearGroup (number)

schools[0].students = [
    {
        firstName: "Divakar1",
        lastName: "Raut1",
        age: 10,
        yearGroup: 6
    },
    {
        firstName: "Divakar2",
        lastName: "Raut2",
        age: 12,
        yearGroup: 9
    },
    {
        firstName: "Divakar3",
        lastName: "Raut3",
        age: 16,
        yearGroup: 12
    },
    {
        firstName: "Divakar4",
        lastName: "Raut4",
        age: 12,
        yearGroup: 7
    }
];

schools[1].students = [
    {
        firstName: "Prvakar1",
        lastName: "Raut1",
        age: 13,
        yearGroup: 9
    },
    {
        firstName: "Prvakar2",
        lastName: "Raut2",
        age: 14,
        yearGroup: 10
    },
    {
        firstName: "Prvakar3",
        lastName: "Raut3",
        age: 9,
        yearGroup: 6
    },
    {
        firstName: "Prvakar4",
        lastName: "Raut4",
        age: 10,
        yearGroup: 7
    }
];

schools[2].students = [
    {
        firstName: "Azamat1",
        lastName: "Raut1",
        age: 14,
        yearGroup: 10
    },
    {
        firstName: "Azamat2",
        lastName: "Raut2",
        age: 13,
        yearGroup: 9
    },
    {
        firstName: "Azamat3",
        lastName: "Raut3",
        age:12,
        yearGroup: 7
    },
    {
        firstName: "Azamat4",
        lastName: "Raut4",
        age: 17,
        yearGroup:11
    }
];

schools[3].students = [
    {
        firstName: "Bhagatov1",
        lastName: "Alferd1",
        age: 18,
        yearGroup:11
    },
    {
        firstName: "Bhagatov2",
        lastName: "Alferd2",
        age: 4,
        yearGroup:0
    },
    {
        firstName: "Bhagatov3",
        lastName: "Alferd3",
        age: 12,
        yearGroup: 9
    },
    {
        firstName: "Bhagatov4",
        lastName: "Alferd4",
        age: 14,
        yearGroup: 10
    },
    {
        firstName: "Bhagatov5",
        lastName: "Alferd5",
        age: 12,
        yearGroup: 8
    }
];


// Add a property called teachers to each school which is an object array. Each teacher has the following properties: title (string), lastName (string), subject (string

schools[0].teachers = [
    {
        title: "Mr",
        lastName: "Parker",
        subject: "Programming"
    },
    {
        title: "Ms",
        lastName: "Gouder",
        subject: "Science"
    },
    {
        title: "Ms",
        lastName: "Musk",
        subject: "Artificial Inteligence"
    },
    {
        title: "Mr",
        lastName: "Jaffer",
        subject: "Chemistry"
    }
];

schools[1].teachers = [
    {
        title: "Ms",
        lastName: "Yang",
        subject: "History"
    },
    {
        title: "Ms",
        lastName: "Duffy",
        subject: "Science"
    },
    {
        title: "Mr",
        lastName: "Joshi",
        subject: "Creative Design"
    },
    {
        title: "Miss",
        lastName: "Sharma",
        subject: "Interior Design"
    }
];

schools[2].teachers = [
    {
        title: "Mr",
        lastName: "Hannel",
        subject: "JavaScript"
    },
    {
        title: "Miss",
        lastName: "Shelby",
        subject: "Mathematics"
    },
    {
        title: "Mr",
        lastName: "Duke",
        subject: "Algebra"
    },
    {
        title: "Ms",
        lastName: "Leiota",
        subject: "Sports"
    }
];

schools[3].teachers = [
    {
        title: "Mr",
        lastName: "Gilberto",
        subject: "Mathematics"
    },
    {
        title: "Ms",
        lastName: "Gouder",
        subject: "Science"
    },
    {
        title: "Ms",
        lastName: "Musk",
        subject: "Artificial Inteligence"
    },
    {
        title: "Mr",
        lastName: "Jaffer",
        subject: "Chemistry"
    }
];



// Q1 - Use for..of loop(s) to write out all the students with a yearGroup greater than 9

// for (const school of schools){

//     for (const student of school.students){
//             if( student.yearGroup >=9){
//                 console.log(`${student.firstName} ${student.lastName}`);
//             }
//     }
// }



// Q2 - Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less

// for (const school of schools){
// for (const teacher of school.teachers){
//     if(school.students.length <=4){
//         console.log(`${teacher.title} ${teacher.lastName}`);
//     }
// }
// }
// Q3 - Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7

// for (const school of schools){

//     for( const student of school.students){
//         if(student.age == 12 && student.yearGroup ==7){
//             console.log(`${student.firstName} ${student.lastName}`);
//         }
//     }
// }


// Q4 - Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all schools (assume yearGroup is a whole number from 0 - 12)
let yearGroupCounts = new Array(13).fill(0);

for (const school of schools){
    for (const student of school.students){
        yearGroupCounts[student.yearGroup]++;
    }
}

for (let i= 0; i < yearGroupCounts.length; i++){
    if (i ==0) {
        console.log(`There are ${yearGroupCounts[i]} students in Kindergarden`);
    } else {
        console.log(`There are ${yearGroupCounts[i]} students in Year ${i}`);
    }
}