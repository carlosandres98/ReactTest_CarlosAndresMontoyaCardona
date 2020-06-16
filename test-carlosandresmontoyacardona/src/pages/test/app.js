import React from "react";
import List from "./list";
import Form from "./form";

const Application = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new movie</h2>
      <Form />
    </div>
  </>
);

export default Application;