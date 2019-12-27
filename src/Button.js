import React from 'react';

const Button =({children, ClickHandler}) => 
  <div className="Button">
    <button onClick={ClickHandler}>{children}</button>
  </div>

  export default Button;