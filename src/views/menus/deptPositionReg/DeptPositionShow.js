/**
 * Department and Position Registration Show Form
 * @author yaminzaw
 * @create 06/08/2022
 */
 import { CRow,CCol, CLabel,CSelect,CImg} from "@coreui/react";
 import React from "react";
 
 const DeptPositionShow = (props)=>{
 
     let {
         chooseDept,
         selectDept,
         deptData,
         choosePosition,
         selectPosition,
         positionData,
         deptAddClick,
         deptUpdateClick,
         deptRemoveClick,
         posAddClick
        } = props;
     return(
         <>
             <CRow>
                 <CCol lg="1"></CCol>
                 <CCol lg="10"
                 style={{
                     border: "1px solid black",
                     padding: "30px",
                     backgroundColor: "rgb(242, 242, 242)",
                     boxShadow: "5px 10px #888888",
                 }}>
                     <CRow className="rowDiv">
                         <CCol lg="1"></CCol>
                         <CCol lg="3">
                             <CLabel className="label">Department</CLabel>
                         </CCol>
                         <CCol lg="4">
                         <CSelect
                             className="select"
                             value={chooseDept}
                             onChange={selectDept}
                         >
                             <option value="">---Select Department---</option>
                             {deptData.map((data, index) => {
                             return (
                                 <option
                                 className="option"
                                 key={index}
                                 id={data.id}
                                 value={data.id}
                                 >
                                 {data.name}
                                 </option>
                             );
                             })}
                         </CSelect>
                         </CCol>
                         <CCol lg="1" xs="4">
                         <CImg
                             style={{ width: "32px", height: "32px",marginBottom:"20px"}}
                             src={"/avatars/add.png"}
                             onClick={deptAddClick}
                           />
                         </CCol>
                         <CCol lg="1" xs="4">
                         <CImg
                             style={{ width: "32px", height: "32px",marginBottom:"20px" }}
                             src={"/avatars/edit.png"}
                             onClick={deptUpdateClick}
                           />
                         </CCol>
                         <CCol lg="1" xs="4">
                         <CImg
                             style={{ width: "32px", height: "32px",marginBottom:"20px" }}
                             src={"/avatars/trash.png"}
                             onClick={deptRemoveClick}
                           />
                         </CCol>
                         <CCol lg="1"></CCol>
                     </CRow >
                     <CRow className="rowDiv">
                         <CCol lg="1"></CCol>
                         <CCol lg="3">
                             <CLabel className="label">Position</CLabel>
                         </CCol>
                         <CCol lg="4">
                         <CSelect
                             className="select"
                             value={choosePosition}
                             onChange={selectPosition}
                         >
                             <option value="">---Select Position---</option>
                             {positionData.map((data, index) => {
                             return (
                                 <option
                                 className="option"
                                 key={index}
                                 id={data.id}
                                 value={data.id}
                                 >
                                 {data.name}
                                 </option>
                             );
                             })}
                         </CSelect>
                         </CCol>
                         <CCol lg="1" xs="4">
                         <CImg
                             style={{ width: "32px", height: "32px",marginBottom:"20px" }}
                             src={"/avatars/add.png"}
                             onClick={posAddClick}
                           />
                         </CCol>
                         <CCol lg="1" xs="4">
                         <CImg
                             style={{ width: "32px", height: "32px",marginBottom:"20px" }}
                             src={"/avatars/edit.png"}
                           />
                         </CCol>
                         <CCol lg="1" xs="4">
                         <CImg
                             style={{ width: "32px", height: "32px",marginBottom:"20px" }}
                             src={"/avatars/trash.png"}
                           />
                         </CCol>
                         <CCol lg="1"></CCol>
                     </CRow>
                 </CCol>
                 <CCol lg="1"></CCol>
             </CRow>
         </>
     )
 }
 
 export default DeptPositionShow;