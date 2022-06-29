import styled from 'styled-components'
import { Button, Card } from 'react-bootstrap'

export const MainBtn = styled(Button)`
  background-color: transparent !important;
  color: #64FCD9 !important;
  border-radius: 50%;
  border: none;
  display: flex;
  margin: 0 auto;
  font-size: 22px;
  cursor: pointer;
  &:focus{
    color: #F0F8FF;
    border: none !important ;
    outline: none;
  }
  &:visited{
    color: #F0F8FF;
    border: none !important;
    outline: none;
  }
  &:link {
    border: none !important;
    outline: none !important;
  }
  
  /* visited link */
  &:visited {
    border: none !important;
    color: #00FF00;
  }
  &:active {
    border: none !important;
  }
  
`
export const Centered = styled(Card)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: center;
  margin: 20px 40px;
`
export const RoundPicture = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  display: block;
  width: 50%;
  text-align: center;
  margin: 30px auto;
  
`
export const InfoDoctor = styled.div`

  margin: 20px auto;
  display: block;
  text-align: center;
  
`
export const BtnCrud = styled.button`
  width: 20%;
  height: 26px;
  background: transparent;
  border: none;
  text-align: center;
  margin: 20px auto;
`
export const FooterWrap = styled.div`
  margin: 30px 0 0 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  // background-color: red;
  // color: white;
  text-align: center;
  display: inline;
`

 