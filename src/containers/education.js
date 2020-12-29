import React from "react";
import { Form } from "../components";

export default function Education() {
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
          <input type="checkbox" />
          Currently study here
        </span>
      </Form.Group>
    </Form>
  );
}
