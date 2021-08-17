import styled from "styled-components";

export default function InputFild({
  type,
  value,
  onChange,
  readOnly,
  placeholder,
}) {
  return (
    <Container
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}

const Container = styled.input`
  padding: 20px;
  text-align: center;
  font-size: 20px;
  background-color: lightgray;
  border: 1px solid lightgray;
`;
