//Function declaration
function login({name="noname",password="123455"}={}){
 if(name==="admin" && password==="adminSystem@123"){
    console.log("Access Granted")
 }else{
    throw new Error("Wrong Credentials");
 }
}

function passTocken(str){
    let tockenString;
    for(let i=0;i<str.length;i++){
      tockenString+=str[Math.round(Math.random()*str.length)];
    }
    const tocken = btoa(tockenString);
    console.log(tocken);
    return tocken;
}

// Main Execution
passTocken("My Credentials");