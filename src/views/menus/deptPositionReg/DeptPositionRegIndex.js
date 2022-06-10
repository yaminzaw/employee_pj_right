/**
 * Department and Position Registration Main Form
 * @author yaminzaw
 * @create 06/08/2022
 */
import React, { useState,useEffect} from "react";
import DeptPositionShow from "./DeptPositionShow";
import { CCard, CCardBody, CCardHeader, CRow } from "@coreui/react";
import DeptAddModal from "./DeptAddModal";
import DeptPositionTable from "./DeptPositionTable";
import DeptUpdateModal from "./DeptUpdateModal";
import DeptRemoveModal from "./DeptRemoveModal";
import PosAddModal from "./PosAddModal";
import PosUpdateModal from "./PosUpdateModal";
import PosRemoveModal from "./PosRemoveModal";
import { nullChk, validateName } from "../../common/CommonValidation";
import SuccessError from "../../common/SuccessError";
import Confirmation from "../../common/ConfirmBox";

const DeptPositionRegIndex = () => {
  const [deptData, setDeptData] = useState([]); //for get dept data from api
  const [chooseDept, setChooseDept] = useState(""); //for depatrment choose
  const [positionData, setPositionData] = useState([]); //for position data
  const [choosePosition, setChoosePosition] = useState(""); //for choose position
  const [showDeptAddModal, setShowDeptAddModal] = useState(false); //for show modal when click add img of dept
  const [addDept, setAddDept] = useState(""); //for add dept(input field)
  const [showDeptUpdateModal, setShowDeptUpdateModal] = useState(false); //for show modal when click edit img of dept
  const [updateDept, setUpdateDept] = useState(""); //for update dept(input field)
  const [chooseDeptUpdate, setChooseDeptUpdate] = useState(""); //for choose dept for update(id)
  const [showDeptRemoveModal, setShowDeptRemoveModal] = useState(false); //for show modal when click remove img of dept
  const [chooseRemoveDept, setChooseRemoveDept] = useState(""); //for remove dept(id)
  const [showPosAddModal, setShowPosAddModal] = useState(false); //for show modal when click add img of dept
  const [addPos, setAddPos] = useState(""); //for add dept(input field)
  const [showPosUpdateModal, setShowPosUpdateModal] = useState(false); //for show modal when click edit img of position
  const [updatePos, setUpdatePos] = useState(""); //for update position(input field)
  const [choosePosUpdate, setChoosePosUpdate] = useState(""); //for choose pos for update(id)
  const [showPosRemoveModal, setShowPosRemoveModal] = useState(false); //for show modal when click remove img of dept
  const [chooseRemovePos, setChooseRemovePos] = useState(""); //for remove dept(id)
  const [errAddDept, setErrAddDept] = useState([]); //for error message of add department modal
  const [successAddDept, setSuccessAddDept] = useState([]); //for success message of add department modal
  const [errUpdateDept, setErrUpdateDept] = useState([]); //for error message of update department modal
  const [successUpdateDept, setSuccessUpdateDept] = useState([]); //for success message of update department modal
  const [errRemoveDept, setErrRemoveDept] = useState([]); //for error message of delete department modal
  const [successRemoveDept, setSuccessRemoveDept] = useState([]); //for success message of delete department modal
  const [errAddPos, setErrAddPos] = useState([]); //for error message of add position modal
  const [successAddPos, setSuccessAddPos] = useState([]); //for success message of add position modal
  const [errUpdatePos, setErrUpdatePos] = useState([]); //for error message of update position modal
  const [successUpdatePos, setSuccessUpdatePos] = useState([]); //for success message of add position modal
  const [errRemovePos, setErrRemovePos] = useState([]); //for error message of remove position modal
  const [successRemovePos, setSuccessRemovePos] = useState([]); //for success message of remove position modal
  const [errMainDeptPos, setErrMainDeptPos] = useState([]); //for error message of main
  const [successMainDeptPos, setSuccessMainDeptPos] = useState([]); //for success message of main
  const [tableData,setTableData] = useState([]);//for table show
  const [deleteId,setDeleteId] = useState("");//for delete id(from table)
  const [confirmShow, setConfirmShow ] = useState(false); // for confirmation message box
  const [content, setContent ] = useState(""); // for content confirmation message
  const [confirmType, setConfirmType ] = useState(""); // for confirmation type 
  let errArray = [];
  let successArr = [];

  useEffect(() => {
    (async () => {
      await getDeptData();//get department data from api function
      await getPosData();//get position data from api function
      await getTableData();//get table data from api 
    })();
  }, []); //useEffect and call getDept to get department data and getPosData to get position data

  //get department data from api
  const getDeptData =async () =>{
    // let deptObj = { method: "get", url: "/department" };
    // let response = await ApiRequest(deptObj);
    // if(response.flag === false){
    //   errMainDeptPos(response.message);
    // }else{
      // setDeptData(response.data.data);
      let deptData = [
        { id: "1", name: "IT" },
        { id: "2", name: "Infra" },
        { id: "3", name: "Sale" },
        { id: "4", name: "Develop" },
      ]
      setDeptData(deptData);
    // }
  }

  //get position data from api
  const getPosData = async() =>{
    // let posObj = { method: "get", url: "/position" };
    // let response = await ApiRequest(posObj);
    // if(response.flag === false){
    //   errMainDeptPos(response.message);
    // }else{
      // setPositionData(response.data.data);
      let posData = [
        { id: 1, name: "Admin" },
        { id: 2, name: "Leader" },
        { id: 3, name: "Member" },
      ]
      setPositionData(posData);
    // }
  }

  //get table data from api
  const getTableData = async() =>{
    // let tableData = { method: "get", url: "/department-position" };
    // let response = await ApiRequest(posObj);
    // if(response.flag === false){
    //   errMainDeptPos(response.message);
    // }else{
      // setTableData(response.data.data);
      let tempTData = [
        {"id": 1, "department_name": "Software Department", "position_name": "Manager"},
        {"id": 2, "department_name": "Software Department", "position_name": "Senior"},
        {"id": 3, "department_name": "Software Department", "position_name": "Manager"}
      ]
      setTableData(tempTData);
    // }
  }

  //onChange function on drop down(department)
  let selectDept = (e) => {
    setChooseDept(e.target.value);
  };

  //onChange function on drop down(position)
  let selectPosition = (e) => {
    setChoosePosition(e.target.value);
  };

  /**
   * onClick function on add image of department
   * @author yaminzaw
   * @create 06/08/2022
   */
  let deptAddClick = () => {
    setShowDeptAddModal(true);
  };

  /**
   * get department name from input field
   * @author yaminzaw
   * @create 06/08/2022
   */
  const handleAddDept = (e) => {
    setAddDept(e.target.value);
  };

  /**
   * onClick add button on showDeptAddModal
   * @author yaminzaw
   * @create 06/08/2022
   */
  const addDeptOk = () => {
    setDeptData([...deptData, { id: 4, name: addDept }]);
    console.log("add dept", addDept);

    if (!nullChk(addDept)) {
      errArray.push("Please Enter Department Name");
    } else {
      successArr.push("Successfully add");
    }
    setErrAddDept(errArray);
    setSuccessAddDept(successArr);
  };

  /**
   * onClick close function on DeptAddModal
   * @author yaminzaw
   * @create 06/08/2022
   */
  const addDeptClose = () => {
    setShowDeptAddModal(false);
    setErrAddDept([]);
    setSuccessAddDept([]);
    setAddDept("");
  };

  /**
   * onClick function on update image of department
   * @author yaminzaw
   * @create 06/08/2022
   */
  let deptUpdateClick = () => {
    setShowDeptUpdateModal(true);
  };

  /**
   * get department name from input field
   * @author yaminzaw
   * @create 06/08/2022
   */
  const handleUpdateDept = (e) => {
    setUpdateDept(e.target.value);
  };

  /**
   * onClick update button on DeptUpdateModal
   * @author yaminzaw
   * @create 06/08/2022
   */
  const updateDeptOk = () => {
    for (let i = 0; i < deptData.length; i++) {
      if (deptData[i].id == chooseDeptUpdate) {
        deptData[i].name = updateDept;
      }
    }
    setUpdateDept("");
    console.log("update dept id", chooseDeptUpdate);
    console.log("update dept by name", updateDept);

    if (!nullChk(chooseDeptUpdate)) {
      errArray.push("Please Select Department");
    }
    if (!nullChk(updateDept)) {
      errArray.push("Please Enter Department Name");
    }
    if (nullChk(chooseDeptUpdate) && nullChk(updateDept)) {
      successArr.push("Successfully update");
    }
    setErrUpdateDept(errArray);
    setSuccessUpdateDept(successArr);
  };

  //onClick close function on DeptAddModal

  const updateDeptClose = () => {
    setShowDeptUpdateModal(false);
    setErrUpdateDept([]);
    setSuccessUpdateDept([]);
    setAddDept("");
    setChooseDept("");
    setChooseDeptUpdate("");
  };

  /**
   * onChange function on drop down(dept) for update
   * @author yaminzaw
   * @create 06/08/2022
   */
  let selectDeptUpdate = (e) => {
    setChooseDeptUpdate(e.target.value);
  };

  /**
   * onClick function on remove img of dept
   * @author yaminzaw
   * @create 06/08/2022
   */
  let deptRemoveClick = () => {
    setShowDeptRemoveModal(true);
  };

  /**
   * onChange function on drop down(dept) for remove
   * @author yaminzaw
   * @create 06/08/2022
   */
  let selectRemoveDept = (e) => {
    setChooseRemoveDept(e.target.value);
  };

  /**
   * onClick remove button on DeptRemoveModal
   * @author yaminzaw
   * @create 06/08/2022
   */
  const removeDeptOk = () => {
    console.log("remove dept id", chooseRemoveDept);
    if (!nullChk(chooseRemoveDept)) {
      errArray.push("please select department");
    } else {
      successArr.push("successfully deleted");
    }

    setErrRemoveDept(errArray);
    setSuccessRemoveDept(successArr);
  };

  //onClick close button DeptRemoveModal
  const removeDeptClose = () => {
    setShowDeptRemoveModal(false);
    setChooseRemoveDept("");
    setErrRemoveDept("");
    setSuccessRemoveDept("");
  };

  /**
   * onClick function on add image of position
   * @author yaminzaw
   * @create 06/08/2022
   */
  let posAddClick = () => {
    setShowPosAddModal(true);
  };

  /**
   * get position name from input field
   * @author yaminzaw
   * @create 06/08/2022
   */
  const handleAddPos = (e) => {
    setAddPos(e.target.value);
  };

  //onClick add button on showDeptAddModal
  const addPosOk = () => {
    setPositionData([...positionData, { id: 4, name: addPos }]);
    setAddPos("");
    console.log("add pos name", addPos);

    if (!nullChk(addPos)) {
      errArray.push("Please Enter Position Name");
    } else successArr.push("Successfully Add");

    setErrAddPos(errArray);
    setSuccessAddPos(successArr);
  };

  //onClick close btn of POSAddModal
  const addPosClose = () => {
    setShowPosAddModal(false);
    setAddPos("");
    setErrAddPos("");
    setSuccessAddPos("");
  };

  //onClick function on update image of position
  let posUpdateClick = () => {
    setShowPosUpdateModal(true);
  };

  // get position name from input field
  const handleUpdatePos = (e) => {
    setUpdatePos(e.target.value);
  };

  //onClick update button on PosUpdateModal
  const updatePosOk = () => {
    for (let i = 0; i < positionData.length; i++) {
      if (positionData[i].id == choosePosUpdate) {
        positionData[i].name = updatePos;
      }
    }
    console.log("update pos id", choosePosUpdate);
    console.log("update pos by name", updatePos);

    if (!nullChk(choosePosUpdate)) {
      errArray.push("Please Select Position");
    }
    if (!nullChk(updatePos)) {
      errArray.push("Please Enter Position Name");
    }
    if (nullChk(choosePosUpdate) && nullChk(updatePos)) {
      successArr.push("Successfully update");
    }
    setErrUpdatePos(errArray);
    setSuccessUpdatePos(successArr);
  };

  //onClick close btn on positon update modal
  const updatePosClose = ()=>{
      setShowPosUpdateModal(false);
      setChoosePosUpdate("");
      setUpdatePos("");
      setErrUpdatePos([]);
      setSuccessUpdatePos([]);
  }

  //onChange function on drop down(position) for update
  let selectPosUpdate = (e) => {
    setChoosePosUpdate(e.target.value);
  };

  //onClick function on remove img of position
  let posRemoveClick = () => {
    setShowPosRemoveModal(true);
  };

  //onChange function on drop down(position) for remove
  let selectRemovePos = (e) => {
    setChooseRemovePos(e.target.value);
  };

  //onClick remove button on PosRemoveModal
  const removePosOk = () => {
    console.log("remove pos id", chooseRemovePos);
    if (!nullChk(chooseRemovePos)) {
      errArray.push("please select position");
    } else {
      successArr.push("successfully deleted");
    }

    setErrRemovePos(errArray);
    setSuccessRemovePos(successArr);
  };

  //onClick close button on PosRemoveModal
  const removePosClose =() =>{
    setShowPosRemoveModal(false);
    setErrRemovePos([]);
    setSuccessRemovePos([]);
    setChooseRemovePos("");
  }

  //onClick save button of departmentPosition main page
  const saveDeptPos =() =>{
    if(!nullChk(chooseDept)){
      errArray.push("Please Select Department")
    }
    if(!nullChk(choosePosition)){
      errArray.push("Please Select Position")
    }
    if(errArray == ""){
      successArr.push("successfully saved");
   
      // let saveDeptPos = { 
        // method: "get", 
        // url: "/department-position/save",
        // params: {
        //department-id: chooseDept,
        //position-id: choosePosition,
        // }};
        // let response = await ApiRequest(saveDeptPos);
        // if(response.flag === false){
        //   errMainDeptPos(response.message);
        // }else{
        // setSuccessMainDeptPos(response.data.data);
        // }

        // let tableData = { method: "get", url: "/department-position" };
        // let response = await ApiRequest(posObj);
        // if(response.flag === false){
        //   errMainDeptPos(response.message);
        // }else{
          // setTableData(response.data.data);
          let tempTData = [
            {"id": 4, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 5, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 6, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 7, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 8, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 9, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 10, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 11, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 12, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 13, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 14, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 15, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 16, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 17, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 18, "department_name": "Software Department", "position_name": "Senior"},
            {"id": 19, "department_name": "Software Department", "position_name": "Manager"},
            {"id": 20, "department_name": "Software Department", "position_name": "Senior"},
          ]
          setTableData(tempTData);
    }

    setErrMainDeptPos(errArray);
    setSuccessMainDeptPos(successArr);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  //onClick delete img from table
  const deleteDeptPos = (id) =>{
    setDeleteId(id);
    setConfirmShow(true);
    setConfirmType("delete");
    setContent("Are you sure you want to delete?");
  }

  let deleteOK = async() =>{
    setConfirmShow(false);
    setSuccessMainDeptPos([]);
    setErrMainDeptPos([]);
    alert(deleteId)
}

  return (
    <>
    <CRow style={{justifyContent:"center"}}>
      <SuccessError error={errMainDeptPos} success={successMainDeptPos} />
    </CRow>
    <CCard className="regCard" style={{ paddingBottom: "80px" }}>
      <CCardHeader className="regCard" style={{ textAlign: "center" }}>
        <h2 style={{ color: "white" }}>Department and Position Registration</h2>
      </CCardHeader>
      <CCardBody>
        <DeptPositionShow
          chooseDept={chooseDept}
          selectDept={selectDept}
          deptData={deptData}
          choosePosition={choosePosition}
          selectPosition={selectPosition}
          positionData={positionData}
          deptAddClick={deptAddClick}
          deptUpdateClick={deptUpdateClick}
          deptRemoveClick={deptRemoveClick}
          posAddClick={posAddClick}
          posUpdateClick={posUpdateClick}
          posRemoveClick={posRemoveClick}
          saveDeptPos={saveDeptPos}
          deleteDeptPos={deleteDeptPos}
        />
        <DeptAddModal
          show={showDeptAddModal}
          addDeptClose={addDeptClose}
          handleAddDept={handleAddDept}
          addDept={addDept}
          addDeptOk={addDeptOk}
          errAddDept={errAddDept}
          successAddDept={successAddDept}
        />
        <DeptUpdateModal
          show={showDeptUpdateModal}
          updateDeptClose={updateDeptClose}
          handleUpdateDept={handleUpdateDept}
          updateDept={updateDept}
          updateDeptOk={updateDeptOk}
          deptData={deptData}
          selectDeptUpdate={selectDeptUpdate}
          chooseDeptUpdate={chooseDeptUpdate}
          errUpdateDept={errUpdateDept}
          successUpdateDept={successUpdateDept}
        />
        <DeptRemoveModal
          show={showDeptRemoveModal}
          removeDeptClose={removeDeptClose}
          selectRemoveDept={selectRemoveDept}
          chooseRemoveDept={chooseRemoveDept}
          removeDeptOk={removeDeptOk}
          deptData={deptData}
          successRemoveDept={successRemoveDept}
          errRemoveDept={errRemoveDept}
        />
        <PosAddModal
          show={showPosAddModal}
          addPosClose={addPosClose}
          handleAddPos={handleAddPos}
          addPos={addPos}
          addPosOk={addPosOk}
          errAddPos={errAddPos}
          successAddPos={successAddPos}
        />
        <PosUpdateModal
          show={showPosUpdateModal}
          updatePosClose={updatePosClose}
          handleUpdatePos={handleUpdatePos}
          updatePos={updatePos}
          updatePosOk={updatePosOk}
          positionData={positionData}
          selectPosUpdate={selectPosUpdate}
          choosePosUpdate={choosePosUpdate}
          errUpdatePos={errUpdatePos}
          successUpdatePos={successUpdatePos}
        />
        <PosRemoveModal
          show={showPosRemoveModal}
          removePosClose={removePosClose}
          selectRemovePos={selectRemovePos}
          chooseRemovePos={chooseRemovePos}
          removePosOk={removePosOk}
          positionData={positionData}
          errRemovePos={errRemovePos}
          successRemovePos={successRemovePos}
        />
        <DeptPositionTable 
          tableData={tableData}
          deleteDeptPos={deleteDeptPos}
       />
        <Confirmation
          show={confirmShow}
          content={content}
          type={confirmType}
          cancel={() => setConfirmShow(false)}
          deleteOK={deleteOK}
          okButton={"OK"}
          cancelButton={"Cancel"}
        />  
      </CCardBody>
    </CCard>
    </>
  );
};

export default DeptPositionRegIndex;
