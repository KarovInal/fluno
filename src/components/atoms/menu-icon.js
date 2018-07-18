import styled from 'styled-components';

const MenuIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${ ({ icon }) => icon });
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-right: 10px;
`;

export default MenuIcon;
