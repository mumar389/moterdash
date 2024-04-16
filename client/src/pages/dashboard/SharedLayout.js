import { Outlet } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Navbar, BigSidebar, SmallSidebar } from '../../components';
import styled from "styled-components";

const Main = styled.main`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const DashboardPage = styled.div`
  padding: 20px;
`;

const SharedLayout = () => {
  return (
    <Wrapper>
      <Main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <Content>
          <Navbar />
          <DashboardPage>
            <Outlet />
          </DashboardPage>
        </Content>
      </Main>
    </Wrapper>
  );
};

export default SharedLayout;
