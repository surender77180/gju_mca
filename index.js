function passFunction(){
    const pass = document.getElementById("showpass");
    const iconEye = document.getElementById("iconEye");
    if (pass.type === "password"){
        pass.type = "text";
        iconEye.classList.remove("fa-eye-slash")
        iconEye.classList.add("fa-eye")
    } else{
        pass.type = "password";
        iconEye.classList.remove("fa-eye")
        iconEye.classList.add("fa-eye-slash")
    }
}       