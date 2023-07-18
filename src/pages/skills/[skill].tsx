import { useRouter } from "next/router";
 
const SkillsPage = () => {
  const router = useRouter();
  const { skill } = router.query;
 
  return <h1>I am a master in {skill}!</h1>;
};
 
export default SkillsPage;