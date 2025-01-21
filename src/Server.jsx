import { useEffect } from 'react';

function Server() {
  const jwtToken = import.meta.env.VITE_JWT;
  const channelId = import.meta.env.VITE_CHANNEL_ID;

  function createDate () {
    const unixTimestamp = Date.now()-30000;
    const isoTimestamp = new Date(unixTimestamp).toISOString();
    return isoTimestamp;
  }

  async function fetchActivities () {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwtToken}`}
    };

    fetch(`https://api.streamelements.com/kappa/v2/activities/${channelId}?after=${createDate()}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    setTimeout(() => {
      fetchActivities();
    }, 30000);
  }

  useEffect(() => {
    fetchActivities()
  }, []);
}

export default Server;
