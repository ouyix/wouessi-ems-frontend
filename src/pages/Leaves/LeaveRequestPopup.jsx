import React, { useState } from "react";
import Dropdown from "../../components/common/LeavePopupDropdown";
import "../../styles/components/LeaveRequestPopup.css";
import TimeOffBalance from "../../components/common/TimeOffBalance";
import FileUploadButton from "../../components/common/FileUploadButton";

const LeaveRequestPopup = ({ onClose }) => {

  const totalLeaveDays = 10;
  const [usedDays, setUsedDays] = useState(0);
  const remainingDays = totalLeaveDays - usedDays;

  const [formData, setFormData] = useState({
    leaveType: "sick",
    employeeName: "",
    startDate: "",
    endDate: "",
    reason: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (selectedValue) => {
    setFormData({
      ...formData,
      leaveType: selectedValue,
    });

    console.log("Selected Leave Type:", selectedValue);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Request Submitted:", formData);
    if (formData.file) {
      console.log("File to upload:", formData.file);
    }
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div> 

              
              <div style={{display: "flex"}}> 
                <div>
              
                  <h1 style={{ marginTop: "30px", marginLeft: "10px",maxHeight: "10px" }}>Apply for Leave</h1>
                </div>

                

                <div className="leaveType" style={{ marginTop: "27px" , marginLeft: "60px", display: "flex"}}>
                <span className="dropdown-label" style={{ marginRight: "10px", marginTop: "10px" }}>Type</span>


                  <Dropdown
                  
                    options={[
                      { value: "sick", label: "Sick Leave" },
                      { value: "vacation", label: "Vacation Leave" },
                      { value: "personal", label: "Personal Leave" },
                    ]}
                    value={formData.leaveType}
                    onChange={handleDropdownChange}
                  />

                  

                </div>
                

                
                <div>

                <div className="time-off-balance">
    <TimeOffBalance days={remainingDays} />
</div>
                  
                </div>
              </div> 
                <div>
                  <hr style={{width: "100%", marginTop: "20px", marginBottom: "30px", marginLeft: "5px", opacity: 0.25 }} />
                </div>
              <div> 
                <div className="form-group" style={{ width: "100%", height: "40%" }}>
                  <label className="field-labels"><b>Employee's Name</b></label>
                  <textarea
                    style={{ backgroundColor: "white", resize: "none", height: "1.2em", width: "100%" }}
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div > 
              <div style={{display: "flex"}}> 
                <div className="form-group" style={{ width: "40%", height: "40%" }}>
                  <label className="field-labels"><b>Start Date</b></label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "white" }}
                  />
                </div>
                <div style={{ width: "20%", textAlign: "center", verticalAlign: "middle" }}>
                  <p style={{ marginTop: "30px", marginLeft: "18px" }}>to</p>
                </div>
                <div className="form-group" style={{ width: "40%", height: "40%" }}>
                  <label className="field-labels"><b>End Date</b></label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "white" }}
                  />
                </div>
              </div>
              <div> 
                <div className="form-group" style={{ marginTop: "20px" }}>
                  <textarea
                    placeholder="Reason for leave"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
      
                  />
                </div>
              </div>
              <div style={{display: "flex"}}> 
              <div className="supporting-docs-container">
            <h4>Supporting Documents</h4>
            <FileUploadButton /> 
          </div>
              </div>
              <div className="form-actions" style={{display: "flex", width: "97%", marginTop: "225px"}}> 
                <div>
                  <button className="close-button" type="button" onClick={onClose} >
                    <b>Close</b>
                  </button>
                  <button className="submit-button" style={{marginLeft: "10px"}}>
                    Send Request
                  </button>
                </div>
              </div>
            </div> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequestPopup;