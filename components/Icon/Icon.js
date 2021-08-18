import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillBehanceCircle } from 'react-icons/ai';

const Icon = (props) => {
  const svg = {
    linkedin: <FaLinkedin {...props} />,
    github: <FaGithub {...props} />,
    behance: <AiFillBehanceCircle {...props} />,
  };

  return svg[props.icon] || null;
};
export default Icon;
