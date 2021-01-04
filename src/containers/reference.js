import React, { useState } from "react";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { GoTrashcan } from "react-icons/go";

export default function Reference() {
  const [control, setControl] = useState([
    {
      name: "",
      job: "",
    },
  ]);

  const addForm = () => {
    setControl((prevState) => [
      ...prevState,
      {
        name: "",
        job: "",
      },
    ]);
  };

  const removeItem = (id) => {
    setControl((prevState) => {
      let arr = [...prevState];
      arr.splice(id, 1);
      return arr;
    });
  };

  return (
    <Form type="resume" id="references">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        References
      </Form.Title>
      {control.length && (
        <>
          {control.map((ref, id) => (
            <div key={`ref-${id + 1}`}>
              {control.length > 1 && (
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
                    Reference Name
                  </Form.Label>
                  <Form.Input
                    id={`name-${id + 1}`}
                    type="text"
                    placeholder="e.g John Doe"
                    typ="resume"
                  />
                </Form.Group>
                <Form.Group type="resume" width="45%">
                  <Form.Label htmlFor={`job-title-${id + 1}`}>
                    Job Title
                  </Form.Label>
                  <Form.Input
                    id={`job-title-${id + 1}`}
                    type="text"
                    placeholder="e.g Product Designer"
                    typ="resume"
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group type="resume">
                <Form.Label htmlFor={`email-${id + 1}`}>
                  Email Address
                </Form.Label>
                <Form.Input
                  id={`email-${id + 1}`}
                  type="email"
                  placeholder="example@gmail.com"
                  typ="resume"
                />
              </Form.Group>
              <Form.Group type="resume">
                <Form.Label htmlFor={`phoneNo.-${id + 1}`}>
                  Phone Number
                </Form.Label>
                <Form.Input
                  id={`phoneNo.-${id + 1}`}
                  type="text"
                  placeholder="080 000 000"
                  typ="resume"
                />
              </Form.Group>
              <Form.Group type="resume">
                <Form.Label htmlFor={`location-${id + 1}`}>Location</Form.Label>
                <Form.Input
                  id={`location-${id + 1}`}
                  type="text"
                  placeholder="e.g Lagos, Nigeria"
                  typ="resume"
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
        >
          Finish
        </Form.Button>
      </div>
    </Form>
  );
}
