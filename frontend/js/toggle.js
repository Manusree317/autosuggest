var users=
[{
    "name":"John Doe",
    "gender":"male",
    "image":"../images/john.png"
},
{  
    "name":"Jane Doe",
    "gender":"Female",
    "image":"../images/image.png"
} 
]  
var curId=0;

function toggle(){
    //toggle curId from 0 to 1 and 1 to 0
    curId=(curId+1)%2
    // Update the UI with the current user's information
    document.getElementById("userName").textContent = users[curId].name;
    document.getElementById("userGender").textContent = users[curId].gender;
    document.getElementById("userImage").src = users[curId].image;
}