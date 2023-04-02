import React from 'react'
import styled from "@emotion/styled";
import { useEffect } from 'react';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 20vw;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

const CardBody = styled.p`
  font-size: 16px;
  margin: 0;
`;

export default function Results({ data, query }) {

    useEffect(() => { 

    }, [])
    const filteredData = data.filter(d =>
        d.toLowerCase().includes(query.toLowerCase())
      );
    return (
        <CardContainer>
            {filteredData.map((d) =>
                <CardWrapper key={Math.floor(Math.random() * 10000000)}>
                    <CardTitle key={Math.floor(Math.random() * 10000000)}>{d}</CardTitle>
                    <CardBody key={Math.floor(Math.random() * 10000000)}>Some data about the character</CardBody>
                </CardWrapper>

            )}
        </CardContainer>
    )
}
