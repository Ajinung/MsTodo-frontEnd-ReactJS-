import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineWbSunny } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import MoreDetails from "./MoreDetails/MoreDetails";

const Tasks = () => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Two>
          <MydayContainer>
            <TitleDate>
              <Left>
                <First>
                  <span>
                    <BiCalendar />
                  </span>
                  <p>Tasks</p>
                </First>
              </Left>
            </TitleDate>
            <DataField>
              <AddTask>
                <div>
                  <Radio type="radio" name="" id="" />
                  <Input type="text" name="" id="" placeholder="Add a task" />
                </div>
              </AddTask>
              <DueDate>
                <div>
                  <Calender>
                    <p>
                      <BiCalendar />
                    </p>
                  </Calender>
                  <Button disabled>Add</Button>
                </div>
              </DueDate>
            </DataField>

            {/* Task to map */}
            <TaskField onClick={showSideBar}>
              <AddTask2>
                <CreatedTask>
                  <input type="radio" name="" id="" />
                  <AddedTask>
                    <h2>My new Task</h2>
                    <p>Tasks</p>
                  </AddedTask>
                </CreatedTask>
                <ImportantTask>
                  <AiFillStar />
                </ImportantTask>
              </AddTask2>
            </TaskField>
          </MydayContainer>
        </Two>
        {show ? (
          <Three>
            <MoreDetails />
          </Three>
        ) : null}
      </Container>
    </div>
  );
};

export default Tasks;

const AddedTask = styled.div`
  margin-left: 15px;
  color: #000000eb;
  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 13px;
  }
  p {
    margin: 0;
    font-size: 11px;
  }
`;

const TaskField = styled.div`
  width: 100%;
  margin-top: 15px;
  height: 7vh;
  background-color: #eff6fc;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0px 0px 5px 5px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const CreatedTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 50px;
    width: 20px;

    ::placeholder {
      background-color: #2564cf;
    }
  }
`;

const ImportantTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
  color: #2564cf;

  :hover {
    cursor: pointer;
  }
`;
const Calender = styled.div`
  p {
    margin-left: 5px;
    font-size: 18px;
    color: #00000097;
  }
`;

const Button = styled.button`
  padding: 8px 20px;
  background-color: #fff;
  border: none;
  color: #00000093;

  :hover {
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  height: 70%;
  width: 100%;
  flex: 1;
  border: 0;
  outline: 0;
  margin-left: 15px;
  margin-top: 3px;
  color: #000000e1;

  ::placeholder {
    color: #2564cf;
  }
`;
const Radio = styled.input`
  height: 50px;
  width: 17px;

  ::placeholder {
    color: #2564cf;
  }
`;

const DueDate = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0px 0px 5px 5px;
  div {
    width: 98%;
    height: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AddTask = styled.div`
  width: 100%;
  height: 7vh;
  background-color: #fff;
  border-bottom: 1px solid #e7e7e7;
  border-radius: 5px 5px 0px 0px;

  div {
    width: 98%;
    height: 90%;
    margin: auto;
    display: flex;
    align-items: center;
  }
`;
const AddTask2 = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataField = styled.div`
  width: 100%;
`;

const First = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  color: #2564cf;

  p {
    margin: 0;
    margin-left: 10px;
  }
  span {
    margin: 0;
    /* margin-top: 3px; */
    font-size: 25px;
  }
`;

const Second = styled.div`
  p {
    margin: 0;
    font-size: 12px;
    color: #0000008f;
  }
`;

const Left = styled.div``;

const TitleDate = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  margin-top: 5px;
`;

const MydayContainer = styled.div`
  width: 95%;
  height: 87%;
  margin-top: 80px;
  transition: all 0.2s ease;
`;
const Two = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: all 0.2s ease;
`;

const Three = styled.div`
  width: 400px;
  height: 100%;
  transition: all 0.2s ease;
`;
const Container = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
