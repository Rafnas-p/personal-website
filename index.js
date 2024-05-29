function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        massage:document.getElementById("message").value,
        
    };

const serviceID="service_702zrcs";
const templateID="template_2ni929s";
emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("name").value="";
        document.getElementById("name").value="";
        console.log(res);
        alert("your massage sent successfully");
    })
.catch((err)=>console.log(err));
}