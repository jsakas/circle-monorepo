import React from 'react';

type GreetingProps = {
  customer: acme.Customer;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  if (props.customer?.first_name) {
    return (
      <span>Hi, {props.customer.last_name}!</span>
    )
  }
  return (
    <span>Hi!</span>
  )
}

export default Greeting;
