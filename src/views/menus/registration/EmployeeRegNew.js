/**
 * Employee Registration Form 
 * @author yaminzaw
 * @create 06/08/2022
 */
 import {
    CCol,
    CRow,
    CLabel,
    CInput,
    CInputRadio,
    CSelect,
    CButton,
    CImg,
  } from "@coreui/react";
  import React from "react";
  
  const EmployeeRegNew = (props) => {
    let {
      email,
      handleChangeEmail,
      name,
      handleChangeName,
      pwd,
      handleChangePwd,
      comfirmPwd,
      handleChangeComfirmPwd,
      genderArr,
      clickGender,
      genderId,
      chooseDept,
      selectDept,
      deptData,
      choosePosition,
      selectPosition,
      positionData,
      editStatus,
      save
    } = props;
    console.log("edit status",editStatus)
    return (
      <>
        <CRow className="rowDiv">
          <CCol lg="1"></CCol>
          <CCol lg="11">
            <h3 style={{ color: "rgb(51, 51, 153)" }}>Personal Detail</h3>
          </CCol>
        </CRow>
        <CRow>
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
            <CRow className="rowDiv">
              <CCol lg="2">
                <CLabel className="label">Name<span style={{color:"red",fontSize:"20px"}}>*</span></CLabel>
              </CCol>
              <CCol lg="4">
                <CInput
                  className="inputField"
                  placeholder="Please Enter Name"
                  value={name}
                  onChange={(e) => handleChangeName(e)}
                />
              </CCol>
              <CCol lg="2">
                <CLabel className="label">Email<span style={{color:"red",fontSize:"20px"}}>*</span></CLabel>
              </CCol>
              <CCol lg="4">
                <CInput
                  className="inputField"
                  placeholder="Please Enter Email"
                  type="text"
                  value={email}
                  onChange={(e) => handleChangeEmail(e)}
                />
              </CCol>
            </CRow>
            <CRow className="rowDiv">
              <CCol lg="2">
                <CLabel className="label">Gender<span style={{color:"red",fontSize:"20px"}}>*</span></CLabel>
              </CCol>
              <CCol lg="4">
                <div className="ml-3" style={{ display: "flex" }}>
                  {genderArr.map((data, index) => {
                    return (
                      <CRow key={index}>
                        <CCol className="radioLabel">
                          <CInputRadio
                            className="Radio"
                            name={data.name}
                            value={data.id}
                            onChange={() => clickGender(data)}
                            checked={genderId == data.id ? true : false}
                          />
                          <CLabel className="RadioLabel">{data.name}</CLabel>
                        </CCol>
                      </CRow>
                    );
                  })}
                </div>
              </CCol>
              <CCol lg="6"></CCol>
            </CRow>
            <CRow className="rowDiv" style={{ marginTop: "30px" }}>
              <CCol lg="2">
                <CLabel className="label">Password<span style={{color:"red",fontSize:"20px"}}>*</span></CLabel>
              </CCol>
              <CCol lg="4">
                <CInput
                  className="inputField"
                  placeholder="Please Enter Password"
                  type="password"
                  value={pwd}
                  onChange={(e) => handleChangePwd(e)}
                />
              </CCol>
              <CCol lg="2">
                <CLabel className="label">Comfirm Password<span style={{color:"red",fontSize:"20px"}}>*</span></CLabel>
              </CCol>
              <CCol lg="4">
                <CInput
                  className="inputField"
                  placeholder="Please Comfirm Password"
                  type="password"
                  value={comfirmPwd}
                  onChange={(e) => handleChangeComfirmPwd(e)}
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol lg="1"></CCol>
        </CRow>
        <CRow className="rowDiv" style={{ marginTop: "30px" }}>
          <CCol lg="1"></CCol>
          <CCol lg="11">
            <h3 style={{ color: "rgb(51, 51, 153)" }}>Department and Position</h3>
          </CCol>
        </CRow>
        <CRow>
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
            <CRow className="rowDiv">
              <CCol lg="2">
                <CLabel className="label">Department</CLabel>
              </CCol>
              <CCol lg="4">
                <CSelect
                  className="select"
                  value={chooseDept}
                  onChange={selectDept}
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
              <CCol lg="2">
                <CLabel className="label">Position</CLabel>
              </CCol>
              <CCol lg="4">
                <CSelect
                  className="select"
                  value={choosePosition}
                  onChange={selectPosition}
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
            </CRow>
            <CRow>
              <CCol lg="4"></CCol>
              <CCol lg="4" style={{ textAlign: "center" }}>
                <CButton className="regBtn">Add</CButton>
              </CCol>
              <CCol lg="4"></CCol>
            </CRow>
            <CRow style={{ width: "100%", overflow: "auto"}}>
              <CCol lg="3" xs="0"></CCol>
              <CCol lg="6" xs="12" >
                <table className="table table-striped" style={{width:"100%",marginTop:"30px",marginBottom:"30px",border:"1px solid",textAlign:"center"}}>
                  <thead style={{backgroundColor:"#90a4ec"}} >
                    <tr>
                      <th style={{border:"1px solid"}} scope="col">Department</th>
                      <th style={{border:"1px solid"}} scope="col">Position</th>
                      <th style={{border:"1px solid"}} scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{border:"1px solid"}}>IT</td>
                      <td style={{border:"1px solid"}} >Admin</td>
                      <td style={{border:"1px solid"}}>
                          <CImg
                            style={{ width: "35px", height: "35px" }}
                            src={"/avatars/trash.png"}
                          /></td>
                    </tr>
                    <tr>
                      <td style={{border:"1px solid"}}>Infra</td>
                      <td style={{border:"1px solid"}}>Leader</td>
                      <td style={{border:"1px solid"}}>
                      <CImg
                            style={{ width: "35px", height: "35px" }}
                            src={"/avatars/trash.png"}
                          />
                      </td>
                    </tr>
                    <tr>
                      <td style={{border:"1px solid"}}>HR</td>
                      <td style={{border:"1px solid"}}>Member</td>
                      <td style={{border:"1px solid"}}>
                      <CImg
                            style={{ width: "35px", height: "35px" }}
                            src={"/avatars/trash.png"}
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCol>
              <CCol lg="3" xs="0"></CCol>
            </CRow>
          </CCol>
          <CCol lg="1"></CCol>
        </CRow>
        <CRow>
            <CCol lg="3"></CCol>
            <CCol lg="3"  style={{ textAlign: "center" }}>
              {editStatus && (
                <CButton className="regBtn" style={{marginTop:"40px"}}>Update</CButton>
              )}
              {!editStatus && (
                <CButton className="regBtn" style={{marginTop:"40px"}} onClick={save}>Save</CButton>
              )}
            </CCol>
            <CCol lg="3"  style={{ textAlign: "center" }}>
              <CButton className="regBtn" style={{marginTop:"40px"}}>Reset</CButton>
            </CCol>
            <CCol lg="3"></CCol>
        </CRow>
      </>
    );
  };
  
  export default EmployeeRegNew;
  