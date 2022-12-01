import React from 'react';
import '../App.css';
import InputFields from './InputFields'

function InputCard(props){
      return(
        <div>
          <div>
            <InputFields
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                mortgagePayment={props.mortgagePayment}
            />
          </div>
        </div>
      )
  }

export default InputCard;