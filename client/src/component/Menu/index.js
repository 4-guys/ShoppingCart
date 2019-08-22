import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
        color: '#ec2156'
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
      <Button aria-controls="simple-menu" color="textPrimary" aria-haspopup="true" onClick={handleClick} className={classes.link}>
        Products
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
          <Link variant="button" color="textPrimary" href="/product"  className={classes.link}>
              Laptop
            </Link></MenuItem>        
            <MenuItem onClick={handleClose} >
              <Link variant="button" color="textPrimary" href="/Mice"  className={classes.link}>
              Mice
            </Link></MenuItem>        
            <MenuItem onClick={handleClose} >
              <Link variant="button" color="textPrimary" href="/Mats"  className={classes.link}>
              Mats
            </Link></MenuItem>        
            <MenuItem onClick={handleClose} >
              <Link variant="button" color="textPrimary" href="/Keyboards"  className={classes.link}>
              Keyboards
            </Link></MenuItem>        
            <MenuItem onClick={handleClose} >
              <Link variant="button" color="textPrimary" href="/Audio"  className={classes.link}>
              Audio
            </Link></MenuItem>        
            <MenuItem onClick={handleClose} >
              <Link variant="button" color="textPrimary" href="/Accesories"  className={classes.link}>
              Accesories
            </Link></MenuItem>       
      </Menu>
    </div>
  );
}
