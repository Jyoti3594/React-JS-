import React from 'react';
import Tour from './Tour';
const Tours = ({tour,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Out tour list</h2>
        <div className="underline"></div>
      </div>
        <div>
          {tour.map((tourlist) => {
            return <Tour key={tourlist.id} {...tourlist}removeTour={removeTour} />;
        })}
        </div>
    </section>
  );
};

export default Tours;
