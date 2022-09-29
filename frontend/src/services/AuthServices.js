export function doLogin(email, password){
    return new Promise((response, reject)=>{
        if(email=="scott@villares.com.br" && password=="scott123"){
            response(true);
        }
        reject(`Invalid email or password`);
    });
   

   
}