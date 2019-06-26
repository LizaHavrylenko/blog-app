import styled from 'styled-components';

export default styled.div`
  text-align: left;
  form div {
      width: 200px
      display: flex;
      justify-content: space-between;
  }

  form div > * {
    border: 1px solid #CCC;
    padding: 8px;
    border-radius: 3px;
    background-color: white;
  }

  form label {
      display: block;
      margin-bottom: 5px;
  }

  form textarea {
      margin-bottom: 20px;
      min-width: 400px;
      min-height: 60px;
      outline: none;
      border: 1px solid #CCC;
      border-radius: 3px;
      padding: 5px;
  }
`;
