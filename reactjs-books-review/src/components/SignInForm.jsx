import React from "react";
import { Col } from "antd";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrap = styled(Col)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
`;

const Titie = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  color: #610c29;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 0.2;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 30px 0px;
`;

const Bottom = styled.div`
  flex: 0.5;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  size: 14px;
  color: black;
`;

const SignInButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  background-color: rosybrown;
  color: black;
  margin-top: 10px;
`;

const BottomRow = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
`;

const BottomButton = styled.button`
  height: 30px;
  padding: 0 20px;
  background-color: transparent;
  border: 1px rosybrown solid;
`;

const StyledTextInput = styled.input`
  outline: none;
  border: 1px solid brown;
  height: 30px;
  &:focus {
    border: 1px solid orange;
  }
`;

class SigninForm extends React.Component {
  _emailInput = React.createRef();
  _passwordInput = React.createRef();

  onSignin = () => {
    const { history } = this.props;
    const email = this._emailInput.current.value;
    const password = this._passwordInput.current.value;
    if (!email) {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요!");
      return;
    }
    history.replace("/");
  };

  render() {
    return (
      <Wrap>
        <Titie>LOG IN. START SEARCHING</Titie>
        <Body>
          <Label htmlFor="email-input">
            Email <span style={{ color: "red" }}>*</span>
          </Label>
          <StyledTextInput
            ref={this._emailInput}
            required
            id="email-input"
            autoFocus
            type="email"
          />
          <Label htmlFor="password-input">
            Password <span style={{ color: "red" }}>*</span>
          </Label>
          <StyledTextInput
            ref={this._passwordInput}
            required
            id="password-input"
            type="password"
          />
          <SignInButton onClick={this.onSignin}>SIGN IN</SignInButton>
        </Body>
        <Bottom>
          <BottomRow>
            아이디를 새로 만드시겠습니까?
            <BottomButton>회원가입</BottomButton>
          </BottomRow>
          <BottomRow>
            비밀번호를 잊어버리셨습니까?
            <BottomButton>비밀번호 찾기</BottomButton>
          </BottomRow>
        </Bottom>
      </Wrap>
    );
  }
}

export default withRouter(SigninForm);