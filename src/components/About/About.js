import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/img.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            I am a Full-stack Developer based in Sri Lanka, with a Graduate
            Diploma in Software Engineering (GDSE) from the Institute of Java
            and Software Engineering (IJSE). Having completed the GDSE program,
            I am currently working as an Associate Software Engineer in the
            industry. My expertise spans both front-end and back-end
            development, allowing me to create comprehensive and efficient
            software solutions.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites(webapps) or mobile apps from
            scratch. The technologies, tools and languages I am familier with
            HTML, CSS, JavaScript, REACT JS, Java EE, Bootstrap,
            REACT-NATIVE,Spring,Node JS, Git and GitHub. Most familier in VS
            Code and Intelij-Idea.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              // href={resume}  TODO
              icon={downloadIcon}
              download="resume-Praveen-Kawshitha"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
