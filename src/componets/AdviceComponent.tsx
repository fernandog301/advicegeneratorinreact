import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import AdviceCard from './AdviceCard';
import fetchAdvice from '../DataServices/DataServices'
import { HiOutLineArrowRight } from 'react-icons/hi';

const AdviceComponent = () => {
  const [advice, setAdvice] = useState<{advice: string, id: number}>();
  const [newAdvice, setNewAdvice]=useState(true);
  
  useEffect(() => {

    const fetchAdvi = async () => {
    const response = await fetchAdvice();
   setAdvice(response);
  };
    fetchAdvi();

  }, [newAdvice]);

   const getNewAdvice = () => {
    setNewAdvice(!newAdvice);
  }

  return (
    <div className="App" style={{ background: `#313a49`}}>
      <Container className="py-5 m-1 d-flex justify-content-center" style={{background: `##313a49`}}>
        
        {advice &&  <AdviceCard advice={advice.advice} id={advice.id} />}
      </Container>
      <button>
        <HiOutLineArrowRight onClick={getNewAdvice}/>
      </button>
    </div>
  );
};

export default AdviceComponent;