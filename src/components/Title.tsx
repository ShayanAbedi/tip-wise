import React from 'react';

type Props = {};

const Title = (props: Props) => {
  return (
    <div>
      <h2 className="uppercase flex flex-col text-veryDarkCyan">
        <span className="tracking-[1rem]">split</span>
        <span className="tracking-[1rem]">/wise</span>
      </h2>
    </div>
  );
};

export default Title;
