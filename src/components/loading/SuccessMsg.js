import { useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../button/StyledButton';
import doodle from '../../assets/img/doodle.png';

const StyledSuccessMsg = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const MsgContainer = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.fontColor};
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  text-align: center;
  z-index: 4;

  img {
    height: calc(15rem + 5vw);
    justify-self: center;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px) {
    img {
      height: 50vw;
    }

    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const SuccessMsg = ({ setShowMsg }) => {
  const background = useRef();

  const handleClick = (e) => {
    if (e.target === background.current) { setShowMsg(false); }
  };

  return (
    <StyledSuccessMsg ref={background} onClick={handleClick}>
      <MsgContainer>
        <img src={doodle} alt='success doodle' />

        <div>
          <h4>Thanks for reaching out!</h4>
          <p>I'll get back to you as soon as I can.</p>
        </div>
        
        <StyledButton type='button' onClick={() => setShowMsg(false)}>Close</StyledButton>
      </MsgContainer>
    </StyledSuccessMsg>
  );
};

export default SuccessMsg;
