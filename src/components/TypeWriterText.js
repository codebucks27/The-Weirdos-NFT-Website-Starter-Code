import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width:80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
  text-transform: uppercase;
  font-family: "Akaya Telivigala", cursive;
 }
.text-1{
    color: blue;
 }
.text-2{
    color: orange;
 }
.text-3{
    color: red;
 }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;


  `
const TypeWriterText = () => {
  return (
    <>
    <Title>
      Discover the new way to learn in community 
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('at last count 466 people learning')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>

</Title>
<SubTitle>Be your teacher, I'm self-taught.</SubTitle>
</>
  );
};

export default TypeWriterText;



