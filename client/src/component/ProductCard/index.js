import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(30deg, #4c345e 20%, #ec2156 90%)',
        color:'white',
        boxShadow:'100px'
    },
    cardMedia: {
        backgroundSize: 'contain',
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1,
    },
    ul:{
        listStyleType: "none"
    }
}))

export function ProductList({ children }) {
    return <ul>{children}</ul>
}
export function ProductCard(props) {
    const classes = useStyles();

    return (
        
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={props.image}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Button href="/productDetails">
                            <Typography gutterBottom variant="h5" component="h2" style={{color:'#e23674'}}>
                                {props.title}
                            </Typography>
                        </Button>        <Typography>
                            {props.itemDescription}
                        </Typography><Typography>
                        $ {props.ourPrice}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={props.handleToggle} size="small" style={{color:'#ec2156'}} >
                            Add to Cart
</Button>
                    </CardActions>
                </Card>
      
    );
}

