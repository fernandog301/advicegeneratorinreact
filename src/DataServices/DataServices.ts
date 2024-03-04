const fetchAdvice = async () => {
      const promise = await fetch('https://api.adviceslip.com/advice');
      const  data:AdviceCard = await promise.json();
      return data.slip;
  };
  interface AdviceCard {
        slip: {
            id: number;
            advice: string;
        }
  }

  export default fetchAdvice ;