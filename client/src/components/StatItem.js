import styled from 'styled-components';

// Define styles for the Wrapper component using styled-components
const Wrapper = styled.div`
  background-color: ${props => props.bcg || 'transparent'};
  color: ${props => props.color || '#000'};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .count {
      font-size: 2rem;
      font-weight: bold;
      margin-right: 10px;
    }

    .icon {
      font-size: 2rem;
    }
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

// StatsItem component
const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
}

export default StatsItem;
