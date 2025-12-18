//Function declaration
function login({name="noname",password="123455"}={}){
 if(name==="admin" && password==="adminSystem@123"){
    console.log("Access Granted")
 }else{
    throw new Error("Wrong Credentials");
 }
}

// Main Execution