import { useEffect } from 'react';

function Server() {
  const jwtToken = import.meta.env.VITE_JWT;

  async function connectToAPI () {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwtToken}`}
    };

    fetch('https://api.streamelements.com/kappa/v2/activities/channel', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    }

    useEffect(() => {
      connectToAPI()
    }, []);

}

export default Server;
