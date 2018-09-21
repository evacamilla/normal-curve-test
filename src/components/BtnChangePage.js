import React from 'react';

function BtnChanngePage(props) {
  return (
    <div>
      <button onClick={props.previousPage} className="btn btn-prev">
        Föregående Sida
      </button>
      <button onClick={props.nextPage} className="btn btn-next">
        Nästa Sida
      </button>
    </div>
  );
}

export default BtnChanngePage;
