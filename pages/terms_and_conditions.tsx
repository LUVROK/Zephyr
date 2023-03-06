import React from "react";
import { terms_and_conditions_obj } from "../utils/text";
import PolicyPage from "../components/policyPage/policyPage";

function Terms_and_conditions() {
  return <PolicyPage contentObject={terms_and_conditions_obj} />;
}

export default Terms_and_conditions;
