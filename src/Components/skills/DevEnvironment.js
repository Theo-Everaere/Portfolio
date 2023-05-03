import SkillsContainer from "./SkillsContainer";
import { DEV_ENVIRONMENT } from "./SKILLS_DATA";

const DevEnvironment = () => {
  return <SkillsContainer title="IDE" skills={DEV_ENVIRONMENT} />;
};

export default DevEnvironment;
