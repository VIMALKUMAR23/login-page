class landing{

    dataBase={}

    registerUser(){
        if(localStorage.getItem('userData')!= null){
            this.getData();
        }
        let firstName= username.value;
        let email=exampleInputEmail1.value;
        let password=exampleInputPassword1.value;
        if (firstName!=="" && email!=="" && password!=="") {
            if (email in this.dataBase) {
                alert(`${email} already exist`)
            }
            else{
                this.dataBase[email]={
                    name:firstName,
                    email:email,
                    password:password
                }
                //save the data
                this.saveData();
                alert("registeration successfull")
                window.location="login.html"
            }
        }
        else{
            alert("please enter valid values")
        }
    }
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("userData"))
    }
    saveData(){
        localStorage.setItem("userData",JSON.stringify(this.dataBase))
    }
    //login page logic
    login(){
        let loggedEmail=userEmail.value;
        let loggedPassword=userPassword.value;
        this.getData();
        if(loggedEmail==''|| loggedPassword==""){
            alert("enter the values")
        }
        else{
            // alert(`${loggedEmail}${loggedPassword}`)
            if(loggedEmail in this.dataBase){
                if (this.dataBase[loggedEmail].password === loggedPassword) {
                    localStorage.setItem("firstname",this.dataBase[loggedEmail].name)//logic for username
                   window.location="home.html" 
                }
                else{
                    alert("password mismatch")
                }

            }
            else{
                alert(`${loggedEmail} not found`)
            }
        }
    }

}
const obj= new landing();