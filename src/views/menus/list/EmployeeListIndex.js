/**
 * Employee List Main function
 * @author yaminzaw
 * @create 06/08/2022
 */
 import React, { useState,useEffect } from "react";
 import { CCard, CCardBody, CCardHeader } from "@coreui/react";
 import EmployeeListShow from "./EmployeeListShow";
 import EmployeeListTable from "./EmployeeListTable";
 import DetailModal from "./DetailModal";
 import { useHistory } from "react-router-dom";
 
 const EmployeeListIndex = () => {
   const [name, setName] = useState(""); //for search name
   const [id, setId] = useState(""); //for search id
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
   const [currentPage, setCurrentPage] = useState(""); //for current page(pagination)
   const [lastPage, setLastPage] = useState(""); //for last page(pagination)
   const [detailModalShow, setDetailModalShow] = useState(false); //for detail modal
   const [detailData, setDetailData] = useState(""); //for detail data
   const [imageUrl, setImageUrl] = useState("/avatars/cat.jpg"); //default image
   const history = useHistory();//for use history
 
   /**
    * get name from id input field
    * @author yaminzaw
    * @create 06/08/2022
    */
   const handleChangeId = (e) => {
     setId(e.target.value);
   };
 
   /**
    * get name from name input field
    * @author yaminzaw
    * @create 06/08/2022
    */
   const handleChangeName = (e) => {
     setName(e.target.value);
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
   console.log("select dept",chooseDept);
 
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
    * pagination function
    * @author yaminzaw
    * @create 06/08/2022
    * @param page
    */
   const setActivePage = (page) => {
     setCurrentPage(1);
     setLastPage(4);
   };
 
   /**
    * onClick Detail Button function
    * @author yaminzaw
    * @create 06/08/2022
    * @param data(User Data)
    * set user data to detailData
    */
   const detailBtn = (data) => {
     setDetailData(data);
     setDetailModalShow(true);
   };
 
   /**
    * modal close function
    * @author yaminzaw
    * @create 06/08/2022
    */
   const detailCloseBtn = () => {
     setDetailModalShow(false);
   };
 
   /**
    * onClick edit button function
    * @author yaminzaw
    * @create 06/08/2022
    * * @param data array
    */
    const editBtn = (e) => {
     let data ={ 
       id: e.id
     };
     localStorage.setItem('STUDENT_DATA', JSON.stringify(data) );
     history.push(`/menus/registration`);
     console.log("data",data)
   };
  
   return (
     <CCard className="regCard">
       <CCardHeader className="regCard" style={{ textAlign: "center" }}>
         <h2 style={{ color: "white" }}>Employee List</h2>
       </CCardHeader>
       <CCardBody>
         <EmployeeListShow
           id={id}
           handleChangeId={handleChangeId}
           name={name}
           handleChangeName={handleChangeName}
           chooseDept={chooseDept}
           selectDept={selectDept}
           deptData={deptData}
           choosePosition={choosePosition}
           selectPosition={selectPosition}
           positionData={positionData}
         />
         <EmployeeListTable
           currentPage={currentPage}
           lastPage={lastPage}
           setActivePage={setActivePage}
           detailBtn={detailBtn}
           editBtn={editBtn}
         />
         <DetailModal
           show={detailModalShow}
           detailCloseBtn={detailCloseBtn}
           detailData={detailData}
           imageUrl={imageUrl}
         />
       </CCardBody>
     </CCard>
   );
 };
 
 export default EmployeeListIndex;
 