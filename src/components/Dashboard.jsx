import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
	const [myrepos, setMyRepos] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const response = await axios.get(
			`https://api.github.com/users/${id}/repos`
		);
		setMyRepos(await response.data);
		console.log(response.data);
	};

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
