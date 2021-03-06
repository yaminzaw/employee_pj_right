/**
 * Department Remove Modal
 * @author yaminzaw
 * @create 06/08/2022
 */
import React from "react";
import {
    CRow,
    CButton,
    CModal,
    CModalBody,
    CButtonToolbar,
    CModalHeader,
    CSelect,
    CCol,
    CLabel
  } from "@coreui/react";
import SuccessError from "../../common/SuccessError";
const DeptRemoveModal = (props) =>{
    const { show, removeDeptClose,chooseRemoveDept,selectRemoveDept,removeDeptOk,deptData,errRemoveDept,successRemoveDept} = props;
    return (
      <>
        <CModal
          size="lg"
          centered
          closeOnBackdrop={false}
          show={show}
          id="advanced"
        >
          <CModalHeader>
            <span>
              <h5 style={{ fontWeight: "bold", marginLeft: "20px" }}>
                Remove Department
              </h5>
            </span>
          </CModalHeader>
          <CModalBody>
          <CRow style={{marginBottom:"30px",justifyContent:"center"}}>
            <SuccessError error={errRemoveDept} success={successRemoveDept} />
          </CRow>
            <CRow>
                <CCol lg="2"></CCol>
                <CCol lg="3">
                  <CLabel className="label">Department Name</CLabel>
                </CCol>
                <CCol lg="4">
                <CSelect
                 className="select"
                 value={chooseRemoveDept}
                 onChange={selectRemoveDept}
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
                <CCol lg="2"></CCol>
            </CRow>
            <CButtonToolbar  style={{marginBottom:"30px"}}>
                <CCol lg="4"></CCol>
                <CCol lg="2">
                  <CButton className="okBtn" onClick={removeDeptOk}>Remove</CButton>
                </CCol>
                <CCol lg="2">
                  <CButton className="cancelBtn" onClick={removeDeptClose}>Close</CButton>
                </CCol>
                <CCol lg="4"></CCol> 
            </CButtonToolbar>
          </CModalBody>
        </CModal>
  
        {/* } */}
      </>
    )
}

export default DeptRemoveModal;