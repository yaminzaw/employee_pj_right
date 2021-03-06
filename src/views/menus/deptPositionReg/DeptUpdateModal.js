/**
 * Department Update Modal
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
    CInput,
    CCol,
    CLabel,
    CSelect
  } from "@coreui/react";
import SuccessError from "../../common/SuccessError";
const DeptUpdateModal = (props) =>{
    const { 
        show,
        handleUpdateDept,
        updateDeptOk,
        updateDeptClose,
        updateDept,
        deptData,
        chooseDeptUpdate,
        selectDeptUpdate,
        errUpdateDept,
        successUpdateDept
    } = props;
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
              Update Department
            </h5>
          </span>
        </CModalHeader>
        <CModalBody>
        <CRow style={{marginBottom:"30px",justifyContent:"center"}}>
            <SuccessError error={errUpdateDept} success={successUpdateDept} />
          </CRow>
          <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                <CLabel className="label">Department Name</CLabel>
              </CCol>
              <CCol lg="4">
              <CSelect
                 className="select"
                 value={chooseDeptUpdate}
                 onChange={selectDeptUpdate}
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
          <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                <CLabel className="label">Update Department Name</CLabel>
              </CCol>
              <CCol lg="4">
              <CInput
                    className="inputField"
                    placeholder="Please Enter Department"
                    type="text"
                    value={updateDept}
                    onChange={(e) => handleUpdateDept(e)}
                />
              </CCol>
              <CCol lg="2"></CCol>
          </CRow>
          <CButtonToolbar  style={{marginBottom:"30px"}}>
              <CCol lg="4"></CCol>
              <CCol lg="2">
                <CButton className="okBtn" onClick={updateDeptOk}>Update</CButton>
              </CCol>
              <CCol lg="2">
                <CButton className="cancelBtn" onClick={updateDeptClose}>Close</CButton>
              </CCol>
              <CCol lg="4"></CCol> 
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  )
}

export default DeptUpdateModal;