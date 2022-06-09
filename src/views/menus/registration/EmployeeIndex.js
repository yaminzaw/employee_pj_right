/**
 * Registration Main function
 * @author yaminzaw
 * @create 06/08/2022
 */
 import { CCard, CCardBody, CCardHeader, CRow } from "@coreui/react";
 import React, { useEffect, useState } from "react";
 import EmployeeRegNew from "./EmployeeRegNew";
 import { validateName,numberChk,emailChk,nullChk } from "../../common/CommonValidation";
 import SuccessError from "../../common/SuccessError";
 
 const EmployeeIndex = () => {
   const [name, setName] = useState(""); //for name
   const [email, setEmail] = useState(""); //for email
   const [pwd, setPwd] = useState("");
   const [comfirmPwd, setComfirmPwd] = useState("");
   const [genderArr, setGenderArr] = useState([
     { id: 1, name: "Male" },
     { id: 2, name: "Female" },
   ]); // radio array (male,female)
   const [genderId, setGenderId] = useState(""); //for choose gender(id)
   const [deptData, setDeptData] = useState([
     { id: 1, name: "IT" },
     { id: 2, name: "HR" },
     { id: 3, name: "Infra" },
   ]); //for dept data
   const [chooseDept, setChooseDept] = useState(""); //for depatrment choose
   const [positionData, setPositionData] = useState([
     { id: 1, name: "Admin" },
     { id: 2, name: "Leader" },
     { id: 3, name: "Member" },
   ]); //for dept data
   const [choosePosition, setChoosePosition] = useState(""); //for choose position
   const [editStatus, setEditStatus] = useState(false);//for edit status
   const [error,setError] = useState([]);//for error array
 
   /**
    * onClick edit and get data from localstorage
    * @author yaminzaw
    * @create 06/08/2022
    */
   useEffect(() => {
     let data = JSON.parse(localStorage.getItem("STUDENT_DATA"));
     localStorage.removeItem("STUDENT_DATA"); //clear section
     systemFormLoadEdit(data);
     console.log("form id", data);
   }, []);
 
   /**
    * check edit click or not
    * @author yaminzaw
    * @create 06/08/2022
    * @param data from local storage(id)
    */
   const systemFormLoadEdit = (data)=>{
     if(data === "" || data === null){
       setEditStatus(false);
     }else setEditStatus(true);
   }
 
   /**
    * get name from name input field
    * @author yaminzaw
    * @create 06/08/2022
    */
   const handleChangeName = (e) => {
     setName(e.target.value);
   };
 
   /**
    * get email from email input field
    * @author yaminzaw
    * @create 06/08/2022
    */
   const handleChangeEmail = (e) => {
     setEmail(e.target.value);
   };
 
   /**
    * get password from password input field
    * @author yaminzaw
    * @create 06/08/2022
    */
   const handleChangePwd = (e) => {
     setPwd(e.target.value);
   };
 
   /**
    * get comfirm password from comfirm password input field
    * @author yaminzaw
    * @create 06/08/2022
    */
   const handleChangeComfirmPwd = (e) => {
     setComfirmPwd(e.target.value);
   };
 
   /**
    * onChange function on radio(gender)
    * @author yaminzaw
    * @create 06/08/2022
    * @param data(radio Array)
    */
   const clickGender = (data) => {
     setGenderId(data.id);
   };
 
   /**
    * onChange function on drop down(department)
    * @author yaminzaw
    * @create 06/08/2022
    * @param e
    * set id of selected department id to chooseDept
    */
   let selectDept = (e) => {
     setChooseDept(e.target.value);
   };
  
   /**
    * onChange function on drop down(position)
    * @author yaminzaw
    * @create 06/08/2022
    * @param e
    * set id of selected position id to choosePosition
    */
   let selectPosition = (e) => {
     setChoosePosition(e.target.value);
   };
 
   /**
    * onClick save function
    * @author yaminzaw
    * @create 06/08/2022
    */
   const save = () =>{
     let errArray = [];
 
     if (!nullChk(name)) {
       errArray.push("Please Enter Name");
     } else if (!validateName(name)) {
       errArray.push("Invalid name");
     } //validate name
 
     if (!nullChk(email)) {
       errArray.push("Please Enter Email");
     } else if (!emailChk(email)) {
       errArray.push("Invalid Email");
     }
 
     if (!nullChk(pwd)) {
       errArray.push("Please Enter password");
     }
     if (!nullChk(comfirmPwd)) {
       errArray.push("Please Enter comfirm password");
     }
 
     if (!nullChk(genderId)) {
       errArray.push("Please Select Gender");
     }
 
     setError(errArray);
     window.scrollTo({
       top: 0,
       left: 0,
       behavior: "smooth",
     });
   }
 
   return (
     <>
     <SuccessError error={error} />
     <CCard className="regCard">
       <CCardHeader className="regCard" style={{ textAlign: "center" }}>
         <h2 style={{ color: "white" }}>Employee Registration</h2>
       </CCardHeader>
       <CCardBody>
         <EmployeeRegNew
           name={name}
           handleChangeName={handleChangeName}
           email={email}
           handleChangeEmail={handleChangeEmail}
           pwd={pwd}
           handleChangePwd={handleChangePwd}
           comfirmPwd={comfirmPwd}
           handleChangeComfirmPwd={handleChangeComfirmPwd}
           genderArr={genderArr}
           clickGender={clickGender}
           genderId={genderId}
           deptData={deptData}
           chooseDept={chooseDept}
           selectDept={selectDept}
           positionData={positionData}
           selectPosition={selectPosition}
           choosePosition={choosePosition}
           editStatus={editStatus}
           save={save}
         />
       </CCardBody>
     </CCard>
     </>
   );
 };
 
 export default EmployeeIndex;
 