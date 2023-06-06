import { useMyContext } from "../context/MyProvider";

export const WsClient = () => {
	const { wsMessages } = useMyContext();
	console.log(wsMessages);
	return (
		<>
		<h1>Websocket</h1>
			{wsMessages.map((item) => (
				<p key={item.key}>{item.key}, {item.data}</p>
			))}
		</>
	);
}
