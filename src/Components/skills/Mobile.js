import React from "react";
import SkillsContainer from "./SkillsContainer";
import { MOBILE_SKILLS } from "./SKILLS_DATA";

const Mobile = () => {
  return <SkillsContainer title="Mobile" skills={MOBILE_SKILLS} />;
};

export default Mobile;
