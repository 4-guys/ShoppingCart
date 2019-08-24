import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SimpleMenu from '../Menu'
import images from '../../assets/images/Logo.jpg';
import { Hidden } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: 'theme.palette.common.white',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: 'linear-gradient(45deg, #4c345e 30%, #ec2156 90%)'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  logo: {
    height: '65px',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: '#4c345e'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: 'theme.palette.grey[200]',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));



export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link variant="h6" color="textPrimary" href="/home" underline='none' className={classes.link}>
            <img src = {images} className = {classes.logo}></img>
            </Link>
          </Typography>
          <nav>
           <SimpleMenu/>

            {/* <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
              Contact
            </Link> */}
          </nav>
          <Button href="/contact"  className={classes.link}>
            Contact
          </Button>
          <Button href="/checkout"><ShoppingCartIcon /></Button>
          <Button href="/login" color="#727070" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}