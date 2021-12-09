import { Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'
import useStyles from '../utils/styles';

function CheckoutWizard({ activeStep  = 0}) {
    const classes = useStyles();
    return (
        <Stepper className={classes.transparentBackground} activeStep={activeStep} afternativeLabel>
            {
                ['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
                    (step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    )
                )
            }

        </Stepper>
    )
}

export default CheckoutWizard
