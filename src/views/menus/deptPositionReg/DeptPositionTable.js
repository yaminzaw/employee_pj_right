import React from "react";
import { CCol, CRow, CLabel, CImg} from "@coreui/react";
import EmployeeListTable from "../list/EmployeeListTable";

const DeptPositionTable = (props)=>{
    let {tableData,deleteDeptPos} = props;
    return(
      tableData.length > 0 && (
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
                  total rows {tableData.length} row(s)
                </CLabel>
              </CCol>
            </CRow>
            <div  className="fixTableHead ">
              <table
                className="table"
                style={{
                  width: "96%",
                  marginBottom: "30px",
                  border: "1px solid",
                  textAlign: "center",
                  marginLeft:"30px",
                }}
              >
                <thead style={{ backgroundColor: "#90a4ec"}}>
                  <tr>
                    <th>
                      No
                    </th>
                    <th>
                      Department
                    </th>
                    <th>
                      Position
                    </th>
                    <th>
                      Delete
                    </th>
                    </tr>
                </thead>
                <tbody style={{verticalAlign: "middle"}}>
                  {tableData.map((data,index)=>{
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.department_name}</td>
                        <td>{data.position_name}</td>
                        <td>
                          <CImg
                            style={{ width: "32px", height: "32px" }}
                            src={"/avatars/trash.png"}
                            onClick={()=>deleteDeptPos(data.id)}
                          />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CCol>
          <CCol lg="1"></CCol>
        </CRow>
      </>
      )
    )
}

export default DeptPositionTable;