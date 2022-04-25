import styled from "styled-components";

export const AddEntryContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
  }

  .label {
    margin-top: 30px;
    margin-bottom: 8px;
  }

  .name-input {
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 500px;
  }

  .message-input {
    border: none;
    border-radius: 5px;
    height: 150px;
  }

  .submit-button {
    border: none;
    border-radius: 5px;
    background-color: #aa8465;
    color: white;
    padding: 8px;
    margin-top: 8px;
    width: 70px;
  }
`;
