/**
 * Position Remove Modal
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
const PosRemoveModal = (props) =>{
    const { show, removePosClose,chooseRemovePos,selectRemovePos,removePosOk,positionData,successRemovePos,errRemovePos} = props;
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
                Remove Position
              </h5>
            </span>
          </CModalHeader>
          <CModalBody>
            <CRow style={{marginBottom:"30px",justifyContent:"center"}}>
              <SuccessError error={errRemovePos} success={successRemovePos} />
            </CRow>
            <CRow>
                <CCol lg="2"></CCol>
                <CCol lg="3">
                  <CLabel className="label">Position Name</CLabel>
                </CCol>
                <CCol lg="4">
                <CSelect
                 className="select"
                 value={chooseRemovePos}
                 onChange={selectRemovePos}
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
                <CCol lg="2"></CCol>
            </CRow>
            <CButtonToolbar  style={{marginBottom:"30px"}}>
                <CCol lg="4"></CCol>
                <CCol lg="2">
                  <CButton className="okBtn" onClick={removePosOk}>Remove</CButton>
                </CCol>
                <CCol lg="2">
                  <CButton className="cancelBtn" onClick={removePosClose}>Close</CButton>
                </CCol>
                <CCol lg="4"></CCol> 
            </CButtonToolbar>
          </CModalBody>
        </CModal>
  
        {/* } */}
      </>
    )
}

export default PosRemoveModal;