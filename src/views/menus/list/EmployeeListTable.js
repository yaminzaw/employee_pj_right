import React from "react";
import { CCol, CRow, CButton, CImg, CLabel,CPagination } from "@coreui/react";
import UserData from "./UserData";

const EmployeeListTable = (props) => {
  let { 
    setActivePage,
    currentPage,
    lastPage,
    detailBtn,
    editBtn
 } = props;
  return (
    UserData.length > 0 && (
      <>
        <CRow className="rowDiv" style={{ marginTop: "30px" }}>
          <CCol lg="1"></CCol>
          <CCol
            lg="10"
            style={{
              border: "1px solid black",
              padding: "30px",
              backgroundColor: "rgb(242, 242, 242)",
              boxShadow: "5px 10px #888888",
            }}
          >
            <CRow>
              <CCol lg="9"></CCol>
              <CCol lg="3">
                <CLabel style={{ color: "#2d4294", fontSize: "17px" }}>
                  total rows {UserData.length} row(s)
                </CLabel>
              </CCol>
            </CRow>
            <CRow style={{ width: "100%", overflow: "auto"}}>
              <table
                className="table table-striped"
                style={{
                  width: "100%",
                  marginTop: "30px",
                  marginBottom: "30px",
                  border: "1px solid",
                  textAlign: "center",
                  marginLeft:"30px"
                }}
              >
                <thead style={{ backgroundColor: "#90a4ec" }}>
                  <tr>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      rowSpan="2"
                    >
                      No
                    </th>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      rowSpan="2"
                    >
                      ID
                    </th>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      rowSpan="2"
                    >
                      Name
                    </th>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      rowSpan="2"
                    >
                      Email
                    </th>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      rowSpan="2"
                    >
                      Department
                    </th>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      rowSpan="2"
                    >
                      Position
                    </th>
                    <th
                      style={{ border: "1px solid", verticalAlign: "middle" }}
                      colSpan={3}
                    >
                      Action
                    </th>
                  </tr>
                  <tr>
                    <th style={{ border: "1px solid" }}>Edit</th>
                    <th style={{ border: "1px solid" }}>Detail</th>
                    <th style={{ border: "1px solid", textAlign: "center" }}>
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {UserData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ border: "1px solid" }}>{data.id}</td>
                        <td style={{ border: "1px solid" }}>
                          {data.student_id}
                        </td>
                        <td style={{ border: "1px solid" }}>
                          {data.student_name}
                        </td>
                        <td style={{ border: "1px solid" }}>{data.email}</td>
                        <td style={{ border: "1px solid" }}>{data.career}</td>
                        <td style={{ border: "1px solid" }}>{data.phone}</td>
                        <td style={{ border: "1px solid" }}>
                          <CImg
                            style={{ width: "32px", height: "32px" }}
                            src={"/avatars/edit.png"}
                            onClick={()=>editBtn(data)}
                          />
                        </td>
                        <td style={{ border: "1px solid" }}>
                          <CImg
                            style={{ width: "32px", height: "32px" }}
                            src={"/avatars/detail.png"}
                            onClick={()=>detailBtn(data)}
                          />
                        </td>
                        <td style={{ border: "1px solid" }}>
                          <CImg
                            style={{ width: "32px", height: "32px" }}
                            src={"/avatars/trash.png"}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CRow>
              {UserData.length > 10 && (
                <CRow alignHorizontal="center" className="mt-3">
                  <CPagination
                    activePage={currentPage}
                    pages={lastPage}
                    dots={false}
                    arrows={false}
                    align="center"
                    firstButton="First page"
                    lastButton="Last page"
                    onActivePageChange={(i) => setActivePage(i)}
                  ></CPagination>
                </CRow>
              )}
          </CCol>
          <CCol lg="1"></CCol>
        </CRow>
      </>
    )
  );
};

export default EmployeeListTable;
