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
    label: 'Back To School Sale',
    imgPath: 'https://i.imgur.com/J1HW161.png',
    linkPath: '../Products',
  },
  {
    label: 'Acer Predator 17 Gaming Laptop',
    imgPath:
      'https://i.imgur.com/FhdXrre.png',
  },
  {
    label: 'Logitech G-502 Mouse',
    imgPath:
      'https://i.imgur.com/55EklXg.png',
  },
  {
    label: 'Logitech Keyboard',
    imgPath:
      'https://i.imgur.com/hnmPPio.png',
  },
  {
    label: 'Razer Stealth Blade Laptop',
    imgPath:
      'https://i.imgur.com/Xh8Ky43.png',
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
        classeName={classes.img}
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