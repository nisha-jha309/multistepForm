import { useState,useContext } from "react"
import { InfoContext } from "./creatingContext";
import styles from "./step2.module.css"

export default function Step2(){
  const { formData, setFormData, currentStep, setCurrentStep } = useContext(InfoContext);
const [addressError,SetAddressError]=useState(false);
const [phoneError,SetPhoneError]=useState("");
// const [Address,setAddress]=useState("");
// const [Phone,setPhone]=useState("")
const PhoneTest=/^\+?[0-9]{7,15}$/;
const settingPhone=(e)=>{
    setFormData((prev)=>({...prev,Phone:e.target.value}))
}
// const phoneHandler=(e)=>{
//     const value=e.target.value.trim();
//  if(value===""){
//     SetPhoneError("This Field cannot be empty")
// }else if(!PhoneTest.test(value)){
// SetPhoneError("Incorrect Phone Number");
// }
// else{
//     SetPhoneError("")
// }
// }
const settingAddress=(e)=>{
    setFormData((prev)=>({...prev,Address:e.target.value}))
}
// const addressHandler=(e)=>{
//  if(e.target.value===""){
// SetAddressError(true);
// }else{
//     SetAddressError(false)
// }   
// }
const nextHandler =()=>{
    let hasError = false;
    
if(formData.Address.trim() === ""){
SetAddressError(true);
hasError=true;
}else{
    SetAddressError(false)
}  

if(formData.Phone.trim() === ""){
    SetPhoneError("This Field cannot be empty");
    hasError = true;
}else if(!PhoneTest.test(formData.Phone.trim())){
SetPhoneError("Incorrect Phone Number");
hasError=true;
}
else{
    SetPhoneError("")
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
        {addressError ? (<p  style={{fontWeight:"lighter",color:"red",marginBottom:"8px"}}>This Feild cannot be empty</p>):("")}
        <input type="text" name="Address" placeholder="Address" className="Address" value={formData.Address}  onChange={settingAddress}></input>
        {phoneError && <p style={{fontWeight:"lighter",color:"red",marginBottom:"8px"}}>{phoneError}</p>}
        <input type="tel" name="Phone" className="Phone" placeholder="Phone" value={formData.Phone}  onChange={settingPhone}/>
                <button className={styles.nextBtn} onClick={nextHandler}>Next</button>
        </div>
        </div>
    )
}