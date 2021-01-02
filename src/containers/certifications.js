import React, { useState } from "react";
import { Form } from "../components";
import { MdArrowDropDown } from 'react-icons/md';

export default function Certifications() {
  const [control, setControl] = useState(
    Array.from(new Array(3), (cert, id) => ({
      name: "",
      year: "",
    }))
  );
  const start = new Date().getFullYear();
  const end = 1949;
  let len = start - end;
  const years = Array.from(new Array(len), (val, id) => start - id);
  years.unshift("Year");
  const yearsDropdown = years.map((year, id) => (
    <option
      value={id !== 0 ? year : ""}
      key={id + 1}
      style={{ color: "#B1B1B1" }}
    >
      {year}
    </option>
  ));

  const handleChange = (target, id) => {
    setControl(prevState => [
      ...prevState.slice(0, id),
      {
        ...prevState[id],
        [target.name]: target.value
      },
      ...prevState.slice(id+1),
    ])
  }  

  return (
    <Form type="resume" id="certifications">
      <div className="d-flex align-items-center mt-4">
        <Form.Label width="70%" marginRight="10%">
          Certificate Name
        </Form.Label>
        <Form.Label width="20%">Year</Form.Label>
      </div>
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        Certifications
      </Form.Title>

      {control.map((cert, id) => (
        <Form.Group row marginTop="0">
          <Form.Group type="resume" width="70%" marginRight="10%">
            <Form.Input
              type="text"
              name="name"
              placeholder="e.g Figma Ambassador"
              typ="resume"
              onChange={({ target }) => handleChange(target, id)}
            />
          </Form.Group>
          <Form.Group type="resume" width="20%">
            <div
              style={{
                width: "100%",
                marginRight: "10%",
                position: "relative",
              }}
            >
              <Form.InputDropdown typ="resume" name="year" value={cert.year} 
                dropdownElements={yearsDropdown}
                onChange={({ target }) => handleChange(target, id)}
              />
              <MdArrowDropDown
                size={35}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  color: "#474747",
                  transform: "translate(0, -50%)",
                }}
              />
            </div>
          </Form.Group>
        </Form.Group>
      ))}
    </Form>
  );
}
