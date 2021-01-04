import React, { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Languages() {
  const [control, setControl] = useState([
    { achievement: "" },
    { achievement: "" },
    { achievement: "" },
  ]);

  const addItem = () => {
    setControl((prevState) => [...prevState, { achievement: "" }]);
  };

  const removeItem = (id) => {
    setControl((prevState) => {
      let arr = [...prevState];
      arr.splice(id, 1);
      return arr;
    });
  };

  return (
    <Form type="resume" id="achievements">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        Languages
      </Form.Title>
      {control.length &&
        control.map((item, id) => (
          <div key={`cert-${id + 1}`}>
            <div className="d-flex justify-content-end">
              <Form.Icon
                onClick={() => removeItem(id)}
                noPosition
                marginBottom="-1.2rem"
                marginTop="1rem"
              >
                <GoTrashcan size={20} />
              </Form.Icon>
            </div>
            <Form.Group>
              <Form.Input type="text" typ="resume" placeholder="e.g English" />
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
          href={ROUTES.WORK_EXP}
          outline="true"
        >
          Previous Section
        </Form.Button>
        <Form.Button
          type="submit"
          form="personal-info"
          position="right"
          typ="resume"
          href={ROUTES.CERT}
        >
          Next Section
        </Form.Button>
      </div>
    </Form>
  );
}
