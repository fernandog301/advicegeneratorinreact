import React from 'react';
import { Card } from 'react-bootstrap';

interface AdviceCardProps {
  advice: string;
  id: number;
}

const AdviceCard: React.FC<AdviceCardProps> = ({ advice, id }) => {
  return (
    <Card>
      <Card.Body className="py-5 m-5" style={{background: `##313a49`}}>       
         <Card.Text style={{color: `#4cda98`}}>A D V I C E # {id && id}</Card.Text>
        <Card.Text><h1 style={{color: `##cce1e6`}}>"{advice && advice}"</h1></Card.Text>

      </Card.Body>
    </Card>
  );
};

export default AdviceCard;