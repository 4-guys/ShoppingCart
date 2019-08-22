import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
      },
}));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const classes = useStyles();

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Products
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/product"><MenuItem   onClick={handleClose} >
          <Typography variant="button" color="textPrimary" href="/product"  className={classes.link}>
              Laptop
            </Typography></MenuItem>  </Link>       
            <Link href="/Mice"><MenuItem onClick={handleClose} >
              <Typography variant="button" color="textPrimary" href="/Mice"  className={classes.link}>
              Mice
            </Typography></MenuItem></Link>        
            <Link href="/Mats"><MenuItem onClick={handleClose} >
              <Typography variant="button" color="textPrimary" href="/Mats"  className={classes.link}>
              Mats
            </Typography></MenuItem></Link>        
            <Link  href="/Keyboards"><MenuItem onClick={handleClose} >
              <Typography variant="button" color="textPrimary" href="/Keyboards"  className={classes.link}>
              Keyboards
            </Typography></MenuItem></Link>        
            <Link href="/Audio"><MenuItem onClick={handleClose} >
              <Typography variant="button" color="textPrimary" href="/Audio"  className={classes.link}>
              Audio
            </Typography></MenuItem></Link>        
            <Link href="/Accesories"><MenuItem onClick={handleClose} >
              <Typography variant="button" color="textPrimary" href="/Accesories"  className={classes.link}>
              Accesories
            </Typography></MenuItem></Link>       
      </Menu>
    </div>
  );
}
