import { useState, useContext } from "react"
import { InfoContext } from "./creatingContext";
import styles from "./step1.module.css";

export default function Step1(){
  const { formData, setFormData, currentStep, setCurrentStep } = useContext(InfoContext);
const [emailError,SetEmailError]=useState("");
const [nameError,SetNameError]=useState(false);
// const [Name,setName]=useState("");
// const [Email,setEmail]=useState("");
const emailTest=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const settingEmail=(e)=>{
    setFormData((prev)=>({...prev,
      Email: e.target.value.trim(),
}))
}
// const emailHandler = (e) => {
//     const value = e.target.value.trim();

//     if (formData.Email.trim() === "") {
//       SetEmailError("This field cannot be empty");
//     } else if (!emailTest.test(value)) {
//       SetEmailError("Incorrect email ID");
//     } else {
//       SetEmailError(""); // no error
//     }
//   }
const settingName=(e)=>{
    setFormData((prev)=>({...prev,
      Name: e.target.value.trim(),
}))
}
// const nameHandler=(e)=>{
//  if(e.target.value.trim()===""){
// SetNameError(true);
// }else{
//     SetNameError(false)
// }  
// }
const nextHandler =()=>{
    let hasError = false;
if(formData.Name.trim()===""){
SetNameError(true);
hasError=true;
}else{
    SetNameError(false)
}

if (formData.Email.trim() === "") {
      SetEmailError("This field cannot be empty");
      hasError=true;
    } else if (!emailTest.test(formData.Email.trim())) {
      SetEmailError("Incorrect email ID");
      hasError=true;
    } else {
      SetEmailError(""); 
    }

if(!hasError){
    setCurrentStep(currentStep+1);
}else{
  window.alert("Fill the credentials first")
}
}

    return(
        <div className={styles.body}>
        <div className={styles.form}>
        <h1 style={{textAlign:"center"}}>MultiStep Form</h1>
        {nameError ? (<p style={{fontWeight:"lighter",color:"red",marginBottom:"8px"}}>This Feild cannot be empty</p>):("")}
        <input type="text" name="Name" placeholder="Name" className={styles.name} value={formData.Name} onChange={settingName}></input>
         {emailError && <p  style={{fontWeight:"lighter",color:"red",marginBottom:"8px"}}>{emailError}</p>}
        <input type="email" name="Email" className={styles.email} placeholder="Email ID" value={formData.Email}  onChange={settingEmail}/>
        <button className={styles.nextBtn} onClick={nextHandler}>Next</button>
        </div>
        </div>
    )
}