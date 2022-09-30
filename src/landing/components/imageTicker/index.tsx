import React, { FC, memo, useMemo } from 'react';
import Marquee from "react-fast-marquee";

interface iBrands {
  id: string;
  brandIcon: any;
}
interface iProps {
  imageList: iBrands[];
}

const spreadStyle = { display: "flex", flex: 1, justifyContent: "space-around" } as const;

const ImageTicker: FC<iProps> = ({ imageList }) => {
  const list = useMemo(() => (
    imageList.map(({ brandIcon: Brand, id }) => (
      <Brand key={id} />
    ))
  ), [imageList]);

  return (
    <Marquee speed={100} gradient={false}>
      <div style={spreadStyle}>
        {list}
      </div>
    </Marquee>
  );
};

export default memo(ImageTicker);
