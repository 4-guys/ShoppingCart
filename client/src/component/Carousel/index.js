import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Razer Blade Stealth',
    imgPath: 'https://assets.pcmag.com/media/images/478709-razer-blade-stealth-8th-gen-cpu.jpg?width=810&height=456',
  },
  {
    label: 'Alienware Laptop',
    imgPath:
      'http://i.dell.com/sites/csimages/Video_Imagery/all/roll-up-aw-m15.png',
  },
  {
    label: 'Naga Mouse',
    imgPath:
      'https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/he1/h79/8909576994846/Razer_Naga_Trinity_09.jpg',
  },
  {
    label: 'Logitech Headphones',
    imgPath:
      'https://assets.pcmag.com/media/images/552608-logitech-g935.jpg?width=810&height=456',
  },
  {
    label: 'Netgear Router',
    imgPath:
      'https://images-na.ssl-images-amazon.com/images/I/81K4IHoxEHL._SL1500_.jpg',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: false,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    background: 'linear-gradient(30deg, #f0e8ea 20%, #fafafa 90%)'
  },
  img: {
    display: 'block',
    maxWidth: false,
    overflow: 'hidden',
    height: '350px',
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;