import { useEffect, useState } from 'react';

const useWs = (url) => {
  const [ wsMessages, setWsMessages] = useState([{data:"abc", key: 1},{data:"def", key: 2}]);
  const [ socket, setSocket ] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    
    ws.onopen = () => {
      console.log('connected to ' + url);
    };

    ws.onmessage = (msg) => {
      let parseMessage = {}
      try {
				console.log(msg.data);
        parseMessage = JSON.parse(msg.data);
				parseMessage.key = Date.now();
			} catch  (error) {
				parseMessage = {
					key: Date.now(),
					data: error.toString()	
				}
			}
			console.log(parseMessage);
    	setWsMessages((oldMessages) => [...oldMessages, parseMessage]);
    };

    ws.onerror = (e) => {
      console.error('WebSocket error', e);
    };

    ws.onclose = (e) => {
      console.log('WebSocket connection closed', e);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [url, setWsMessages]);

  const sendWsMessage = (message) => {
    if (socket.readyState === WebSocket.OPEN) {
        const jsonMessage = JSON.stringify(message);
        console.log(jsonMessage);
        socket.send(jsonMessage.toString());
    }
};
  return { wsMessages, sendWsMessage };
};

export default useWs;
