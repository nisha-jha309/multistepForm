import { useState } from "react";
import { InfoContext } from "./creatingContext";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import SuccessPage from "./SuccessPage";

export default function StepForm() {
    const [currentStep, setCurrentStep] = useState(1);
      const [submitClick,setSubmit]=useState(false);
    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Address: ""
    })
    return (
        <InfoContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep,setSubmit,submitClick}}>
          {submitClick ?  <SuccessPage name={formData.Name}/>:
          (
            <>
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && <Step2 />}
            {currentStep === 3 && <Step3/>}
            </>
            )
          }

        </InfoContext.Provider>
    )
}