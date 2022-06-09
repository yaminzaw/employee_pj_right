import React from "react";
import { CCol, CRow, CLabel} from "@coreui/react";
import EmployeeListTable from "../list/EmployeeListTable";

const DeptPositionTable = (props)=>{

    return(
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
                      style={{ border: "1px solid"}}>
                      No
                    </th>
                    <th
                      style={{ border: "1px solid"}}>
                      Department
                    </th>
                    <th style={{ border: "1px solid"}}>
                      Position
                    </th>
                    <th style={{ border: "1px solid"}}>
                      Delete
                    </th>
                    </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
            </CRow>
          </CCol>
          <CCol lg="1"></CCol>
        </CRow>
      </>
    )
}

export default DeptPositionTable;