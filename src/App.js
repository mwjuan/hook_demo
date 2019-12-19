import React, { useState, useContext, useReducer, useEffect } from 'react';
import './App.css';

const AppContext = React.createContext({});

const Navbar = () => {
	const { name } = useContext(AppContext);
	return (
		<div>
			<p>Navbar</p>
			<p>{name}</p>
		</div>
	)
}

const Messages = () => {
	const { name } = useContext(AppContext);
	return (
		<div>
			<p>Messages</p>
			<p>{name}</p>
		</div>
	)
}

const reducer = (state, action) => {
	switch (action.type) {
		case ('up'):
			return {
				state,
				count: state.count + 1
			}
		default:
			return state;
	}
}

const Person = ({ id }) => {
	const [person, setPerson] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://swapi.co/api/people/${id}/`)
			.then(response => response.json())
			.then(data => {
				setPerson(data);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<p>You're viewing: {person.name}</p>
			<p>Height: {person.height}</p>
			<p>Mass: {person.mass}</p>
		</div>
	);
}

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const [btnText, setBtnText] = useState('Click me: count = ' + state.count);
	const [id, setId] = useState('1');

	function handleClick() {
		dispatch({ type: 'up' });
		return setBtnText('Thanks,been clicked! count = ' + state.count);
	}

	return (
		<div className="App">
			<h1>useState()：状态钩子</h1>
			<button onClick={handleClick}>{btnText}</button>
			<hr />
			<h1>useContext()：共享状态钩子</h1>
			<AppContext.Provider value={{
				name: state.count
			}}>
				<div style={{ display: 'flex', flexDirection: 'rows', justifyContent: 'center' }}>
					<div style={{ marginRight: 10 }}>
						<Navbar />
					</div>
					<Messages />
				</div>
			</AppContext.Provider>
			<hr />
			<h1>useReducer()：action 钩子</h1>
			<div>
				<p>Count: {state.count}</p>
			</div>
			<hr />
			<h1>useEffect()：副作用钩子</h1>
			<div>
				<Person id={id} />
				<div>
					id:
					<button style={{ marginRight: 10 }} onClick={() => setId('1')}>1</button>
					<button onClick={() => setId('2')}>2</button>
				</div>
			</div>
		</div>
	);
}

export default App;
