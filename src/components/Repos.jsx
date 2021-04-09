import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Repos = () => {
	const [myrepos, setMyRepos] = useState([]);
	const [singleRepo, setSingleRepo] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const response = await axios.get(
			`https://api.github.com/users/${id}/repos`
		);
		setMyRepos(response.data);
	};

	useEffect(() => {
		showData();
	}, []);

	const showData = (name) => {
		setSingleRepo(
			myrepos.filter((obj) => {
				return obj.name === name;
			})
		);
	};
	return (
		<div className='container'>
			<h1>Dashboard</h1>
			<div>
				{singleRepo.map((item) => {
					return (
						<React.Fragment>
							<div
								className='card mt-4 center-div shadow'
								style={{ width: '30rem' }}
							>
								<div className='card-body'>
									<h5 className='card-title'>Repo Name : {item.name}</h5>
									<h6 className='card-subtitle mb-2 text-muted'>
										Description : {item.description}
									</h6>
									<p className='card-text'>Forks : {item.forks}</p>
									<p className='card-text'>Open Issues : {item.open_issues}</p>
								</div>
							</div>
						</React.Fragment>
					);
				})}
			</div>
			<h1 className='mt-4'>List of Reposiretories</h1>
			<table className='table table-success table-striped table-hover'>
				<thead>
					<tr>
						<th scope='col'>Id</th>
						<th scope='col'>Name</th>
					</tr>
				</thead>
				<tbody>
					{myrepos.map((repo, index) => {
						return (
							<React.Fragment key={repo.id}>
								<tr>
									<th scope='row'>{index + 1}</th>
									<td>{repo.name}</td>
									<td>
										<Link
											className='btn btn-info'
											onClick={() => showData(repo.name)}
										>
											View Repo
										</Link>
									</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</table>
			<Link to='/' className='btn btn-outline-dark mb-3'>
				Go to Home
			</Link>
		</div>
	);
};

export default Repos;
