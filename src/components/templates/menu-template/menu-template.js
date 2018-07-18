import { Menu } from 'antd';

const MenuTemplate = ({ children, ...props }) => {
  return (
    <Menu { ...props } >
      { children }
    </Menu>
  );
};

export default MenuTemplate;
