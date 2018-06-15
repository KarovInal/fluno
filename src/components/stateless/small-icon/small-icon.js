import styled from 'styled-components';

const SmallIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${ ({img}) => img }");
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default SmallIcon;
