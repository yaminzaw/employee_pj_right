/**
 * Department and Position Registration Main Form
 * @author yaminzaw
 * @create 06/08/2022
 */
 import React, { useState } from "react";
 import DeptPositionShow from "./DeptPositionShow";
 import { CCard, CCardBody, CCardHeader } from "@coreui/react";
 import DeptAddModal from "./DeptAddModal";
 import DeptPositionTable from "./DeptPositionTable";
 import DeptUpdateModal from "./DeptUpdateModal";
 import DeptRemoveModal from "./DeptRemoveModal";
 import PosAddModal from "./PosAddModal";

 const DeptPositionRegIndex = () => {
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
   ]); //for position data
   const [choosePosition, setChoosePosition] = useState(""); //for choose position
   const [showDeptAddModal,setShowDeptAddModal] = useState(false);//for show modal when click add img of dept
   const [addDept,setAddDept] = useState("");//for add dept(input field)
   const [showDeptUpdateModal,setShowDeptUpdateModal] = useState(false);//for show modal when click edit img of dept
   const [updateDept,setUpdateDept] = useState("");//for update dept(update field)
   const [chooseDeptUpdate,setChooseDeptUpdate] = useState("");//for choose dept for update(id)
   const [showDeptRemoveModal,setShowDeptRemoveModal] = useState(false);//for show modal when click edit img of dept
   const [chooseRemoveDept,setChooseRemoveDept] = useState("");//for remove dept(id)
   const [showPosAddModal,setShowPosAddModal] = useState(false);//for show modal when click add img of dept
   const [addPos,setAddPos] = useState("");//for add dept(input field)

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
    * onClick function on add image of department
    * @author yaminzaw
    * @create 06/08/2022
    */
   let deptAddClick =()=>{
    setShowDeptAddModal(true);
   }

   /**
    * get department name from input field
    * @author yaminzaw
    * @create 06/08/2022
    */
    const handleAddDept = (e) => {
        setAddDept(e.target.value);
    };
    
    /**
    * onClick add button on showDeptAddModal
    * @author yaminzaw
    * @create 06/08/2022
    */
    const addDeptOk = () =>{
        setDeptData([...deptData,{id:4,name: addDept}])
        setAddDept("");
    }

    /**
    * onClick function on update image of department
    * @author yaminzaw
    * @create 06/08/2022
    */
   let deptUpdateClick =()=>{
    setShowDeptUpdateModal(true);
   }

    /**
    * get department name from input field
    * @author yaminzaw
    * @create 06/08/2022
    */
     const handleUpdateDept = (e) => {
        setUpdateDept(e.target.value);
    };
    
    /**
    * onClick update button on DeptUpdateModal
    * @author yaminzaw
    * @create 06/08/2022
    */
    const updateDeptOk = () =>{
      for(let i=0;i<deptData.length;i++){
          if(deptData[i].id == chooseDeptUpdate){
            deptData[i].name = updateDept;
          }
      }
      setUpdateDept("");
    }

    /**
    * onChange function on drop down(dept) for update
    * @author yaminzaw
    * @create 06/08/2022
    */
   let selectDeptUpdate = (e) => {
    setChooseDeptUpdate(e.target.value);
  };

    /**
    * onClick function on remove img of dept
    * @author yaminzaw
    * @create 06/08/2022
    */
   let deptRemoveClick = () => {
    setShowDeptRemoveModal(true);
  };

    /**
    * onChange function on drop down(dept) for remove
    * @author yaminzaw
    * @create 06/08/2022
    */
    let selectRemoveDept = (e) => {
        setChooseRemoveDept(e.target.value);
    };
    
    /**
    * onClick remove button on DeptRemoveModal
    * @author yaminzaw
    * @create 06/08/2022
    */
    const removeDeptOk = () =>{
        alert("remove");
    }

    /**
    * onClick function on add image of position
    * @author yaminzaw
    * @create 06/08/2022
    */
   let posAddClick =()=>{
    setShowPosAddModal(true);
   }

   /**
    * get position name from input field
    * @author yaminzaw
    * @create 06/08/2022
    */
    const handleAddPos = (e) => {
        setAddPos(e.target.value);
    };
    
    /**
    * onClick add button on showDeptAddModal
    * @author yaminzaw
    * @create 06/08/2022
    */
     const addPosOk = () =>{
        setPositionData([...positionData,{id:4,name: addPos}])
        setAddPos("");
        //alert(" fdfdfdf")
    }

   return (
     <CCard className="regCard" style={{paddingBottom:"80px"}}>
       <CCardHeader className="regCard" style={{ textAlign: "center" }}>
         <h2 style={{ color: "white" }}>Department and Position Registration</h2>
       </CCardHeader>
       <CCardBody>
         <DeptPositionShow
           chooseDept={chooseDept}
           selectDept={selectDept}
           deptData={deptData}
           choosePosition={choosePosition}
           selectPosition={selectPosition}
           positionData={positionData}
           deptAddClick={deptAddClick}
           deptUpdateClick={deptUpdateClick}
           deptRemoveClick={deptRemoveClick}
           posAddClick={posAddClick}
         />
         <DeptAddModal 
            show={showDeptAddModal} 
            addDeptClose={()=>setShowDeptAddModal(false)} 
            handleAddDept={handleAddDept}
            addDept={addDept}
            addDeptOk={addDeptOk}
         />
         <DeptUpdateModal 
            show={showDeptUpdateModal} 
            updateDeptClose={()=>setShowDeptUpdateModal(false)} 
            handleUpdateDept={handleUpdateDept}
            updateDept={updateDept}
            updateDeptOk={updateDeptOk}
            deptData={deptData}
            selectDeptUpdate={selectDeptUpdate}
            chooseDeptUpdate={chooseDeptUpdate}
         />
         <DeptRemoveModal 
            show={showDeptRemoveModal} 
            removeDeptClose={()=>setShowDeptRemoveModal(false)} 
            selectRemoveDept={selectRemoveDept}
            chooseRemoveDept={chooseRemoveDept}
            removeDeptOk={removeDeptOk}
            deptData={deptData}
         />
         <PosAddModal
            show={showPosAddModal} 
            addPosClose={()=>setShowPosAddModal(false)} 
            handleAddPos={handleAddPos}
            addPos={addPos}
            addPosOk={addPosOk}
         />
         {/* <DeptPositionTable 
            deptData={deptData}
            positionData={positionData}
         /> */}
       </CCardBody>
     </CCard>
   );
 };
 
 export default DeptPositionRegIndex;
 