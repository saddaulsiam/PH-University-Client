import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';
import { Avatar, Button, Dropdown, Layout, MenuProps } from 'antd';
const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button type="primary" size="large" onClick={() => dispatch(logout())}>
          logout
        </Button>
      ),
    },
  ];
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            paddingRight: 20,
          }}
        >
          <Dropdown menu={{ items }}>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              style={{ backgroundColor: '#154068' }}
            />
          </Dropdown>
        </Header>
        <Content>
          <div style={{ padding: 24 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
