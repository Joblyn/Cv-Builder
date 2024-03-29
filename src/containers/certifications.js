import React from "react";
import { Form } from "../components";
import { MdArrowDropDown } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import * as ROUTES from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeData } from "../actions/actions";
import * as Actions from "../constants/actionsTypes";

export default function Certifications() {
  const dispatch = useDispatch();
  const certifications = useSelector(state => state.resumeData.certifications);

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
    dispatch(updateResumeData("certifications", target, Actions.CERTS, id));
  };

  const addItem = () => {
    dispatch(updateResumeData("certifications", null, Actions.ADD_ITEM))
  };

  const removeItem = (id) => {
    dispatch(updateResumeData("certifications", null, Actions.REMOVE_ITEM, id));
  };

  return (
    <Form type="resume" id="certifications">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        Certifications
      </Form.Title>
      <div className="d-flex align-items-center mt-4">
        <Form.Label width="70%" marginRight="10%">
          Certificate Name
        </Form.Label>
        <Form.Label width="20%">Year</Form.Label>
      </div>
      {certifications.length &&
        certifications.map((item, id) => (
          <div key={`cert-${id+1}`}>
            <div className="position-relative">
              <Form.Icon onClick={() => removeItem(id)} marginTop='1rem'>
                <GoTrashcan size={20} />
              </Form.Icon>
            </div>
            <Form.Group
              row
              marginTop="0"
              className="flex-row"
              key={`cert-${id + 1}`}
            >
              <Form.Group
                type="resume"
                width="70%"
                marginRight="10%"
                style={{ marginTop: "3rem", width: "70%", marginRight: "10%" }}
              >
                <Form.Input
                  type="text"
                  name="name"
                  placeholder="e.g Figma Ambassador"
                  typ="resume"
                  defaultValue={item.name}
                  onChange={({ target }) => handleChange(target, id)}
                />
              </Form.Group>
              <Form.Group
                type="resume"
                width="20%"
                style={{ marginTop: "3rem", width: "20%" }}
              >
                <div
                  style={{
                    width: "100%",
                    marginRight: "10%",
                    position: "relative",
                  }}
                >
                  <Form.InputDropdown
                    typ="resume"
                    name="year"
                    defaultValue={item.year}
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
          </div>
        ))}
      <div className="d-flex justify-content-end mt-4">
        <span
          className="btn-link text-decoration-none"
          style={{
            color: "#216DE0",
            fontSize: "1.15rem",
            cursor: "pointer",
            fontWeight: "500",
          }}
          onClick={addItem}
        >
          + Add Another
        </span>
      </div>

      <div className="d-flex">
        <Form.Button
          type="submit"
          form="personal-info"
          typ="resume"
          href={ROUTES.LANG}
          outline="true"
        >
          Previous Section
        </Form.Button>
        <Form.Button
          type="submit"
          form="personal-info"
          position="right"
          typ="resume"
          href={ROUTES.ACHIEVE}
        >
          Next Section
        </Form.Button>
      </div>
    </Form>
  );
}
