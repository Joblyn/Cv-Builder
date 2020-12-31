import React, { useState } from "react";
import { Form } from "../components";
import { MdRemove, MdArrowDropDown } from 'react-icons/md'; 
import * as ROUTES from '../constants/routes';

const months = [
  "Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsDropdown = months.map((month, id) => (
  <option value={id !== 0 ? month : ''} key={id+1} style={{ color: '#B1B1B1' }}>
    {month}
  </option>
));

export default function Education() {
  const [month, setMonth] = useState('');

  return (
    <Form type="resume" id="education">
      <Form.Group row>
        <Form.Group type="resume" width="45%" marginRight="10%">
          <Form.Label htmlFor="institutionName">Institution Name</Form.Label>
          <Form.Input
            id="institutionName"
            type="text"
            placeholder="e.g Fupre"
            typ="resume"
          />
        </Form.Group>
        <Form.Group width="45%">
          <Form.Label htmlFor="fieldOfStudy">Field of Study</Form.Label>
          <Form.Input
            id="fieldOfStudy"
            type="text"
            placeholder="e.g Engineering"
            typ="resume"
          />
        </Form.Group>
      </Form.Group>
      <Form.Group row marginTop="0">
        <Form.Group type="resume" width="45%" marginRight="10%">
          <Form.Label htmlFor="country">Country</Form.Label>
          <Form.Input
            id="country"
            type="text"
            placeholder="e.g Nigeria"
            typ="resume"
          />
        </Form.Group>
        <Form.Group width="45%">
          <Form.Label htmlFor="fieldOfStudy">City</Form.Label>
          <Form.Input
            id="city"
            type="text"
            placeholder="e.g Effurun"
            typ="resume"
          />
        </Form.Group>
      </Form.Group>
      <Form.Group>
        <span
          style={{
            fontSize: "16px",
            lineHeight: "19px",
            color: "#216DE0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Form.Label style={{ marginRight: "auto" }}>Time Period</Form.Label>
          <input type="checkbox" style={{ margin: ".4rem" }} />
          Currently study here
        </span>
        <Form.Group row>
          <Form.Group row width="45%">
            <div style={{width:"45%", marginRight:'10%', position:'relative'}}>
              <Form.InputDropdown
                dropdownElements={monthsDropdown}
                typ="resume"
                value={month}
                onChange={({ target }) => setMonth(target.value)}
              />
              <MdArrowDropDown size={35} style={{position: 'absolute', top:'50%', right:'0', color:'#474747', transform:'translate(0, -50%)'}} />
            </div>
            <div style={{width:"45%", position:'relative'}}>
              <Form.InputDropdown
                dropdownElements={monthsDropdown}
                typ="resume"
                value={month}
                onChange={({ target }) => setMonth(target.value)}
              />
              <MdArrowDropDown size={35} style={{position: 'absolute', top:'50%', right:'0', color:'#474747', transform:'translate(0, -50%)'}} />
            </div>
          </Form.Group>
          <div style={{ width: '10%'}} className="d-flex align-items-center justify-content-center"><MdRemove size={29}/></div>
          <Form.Group row width="45%" marginTop="0">
          <div style={{width:"45%", marginRight:'10%', position:'relative'}}>
              <Form.InputDropdown
                dropdownElements={monthsDropdown}
                typ="resume"
                value={month}
                onChange={({ target }) => setMonth(target.value)}
              />
              <MdArrowDropDown size={35} style={{position: 'absolute', top:'50%', right:'0', color:'#474747', transform:'translate(0, -50%)'}} />
            </div>
            <div style={{width:"45%", position:'relative'}}>
              <Form.InputDropdown
                dropdownElements={monthsDropdown}
                typ="resume"
                value={month}
                onChange={({ target }) => setMonth(target.value)}
              />
              <MdArrowDropDown size={35} style={{position: 'absolute', top:'50%', right:'0', color:'#474747', transform:'translate(0, -50%)'}} />
            </div>
          </Form.Group>
        </Form.Group>
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="info">Other Information</Form.Label>
        <Form.TextArea 
          id="info" 
          placeholde=""
          height="12rem"
          typ="resume"
        />
      </Form.Group>
      <div className="d-flex">
        <Form.Button
          type="submit"
          form="personal-info"
          typ="resume"
          href={ROUTES.PERS_INFO}
          outline
        >
          Previous Section
        </Form.Button>
        <Form.Button
          type="submit"
          form="personal-info"
          position="right"
          typ="resume"
          href={ROUTES.EDU}
        >
          Next Section
        </Form.Button>
      </div>
    </Form>
  );
}
