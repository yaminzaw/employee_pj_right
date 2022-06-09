import React from "react";
import {
    CRow,
    CButton,
    CModal,
    CModalBody,
    CButtonToolbar,
    CModalHeader,
    CInput,
    CCol,
    CLabel
  } from "@coreui/react";
const DeptAddModal = (props) =>{
  const { show, addDeptClose,handleAddDept,addDept,addDeptOk} = props;
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
              Add Department
            </h5>
          </span>
        </CModalHeader>
        <CModalBody>
          <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="3">
                <CLabel className="label">Department Name</CLabel>
              </CCol>
              <CCol lg="4">
                <CInput
                    className="inputField"
                    placeholder="Please Enter Department"
                    type="text"
                    value={addDept}
                    onChange={(e) => handleAddDept(e)}
                />
              </CCol>
              <CCol lg="2"></CCol>
          </CRow>
          <CButtonToolbar  style={{marginBottom:"30px"}}>
              <CCol lg="3"></CCol>
              <CCol lg="3">
                <CButton className="okBtn" onClick={addDeptOk}>Add</CButton>
              </CCol>
              <CCol lg="3">
                <CButton className="cancelBtn" onClick={addDeptClose}>Close</CButton>
              </CCol>
              <CCol lg="3"></CCol> 
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  )
}

export default DeptAddModal;