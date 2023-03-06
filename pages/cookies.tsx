import React from "react";
import { cookies_obj } from "../utils/text";
import PolicyPage from "../components/policyPage/policyPage";

function Cookies() {
  return <PolicyPage contentObject={cookies_obj} />;
}

export default Cookies;
