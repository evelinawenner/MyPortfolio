import styled from "styled-components";

export const AddEntryContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  .label {
    margin-top: 20px;
    margin-bottom: 8px;
  }

  .name-input {
    font-family: Lato, sans-serif;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .message-input {
    font-family: Lato, sans-serif;
    border: none;
    border-radius: 5px;
    height: 150px;
    padding: 10px;
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
