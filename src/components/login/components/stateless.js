import styled from 'styled-components';

export const AuthLabel = styled.p`
  font-style: normal;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  margin-bottom: 16px;
`;

export const SocialLoginIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  background: url("${ props => props.icon }");
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 50%;
`;

export const SimpleLine = styled.div`
  width: ${ ({ width }) => width };
  border-bottom: solid #C3CCC8 1px;
`;

export const SimpleLink = styled.a`
  font-style: normal;
  font-size: 14px;
  color: #7D8280;
  text-align: ${ ({textAlign}) => textAlign || 'left' };
  float: ${ ({float}) => float || 'none' };
`;

export const SimpleLabel = styled.p`
  font-style: normal;
  font-size: 14px;
  color: #7D8280;
  text-align: ${ ({textAlign}) => textAlign || 'left' };
  float: ${ ({float}) => float || 'none' };
`;

export const LoignButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #FF1649;
  color: #FFFCFC;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  font-style: bold;
  cursor: pointer;
`;
