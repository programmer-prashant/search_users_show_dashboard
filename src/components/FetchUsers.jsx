import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FetchUsers = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await axios.get('https://api.github.com/users');
		setUsers(await response.data);
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<>
			<h1>Github Users</h1>
			<div className='container'>
				<table className='table table-success table-striped table-hover'>
					<thead>
						<tr>
							<th scope='col'>Id</th>
							<th scope='col'>Name</th>
							<th scope='col'>Info</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<React.Fragment key={user.id}>
									<tr>
										<th scope='row'>{index + 1}</th>
										<td>{user.login}</td>
										<td>
											<Link className='btn btn-info' to={`user/${user.id}`}>
												View Profile
											</Link>
										</td>
									</tr>
								</React.Fragment>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default FetchUsers;
