import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Michael from '../assets/images/Michael.jpeg';
import Calvin from '../assets/images/Calvin.jpg';
import Chris from '../assets/images/Chris.jpg';
import Tai from '../assets/images/Tai.jpg';
import Mark from '../assets/images/Mark.jpg';
import Calum from '../assets/images/Calum.jpeg';



const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '1px',
        // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    michael: {
        height: '300px'
    }
}));


export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Developers
            </Typography>

                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="Michael">
                                <CardMedia
                                    className={classes.cardMedia}

                                    title="Michael"
                                />
                                <img src={Michael} className={classes.michael}></img>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Michael Eguina
                    </Typography>
                                    <Typography gutterBottom variant="h7" >
                                        Email: michael@corner-exit.com
                    </Typography>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/michael-eguina-67b6984a/" >
                                        LinkedIn
          </Button>
                                </CardContent>

                            </Card>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="Michael">
                                <CardMedia
                                    className={classes.cardMedia}

                                    title="Michael"
                                />
                                <img src={Calvin} className={classes.michael}></img>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Calvin Vo
                    </Typography>
                                    <Typography gutterBottom variant="h7">
                                        Email: calvinctvodesign@gmail.com
                    </Typography>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/calvin-vo-a544a6191/" >
                                        LinkedIn
          </Button>
                                </CardContent>

                            </Card>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="Michael">
                                <CardMedia
                                    className={classes.cardMedia}

                                    title="Michael"
                                />
                                <img src={Tai} className={classes.michael}></img>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Tai Nguyen
                    </Typography>
                                    <Typography gutterBottom variant="h7">
                                        Email: taing89@gmail.com
                    </Typography>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/tai-nguyen-472b2b9a/" >
                                        LinkedIn
          </Button>

                                </CardContent>

                            </Card>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="Michael">
                                <CardMedia
                                    className={classes.cardMedia}

                                    title="Michael"
                                />
                                <img src={Chris} className={classes.michael}></img>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Chris Cudiamat
                    </Typography>
                                    <Typography gutterBottom variant="h7">
                                        Email: ccudiamat93@gmail.com
                    </Typography>
                                    <br></br>
                                    <Button href="https://www.linkedin.com/in/christopher-cudiamat-265890184/
" >
                                        LinkedIn
          </Button>
                                </CardContent>

                            </Card>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="Michael">
                                <CardMedia
                                    className={classes.cardMedia}

                                    title="Michael"
                                />
                                <img src={Mark} className={classes.michael}></img>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mark Pascua
                    </Typography>
                                    <Typography gutterBottom variant="h7">
                                        Email:
                    </Typography>
                                    <br></br>
                                    <Typography gutterBottom variant="h7">
                                        LinkedIn:
                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="Michael">
                                <CardMedia
                                    className={classes.cardMedia}

                                    title="Michael"
                                />
                                <img src={Calum} className={classes.michael}></img>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Calum Ragan
                    </Typography>
                                    <Typography gutterBottom variant="h7">
                                        Email:
                    </Typography>
                                    <br></br>
                                    <Typography gutterBottom variant="h7">
                                        LinkedIn:
                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>


                </Container>
            </main>
            {/* End footer */}
        </React.Fragment>
    );
}
