import { useContext, useState } from "react"
import { InfoContext } from "./creatingContext"
import styles from "./step3.module.css"

export default function Step3(){
  const { formData, setFormData, currentStep, setCurrentStep,submitClick,setSubmit } = useContext(InfoContext);
  const submit = async(e)=>{
      e.preventDefault();
    console.log("Form submitted:", formData);
    // const url="http://localhost:3000/users";

    const url = "https://json-server-backend-vuo2.onrender.com/users";

    const api= await fetch(url,{
method:"POST",
body:JSON.stringify(formData),
headers: {
        "Content-Type": "application/json"
      }
    });
    
    const response= await api.json();
    console.log(response);
    if(response){
      alert("form Submitted");
                setSubmit(true);

    }
  }
    return(
        <div className={styles.body}>
        <div className={styles.form}>
                <h1 style={{textAlign:"center"}}>MultiStep Form</h1>
        <div className={styles.summary}>
            <p><span style={{fontWeight:"bold",marginRight:"15px"}}>Name:</span>{formData.Name}</p>
            <p><span style={{fontWeight:"bold",marginRight:"15px"}}>Email:</span>{formData.Email}</p>
            <p><span style={{fontWeight:"bold",marginRight:"15px"}}>Address:</span>{formData.Address}</p>
            <p><span style={{fontWeight:"bold",marginRight:"15px"}}>Phone:</span>{formData.Phone}</p>
        </div>
        <button className={styles.submitBtn} onClick={submit}>Submit</button>
        </div>
        </div>
    )
}