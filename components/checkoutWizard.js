import { Step, StepLabel, Stepper } from '@material-ui/core'
import React from 'react'

function CheckoutWizard({ activeStep  = 0}) {
    return (
        <Stepper activeStep={activeStep} afternativeLabel>
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
