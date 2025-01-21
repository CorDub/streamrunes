import { useEffect, useState } from 'react';
import QueueElement from './QueueElement';

function Queue() {
  const jwtToken = import.meta.env.VITE_JWT;
  const channelId = import.meta.env.VITE_CHANNEL_ID;
  const responseExample = [
    {
      "data": {
        "username": "Toy Bosco",
        "amount": 33,
        "message": "",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4cebcca14be8",
      "type": "merch",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-06T01:28:27.648Z"
    },
    {
      "data": {
        "username": "Hellen Rohan",
        "amount": 28,
        "message": "",
        "tier": "2000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c2d6ea14b81",
      "type": "cheer",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-06T01:03:03.148Z"
    },
    {
      "data": {
        "username": "Katelynn Runolfsson V",
        "amount": 43,
        "message": "Hell yeah here we go, this is the best!",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4cd73da14c0c",
      "type": "subscriber",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T19:59:50.002Z"
    },
    {
      "data": {
        "username": "Pinkie Lowe",
        "amount": 45,
        "message": "",
        "tier": "prime",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c7a54a14cf5",
      "type": "cheer",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T17:50:59.294Z"
    },
    {
      "data": {
        "username": "Velma Langosh",
        "amount": 8,
        "message": "",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c2ae4a14b68",
      "type": "raid",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T17:32:09.468Z"
    },
    {
      "data": {
        "username": "Amya Kilback",
        "amount": 35,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c49b2a14c65",
      "type": "raid",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T16:12:40.253Z"
    },
    {
      "data": {
        "username": "Rosemary Beatty",
        "amount": 22,
        "message": "",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c0ddaa14bcd",
      "type": "redemption",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T14:16:44.503Z"
    },
    {
      "data": {
        "username": "Emma O'Connell PhD",
        "amount": 8,
        "message": "",
        "tier": "prime",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c18b5a14d1b",
      "type": "tip",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T14:01:16.581Z"
    },
    {
      "data": {
        "username": "Halie Hamill",
        "amount": 20,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c78efa14b65",
      "type": "merch",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T13:58:26.849Z"
    },
    {
      "data": {
        "username": "Gretchen Koepp",
        "amount": 6,
        "message": "",
        "tier": "2000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4cf882a14c15",
      "type": "merch",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T12:02:09.516Z"
    },
    {
      "data": {
        "username": "Kayli Greenholt",
        "amount": 37,
        "message": "",
        "tier": "prime",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c3c2da14bb8",
      "type": "host",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T10:21:32.894Z"
    },
    {
      "data": {
        "username": "Aniyah Cronin",
        "amount": 2,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c0e5ea14ce8",
      "type": "merch",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T08:01:05.618Z"
    },
    {
      "data": {
        "username": "Chester Beer",
        "amount": 39,
        "message": "",
        "tier": "prime",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c02daa14bc3",
      "type": "cheer",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-05T03:55:39.572Z"
    },
    {
      "data": {
        "username": "Jeramy Stark V",
        "amount": 21,
        "message": "",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c8737a14beb",
      "type": "merch",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T17:33:30.369Z"
    },
    {
      "data": {
        "username": "Augustus Crona DVM",
        "amount": 9,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c6e75a14c86",
      "type": "tip",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T17:16:39.223Z"
    },
    {
      "data": {
        "username": "Max Jakubowski",
        "amount": 11,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c719ea14b9e",
      "type": "host",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T16:06:41.439Z"
    },
    {
      "data": {
        "username": "Junius Tremblay",
        "amount": 3,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c3caba14c55",
      "type": "follow",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T16:03:53.523Z"
    },
    {
      "data": {
        "username": "Kali Swift",
        "amount": 3,
        "message": "",
        "tier": "prime",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c3ccca14d30",
      "type": "tip",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T15:28:19.542Z"
    },
    {
      "data": {
        "username": "Patrick Kohler",
        "amount": 19,
        "message": "",
        "tier": "2000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c2d71a14c28",
      "type": "redemption",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T14:37:28.669Z"
    },
    {
      "data": {
        "username": "Sydni Kemmer MD",
        "amount": 19,
        "message": "",
        "tier": "2000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c347ea14d0e",
      "type": "tip",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T09:50:17.756Z"
    },
    {
      "data": {
        "username": "Jordi Johns",
        "amount": 3,
        "message": "",
        "tier": "prime",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c486ca14b7f",
      "type": "redemption",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-04T01:34:12.037Z"
    },
    {
      "data": {
        "username": "Mr. Rachael Bergstrom",
        "amount": 45,
        "message": "",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c2001a14c7f",
      "type": "host",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-03T23:46:26.492Z"
    },
    {
      "data": {
        "username": "Osbaldo Medhurst",
        "amount": 49,
        "message": "",
        "tier": "2000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4cab54a14c63",
      "type": "merch",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-03T22:02:52.622Z"
    },
    {
      "data": {
        "username": "Emily Russel",
        "amount": 21,
        "message": "",
        "tier": "1000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4cf0f0a14c21",
      "type": "host",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-03T19:12:54.925Z"
    },
    {
      "data": {
        "username": "Marco Keeling",
        "amount": 35,
        "message": "",
        "tier": "3000",
        "avatar": "https://cdn.streamelements.com/static/default-avatar.png"
      },
      "provider": "twitch",
      "_id": "5c09463bde9a4c62d5a14d3d",
      "type": "tip",
      "channel": "5b2e2007760aeb7729487dab",
      "createdAt": "2018-12-03T18:45:38.679Z"
    }
  ]
  const [sifted, setSifted] = useState([]);

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
      .then(response => siftThroughResponse(response))
      .catch(err => console.error(err));

    setTimeout(() => {
      fetchActivities();
    }, 30000);
  }

  // useEffect(() => {
  //   fetchActivities()
  // }, []);

  function siftThroughResponse (response) {
    const siftedNew = [];
    for (let i = 0; i < response.length; i++) {
      if (response[i].type === 'tip' || response[i].type === 'subscriber') {
        siftedNew.push([
          response[i].data.username,
          response[i].data.amount,
          response[i].data.message,
          response[i].type]);
      }
    };
    setSifted([...sifted, ...siftedNew]);
    console.log(sifted);
  }

  useEffect(() => {
    siftThroughResponse(responseExample);
  }, []);

  // console.log(sifted);
  console.log(sifted)

  return (
    <div className="queue">
      {sifted && sifted.map((sift, index) => (
        <div key={index}>
          <QueueElement
            username = {sift[0]}
            amount = {sift[1]}
            message = {sift[2]}
            type = {sift[3]}/>
        </div>
      ))}
    </div>
  )
}

export default Queue;
