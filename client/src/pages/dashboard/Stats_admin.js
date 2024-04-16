import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, Loading, ChartsContainer } from '../../components';
import Faults from './faults';
import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import dashboardImage from "../../assets/images/dashboard-image.jpg"; // Import your image

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  flex: 0 0 auto;
  width: ${(props) => (props.xs ? `${(props.xs / 12) * 100}%` : "100%")};
  padding: 8px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DashboardImage = styled.img`
  max-width: 100%;
  min-width: 100%;
  height: auto;
`;

const Stats_admin = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  const [tableData, setTableData] = useState([]);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    fetchTableData();
    showStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTableData = async () => {
    try {
      const response = await axios.get('/api/v1/motor');
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  useEffect(() => {
    fetch('/api/v1/auth/getCurrentUser')
      .then(response => response.json())
      .then(data => {
        setUserType(data.user.userType);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      {userType === 'Admin' && <h1>Hello Admin</h1>}
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
      <Container>
        <Item xs={12}>
          <ImageContainer>
            <DashboardImage src={dashboardImage} alt="Dashboard" />
          </ImageContainer>
        </Item>
        <Item xs={12}>
          <Faults data={tableData} />
        </Item>
      </Container>
    </>
  );
};

export default Stats_admin;
