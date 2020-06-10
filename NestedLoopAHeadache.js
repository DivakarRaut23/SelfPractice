let myProfile = [
    {
    name : "Divakar",
    address: "Sydney",
    phone: "0422489877",
    email: "twinscreation@gmail.com",
    marks : [
        {
            science: 84,
            math: 94,
            english: 88,
            history: 62
        }
    ]
},
{
    name : "Azamat",
    address: "Bhaktapur",
    phone: "987456875",
    email: "azamatBhagatov@gmail.com",
    marks : [
        {
            science: 96,
            math: 98,
            english: 92,
            history: 78
            
        }
    ]
}
];

for (let key in myProfile){

    let mark = myProfile[key].marks

    if( mark.history > 70){
        console.log(mark.history);
    }


    // console.log(myProfile[key].marks[0][1]);
    
};