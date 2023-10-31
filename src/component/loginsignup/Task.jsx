import React,{useState}from "react";
import './Task.css'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const Task = () => {
  const [isExtended, setIsExtended] = useState(false);

  const handleIconClick = () => {
    setIsExtended(!isExtended);
  }
  return (
    <div className={`task ${isExtended ? 'extended' : ''}`}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <h1 className="task-contents">Tasks ID</h1>
        <div style={{ marginLeft: '25%' }}>
          <ArrowDropDownCircleOutlinedIcon style={{color:'white'}} onClick={handleIconClick} />
        </div>
      </div>
  {isExtended && (
        <div className="task-details" style={{textAlign:'center',color:'white'}}>
          <p>Project ID: </p>
          <p>Module ID: </p>
          <p>Start Date: </p>
          <p>End Date: </p>
          
        </div>
      )}  
     

      
    </div>
  );
};

export default Task;
