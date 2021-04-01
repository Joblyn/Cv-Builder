import React from "react";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { GoTrashcan } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeData } from "../actions/actions";
import * as Actions from "../constants/actionsTypes";

export default function Reference() {
  const dispatch = useDispatch();
  const references = useSelector(state => state.resumeData.references);

  const handleChange = (target, id) => {
    dispatch(updateResumeData("references", target, Actions.REFERENCES, id));
  };

  const addForm = () => {
    dispatch(updateResumeData("references", null, Actions.ADD_ITEM));
  };

  const removeItem = (id) => {
    dispatch(updateResumeData("references", null, Actions.REMOVE_ITEM, id));
  };

  return (
    <Form type="resume" id="references">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        References
      </Form.Title>
      {references.length && (
        <>
          {references.map((item, id) => (
            <div key={`ref-${id + 1}`}>
              {references.length > 1 && (
                <div
                  className={`position-relative d-flex ${id > 0 && 'mt-5'}`}
                  style={{ marginBottom: "-3rem" }}
                >
                  <Form.SubHeading
                    marginBottom="0"
                    marginTop={id === 0 && "1.4rem"}
                  >
                    {id + 1}.
                  </Form.SubHeading>
                  {id > 0 && (
                    <Form.Icon onClick={() => removeItem(id)}>
                      <GoTrashcan size={20}/>
                    </Form.Icon>
                  )}
                </div>
              )}
              <Form.Group row>
                <Form.Group type="resume" width="45%" marginRight="10%">
                  <Form.Label htmlFor={`name-${id + 1}`}>
                    Full Name
                  </Form.Label>
                  <Form.Input
                    type="text"
                    placeholder="e.g John Doe"
                    typ="resume"
                    name="fullName"
                    defaultValue={item.fullName}
                    onChange={({ target }) => handleChange(target, id)}
                  />
                </Form.Group>
                <Form.Group type="resume" width="45%">
                  <Form.Label htmlFor={`job-title-${id + 1}`}>
                    Job Title
                  </Form.Label>
                  <Form.Input
                    type="text"
                    placeholder="e.g Product Designer"
                    typ="resume"
                    name="jobTitle"
                    defaultValue={item.jobTitle}
                    onChange={({ target }) => handleChange(target, id)}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group type="resume">
                <Form.Label htmlFor={`email-${id + 1}`}>
                  Email Address
                </Form.Label>
                <Form.Input
                  type="email"
                  placeholder="example@gmail.com"
                  typ="resume"
                  name="email"
                  defaultValue={item.email}
                  onChange={({ target }) => handleChange(target, id)}
                />
              </Form.Group>
              <Form.Group type="resume">
                <Form.Label htmlFor={`phoneNo.-${id + 1}`}>
                  Phone Number
                </Form.Label>
                <Form.Input
                  type="text"
                  placeholder="080 000 000"
                  typ="resume"
                  name="phoneNo"
                  defaultValue={item.phoneNo}
                  onChange={({ target }) => handleChange(target, id)}
                />
              </Form.Group>
              <Form.Group type="resume">
                <Form.Label htmlFor={`location-${id + 1}`}>Location</Form.Label>
                <Form.Input
                  type="text"
                  placeholder="e.g Lagos, Nigeria"
                  typ="resume"
                  name="location"
                  defaultValue={item.location}
                  onChange={({ target }) => handleChange(target, id)}
                />
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
              onClick={addForm}
            >
              + Add Another
            </span>
          </div>
        </>
      )}
      <div className="d-flex">
        <Form.Button
          type="submit"
          form="work-exp"
          typ="resume"
          href={ROUTES.SKILLS}
          outline="true"
        >
          Previous Section
        </Form.Button>
        <Form.Button
          type="submit"
          form="work-exp"
          position="right"
          typ="resume"
          href={ROUTES.PREVIEW_RESUME}
        >
          Finish/View
        </Form.Button>
      </div>
    </Form>
  );
}
