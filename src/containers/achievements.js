import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeData } from "../actions/actions";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import * as Actions from "../constants/actionsTypes";

export default function Achievements() {
  const dispatch = useDispatch();
  const achievements = useSelector(state => state.resumeData.achievements);

  const handleChange = (target, id) => {
    dispatch(updateResumeData("achievements", target, Actions.ACHIEVEMENTS, id));
  }

  const addItem = () => {
    dispatch(updateResumeData("achievements", null, Actions.ADD_ITEM));
  };

  const removeItem = (id) => {
    dispatch(updateResumeData("achievements", null, Actions.REMOVE_ITEM, id))
  };

  return (
    <Form type="resume" id="achievements">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        Achievemnts
      </Form.Title>
      {achievements.length &&
        achievements.map((item, id) => (
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
              <Form.Input 
                type="text" 
                typ="resume" 
                placeholder="e.g Award winner at Microsoft"
                name="achievement" 
                defaultValue={item.achievement}
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
          href={ROUTES.CERT}
          outline="true"
        >
          Previous Section
        </Form.Button>
        <Form.Button
          type="submit"
          form="personal-info"
          position="right"
          typ="resume"
          href={ROUTES.SKILLS}
        >
          Next Section
        </Form.Button>
      </div>
    </Form>
  );
}
