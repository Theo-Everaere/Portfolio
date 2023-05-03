import React from "react";
import SkillsContainer from "./SkillsContainer";
import { FRONT_SKILLS } from "./SKILLS_DATA";

const Frontend = () => {
  return <SkillsContainer title="Frontend" skills={FRONT_SKILLS} />;
};

export default Frontend;
