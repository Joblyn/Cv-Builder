import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../components";
import { MdRemove, MdArrowDropDown } from "react-icons/md";
import * as ROUTES from "../constants/routes";
import { GoTrashcan } from "react-icons/go";
import { updateResumeData } from "../actions/actions";
import * as Actions from "../constants/actionsTypes";

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

export default function Education() {
  const dispatch = useDispatch();
  const education = useSelector(state => state.resumeData.education);

  // const [control, setControl] = useState([
  //   {
  //     institutionName: "",
  //     fieldOfStudy: "",
  //     month: { start: "", end: "" },
  //     year: { start: "", end: "" },
  //   },
  // ]);

  const monthsDropdown = months.map((month, id) => (
    <option
      value={id !== 0 ? month : ""}
      key={id + 1}
      style={{ color: "#B1B1B1" }}
    >
      {month}
    </option>
  ));

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
    dispatch(updateResumeData("education", target, Actions.EDUCATION, id));

    // setControl((prevState) => [
    //   ...prevState.slice(0, id),
    //   {
    //     ...prevState[id],
    //     [target.dataset.category]: {
    //       ...prevState[id][target.dataset.category],
    //       [target.name]: target.value,
    //     },
    //   },
    //   ...prevState.slice(id + 1),
    // ]);
  };

  const addItem = () => {
    let target = null;
    dispatch(updateResumeData("education", target, Actions.ADD_ITEM));

    // setControl((prevState) => [
    //   ...prevState,
    //   {
    //     month: { start: "", end: "" },
    //     year: { start: "", end: "" },
    //   },
    // ]);
  };

  const removeItem = (id) => {
    let target = null;
    dispatch(updateResumeData("education", target, Actions.REMOVE_ITEM, id));

    // setControl((prevState) => {
    //   let arr = [...prevState];
    //   arr.splice(id, 1);
    //   return arr;
    // });
  };

  return (
    <Form type="resume" id="education">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        Education
      </Form.Title>
      {education.length && (
        <>
          {education.map((item, id) => (
            <div key={`edu-${id + 1}`}>
              {education.length > 1 && (
                <div
                  className="position-relative d-flex"
                  style={{ marginBottom: "-3rem" }}
                >
                  <Form.SubHeading
                    marginTop={id === 0 && "1.4rem"}
                    marginBottom="0"
                  >
                    {id + 1}.
                  </Form.SubHeading>
                  {id > 0 && (
                    <Form.Icon onClick={() => removeItem(id)}>
                      <GoTrashcan size={20} />
                    </Form.Icon>
                  )}
                </div>
              )}
              <Form.Group row>
                <Form.Group type="resume" width="45%" marginRight="10%">
                  <Form.Label htmlFor="institutionName">
                    Institution Name
                  </Form.Label>
                  <Form.Input
                    id="institutionName"
                    type="text"
                    placeholder="e.g Fupre"
                    typ="resume"
                    name="institutionName"
                    defaultValue={item.institutionName}
                    onChange={({ target }) => handleChange(target, id)}
                  />
                </Form.Group>
                <Form.Group width="45%">
                  <Form.Label htmlFor="fieldOfStudy">Field of Study</Form.Label>
                  <Form.Input
                    id="fieldOfStudy"
                    type="text"
                    placeholder="e.g Engineering"
                    typ="resume"
                    name="fieldOfStudy"
                    defaultValue={item.fieldOfStudy}
                    onChange={({ target }) => handleChange(target, id)}
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
                    name="country"
                    defaultValue={item.country}
                    onChange={({ target }) => handleChange(target, id)}
                  />
                </Form.Group>
                <Form.Group width="45%">
                  <Form.Label htmlFor="fieldOfStudy">City</Form.Label>
                  <Form.Input
                    id="city"
                    type="text"
                    placeholder="e.g Effurun"
                    typ="resume"
                    name="city"
                    defaultValue={item.city}
                    onChange={({ target }) => handleChange(target, id)}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group showOnlyOnLargeViewPort>
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#216DE0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Form.Label style={{ marginRight: "auto" }}>
                    Time Period
                  </Form.Label>
                  <input type="checkbox" style={{ margin: ".4rem" }} />
                  Currently study here
                </span>
                <Form.Group row>
                  <Form.Group row width="45%">
                    <div
                      style={{
                        width: "45%",
                        marginRight: "10%",
                        position: "relative",
                      }}
                    >
                      <Form.InputDropdown
                        dropdownElements={monthsDropdown}
                        typ="resume"
                        name="start"
                        data-category="month"
                        defaultValue={item.month.start}
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
                    <div style={{ width: "45%", position: "relative" }}>
                      <Form.InputDropdown
                        dropdownElements={yearsDropdown}
                        typ="resume"
                        name="start"
                        data-category="year"
                        defaultValue={item.year.start}
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
                  <div
                    style={{ width: "10%" }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <MdRemove size={29} />
                  </div>
                  <Form.Group row width="45%" marginTop="0">
                    <div
                      style={{
                        width: "45%",
                        marginRight: "10%",
                        position: "relative",
                      }}
                    >
                      <Form.InputDropdown
                        dropdownElements={monthsDropdown}
                        typ="resume"
                        name="end"
                        data-category="month"
                        defaultValue={item.month.end}
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
                    <div style={{ width: "45%", position: "relative" }}>
                      <Form.InputDropdown
                        dropdownElements={yearsDropdown}
                        typ="resume"
                        name="end"
                        data-category="year"
                        defaultValue={item.year.end}
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
              </Form.Group>
              <Form.Group showOnlyOnSmallViewPort>
                <Form.Label>Time Period</Form.Label>
                <span
                  style={{
                    color: "#216DE0",
                    marginBottom: ".4rem",
                    fontSize: "1.12rem",
                  }}
                >
                  From
                </span>
                <Form.Group style={{ flexDirection: "row" }}>
                  <div
                    style={{
                      width: "45%",
                      marginRight: "10%",
                      position: "relative",
                    }}
                  >
                    <Form.InputDropdown
                      dropdownElements={monthsDropdown}
                      typ="resume"
                      name="start"
                      defaultValue={item.month.start}
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
                  <div style={{ width: "45%", position: "relative" }}>
                    <Form.InputDropdown
                      dropdownElements={yearsDropdown}
                      typ="resume"
                      name="start"
                      defaultValue={item.year.start}
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
                <span
                  style={{
                    color: "#216DE0",
                    marginBottom: ".4rem",
                    marginTop: ".5rem",
                    fontSize: "1.12rem",
                  }}
                >
                  To
                </span>
                <Form.Group style={{ flexDirection: "row" }} marginTop="0">
                  <div
                    style={{
                      width: "45%",
                      marginRight: "10%",
                      position: "relative",
                    }}
                  >
                    <Form.InputDropdown
                      dropdownElements={monthsDropdown}
                      typ="resume"
                      name="end"
                      defaultValue={item.month.end}
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
                  <div style={{ width: "45%", position: "relative" }}>
                    <Form.InputDropdown
                      dropdownElements={yearsDropdown}
                      typ="resume"
                      name="end"
                      defaultValue={item.year.end}
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
              <Form.Group type="resume" marginBottom="2rem">
                <Form.Label htmlFor="info">Other Information</Form.Label>
                <Form.TextArea
                  id="info"
                  placeholder=""
                  height="12rem"
                  typ="resume"
                  name="otherInfo"
                  defaultValue={item.otherInfo}
                  onChange={({ target }) => handleChange(target, id)}
                />
              </Form.Group>
            </div>
          ))}
          <div className="d-flex justify-content-end">
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
        </>
      )}
      <div className="d-flex">
        <Form.Button
          type="submit"
          form="personal-info"
          typ="resume"
          href={ROUTES.PERS_INFO}
          outline="true"
        >
          Previous Section
        </Form.Button>
        <Form.Button
          type="submit"
          form="personal-info"
          position="right"
          typ="resume"
          href={ROUTES.WORK_EXP}
        >
          Next Section
        </Form.Button>
      </div>
    </Form>
  );
}
