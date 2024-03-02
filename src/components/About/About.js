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
import resume from "../../assets/cv-P.K.Fernando.pdf";

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
            My name is Praveen Kawshitha Fernando, currently pursuing Graduate Diploma in Software Engineering(GDSE)
            in Institute of Java and Software Engineering(IJSE).
            I am a Full-stack developer in Sri-lanka.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites or web apps from
            scratch. The technologies, tools and languages I am familier with
            HTML, CSS, JavaScript, REACT JS, Java EE,
            Bootstrap, REACT-NATIVE,Spring,Node JS, Git and GitHub.
            Most familier in VS Code and Intelij-Idea.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
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
