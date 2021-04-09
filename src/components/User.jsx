import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 600,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	media: {
		height: 340,
	},
	buttons: {
		marginLeft: 'auto !important',
		marginRight: 'auto',
	},
});

const User = () => {
	const classes = useStyles();
	const [user, setUser] = useState({});

	const { id } = useParams();
	console.log(id);
	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		const response = await axios.get(`https://api.github.com/users/${id}`);
		setUser(response.data);
	};
	return (
		<div className='container mt-4'>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={user.avatar_url}
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							Name : {user.name || 'Prashant'}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Employee Id : {user.id}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Followers : {user.followers}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Following : {user.following}
						</Typography>
					</CardContent>
				</CardActionArea>

				<Link to={`${id}/repos`} className='btn btn-outline-dark mr-3 mb-3'>
					See Repos
				</Link>
				<Link to='/' className='btn btn-outline-dark mb-3'>
					Go to Home
				</Link>
			</Card>
		</div>
	);
};

export default User;
