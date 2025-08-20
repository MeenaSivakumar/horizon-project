import styled from "styled-components";
import type { CardProps } from "./Card.types";

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  border:2px solid black;
  padding: 1rem;
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  width:350px;
  height:200px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  margin:auto;
  &:hover {
    background:green;
    border:2px solid yellow;
    color:white;
     transform: translateY(-12px);}
  }

  h3 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0 0 1rem;
    font-size: 0.9rem;
  }
`;

export const Card = ({  title, subtitle, children }: CardProps) => {
  return (
    <>
      <CardContainer>
        {title && <h3>{title}</h3>}
        {subtitle && <p>{subtitle}</p>}
        {children}
      </CardContainer>
    </>
  );
};
