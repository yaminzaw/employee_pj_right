/**
 * Position Update Modal
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
const PosUpdateModal = (props) =>{
    const { 
        show,
        handleUpdatePos,
        updatePosOk,
        updatePosClose,
        updatePos,
        positionData,
        choosePosUpdate,
        selectPosUpdate,
        successUpdatePos,
        errUpdatePos
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
              Update Position
            </h5>
          </span>
        </CModalHeader>
        <CModalBody>
          <CRow style={{marginBottom:"30px",justifyContent:"center"}}>
            <SuccessError error={errUpdatePos} success={successUpdatePos} />
          </CRow>
          <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                <CLabel className="label">Position Name</CLabel>
              </CCol>
              <CCol lg="4">
              <CSelect
                 className="select"
                 value={choosePosUpdate}
                 onChange={selectPosUpdate}
               >
                 <option value="">---Select position---</option>
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
              <CCol lg="2"></CCol>
          </CRow>
          <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                <CLabel className="label">Update Position Name</CLabel>
              </CCol>
              <CCol lg="4">
              <CInput
                    className="inputField"
                    placeholder="Please Enter Department"
                    type="text"
                    value={updatePos}
                    onChange={(e) => handleUpdatePos(e)}
                />
              </CCol>
              <CCol lg="2"></CCol>
          </CRow>
          <CButtonToolbar  style={{marginBottom:"30px"}}>
              <CCol lg="4"></CCol>
              <CCol lg="2">
                <CButton className="okBtn" onClick={updatePosOk}>Update</CButton>
              </CCol>
              <CCol lg="2">
                <CButton className="cancelBtn" onClick={updatePosClose}>Close</CButton>
              </CCol>
              <CCol lg="4"></CCol> 
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  )
}

export default PosUpdateModal;