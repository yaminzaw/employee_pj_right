/**
 * Position Add Modal
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
    CLabel
} from "@coreui/react";
import SuccessError from "../../common/SuccessError";
const PosAddModal = (props) =>{
    const { show, addPosClose,handleAddPos,addPos,addPosOk,errAddPos,successAddPos} = props;
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
              Add Position
            </h5>
          </span>
        </CModalHeader>
        <CModalBody>
          <CRow style={{marginBottom:"30px",justifyContent:"center"}}>
            <SuccessError error={errAddPos} success={successAddPos} />
          </CRow>
          <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="3">
                <CLabel className="label">Position Name</CLabel>
              </CCol>
              <CCol lg="4">
                <CInput
                    className="inputField"
                    placeholder="Please Enter Department"
                    type="text"
                    value={addPos}
                    onChange={(e) => handleAddPos(e)}
                />
              </CCol>
              <CCol lg="2"></CCol>
          </CRow>
          <CButtonToolbar  style={{marginBottom:"30px"}}>
              <CCol lg="4"></CCol>
              <CCol lg="2">
                <CButton className="okBtn" onClick={addPosOk}>Add</CButton>
              </CCol>
              <CCol lg="2">
                <CButton className="cancelBtn" onClick={addPosClose}>Close</CButton>
              </CCol>
              <CCol lg="4"></CCol> 
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  )
}

export default PosAddModal;