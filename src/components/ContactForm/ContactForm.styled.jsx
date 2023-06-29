import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  border-radius: 0.25rem;
  background-color: gray;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 3px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 18px;
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 3px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
