import { styled } from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
    box-sizing: border-box;
    // margin: 40px 0 0;
    padding: 20px 0 28px;
    width: 396px;
`
export const Form = styled.form`
  display:flex;
  flex-direction: column;
`

export const Input = styled.input`
  margin: 10px auto;
  color:  "#BF4F74";
  border: 0.1px solid gray;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
`;


export const Button = styled.button`
    background-color: #0866ff;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    padding: 0 16px;
    width: 332px;
    color: white;
    margin: 10px auto;
`
export const Link = styled.a`
  text-decoration:none;
  color:#0866ff;
  text-align:center;
    border-bottom: 1px solid #dadde1;
    padding-bottom:20px;
    margin: 16px; 
`
export const CreateButton = styled.button`
background-color: #42b72a;
border: none;
border-radius: 6px;
padding:0px,16px;
cursor: pointer;
text-decoration: none;
font-size: 20px;
line-height: 48px;
width: 50%;
color: white;
margin: 10px auto;
font-weight:17px;
`