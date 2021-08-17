import { useState } from "react";
import styled from "styled-components";
import { getNumberComma, selectionSort, reverseSort } from "utils/common";
import LocaleDateTimer from "components/LocaleDateTimer";
import InputFild from "components/InputFild";

const TIME_OUT = 3000;

export default function App() {
  const [value, setValue] = useState("");
  const [ascValue, setAscValue] = useState("");
  const [descValue, setDescValue] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;
    setValue(getNumberComma(value));
  };

  const handleSort = () => {
    const nums = value
      .split(",")
      .filter((e) => e !== "")
      .map((e) => Number(e));

    const sortResult = selectionSort(nums);
    const sortNums = sortResult.join(",");
    const sortNumsDesc = reverseSort(sortResult).join(",");

    setAscValue(sortNums);
    setTimeout(() => setDescValue(sortNumsDesc), TIME_OUT);
  };

  return (
    <Container>
      <LocaleDateTimer />
      <InputFild
        type="text"
        onChange={handleInput}
        value={value}
        placeholder="숫자 및 , 만 입력 ex) 1,2,3,4"
      />
      <Wrapper>
        <Button onClick={handleSort}>Start</Button>
      </Wrapper>
      <InputFild type="text" value={ascValue} readOnly />
      <InputFild type="text" value={descValue} readOnly />
      <LocaleDateTimer locales="en-US" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px;
  width: 200px;
  cursor: pointer;
  font-size: 20px;
`;
