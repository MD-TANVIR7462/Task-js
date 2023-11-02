import React from 'react';

const Button = ({text}) => {
   return (
      <a className='btn btn-outline btn-xs mr-2 text-white'>
      {text}
      </a>
   );
};

export default Button;