import React from "react";
import {
  CRow,
  CButton,
  CModal,
  CModalBody,
  CButtonToolbar,
  CModalHeader,
  CImg,
  CCol,
  CLink,
  CCard,
  CInput,
  CLabel,
} from "@coreui/react";
const DetailModal = (props) => {
  const { show, detailCloseBtn, data, detailData, imageUrl } = props;

  return (
    <>
      {/* {data != "" && */}
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
              Employee Detail Information
            </h5>
          </span>
        </CModalHeader>
        <CModalBody>
          <CRow style={{ justifyContent: "center", marginBottom: "30px" }}>
            <CImg style={{ width: "100px", height: "100px" }} src={imageUrl} />
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" xs="2" ></CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "start" }}>
              <CLabel>No</CLabel>
            </CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" xs="6" style={{ textAlign: "start" }}>
              <CLabel>{detailData.id}</CLabel>
            </CCol>
            <CCol lg="1" xs="0"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" xs="2"></CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "start" }}>
              <CLabel>ID</CLabel>
            </CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" xs="6" style={{ textAlign: "start" }}>
              <CLabel>{detailData.student_id}</CLabel>
            </CCol>
            <CCol lg="1" xs="0"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" xs="2"></CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "start" }}>
              <CLabel>Name</CLabel>
            </CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" xs="6" style={{ textAlign: "start" }}>
              <CLabel>{detailData.student_name}</CLabel>
            </CCol>
            <CCol lg="1" xs="0"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" xs="2"></CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "start" }}>
              <CLabel>Email</CLabel>
            </CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" xs="6" style={{ textAlign: "start" }}>
              <CLabel>{detailData.email}</CLabel>
            </CCol>
            <CCol lg="1" xs="0"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" xs="2"></CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "start" }}>
              <CLabel>Career</CLabel>
            </CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" xs="6" style={{ textAlign: "start" }}>
              <CLabel>{detailData.career}</CLabel>
            </CCol>
            <CCol lg="1" xs="0"></CCol>
          </CRow>
          <CRow id="approver-modal" lg="12">
            <CCol lg="3" xs="2"></CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "start" }}>
              <CLabel>Phone</CLabel>
            </CCol>
            <CCol lg="2" xs="2" style={{ textAlign: "center" }}>
              <CLabel>:</CLabel>
            </CCol>
            <CCol lg="4" xs="6" style={{ textAlign: "start" }}>
              <CLabel>{detailData.phone}</CLabel>
            </CCol>
            <CCol lg="1" xs="0"></CCol>
          </CRow>
          <CButtonToolbar justify="center">
            <CButton className="modalBtn" onClick={detailCloseBtn}>
              Close
            </CButton>
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  );
};
export default DetailModal;
