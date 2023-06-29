import styled from '@emotion/styled';

export const SectionName = styled.h1`
  text-transform: uppercase;
`;

export const Container = styled.section`
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 20vw;
  padding: 2rem;
  align-items: center;
  background-color: lightgray;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
