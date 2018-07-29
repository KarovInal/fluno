import styled from 'styled-components';

export const CoverCompetitionCardList = styled.div`
  width: 148px;
  height: 108px;
  background-color: #F9FAFA;
  border-radius: 3px;
  background-image: url(${(props) => props.cover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
