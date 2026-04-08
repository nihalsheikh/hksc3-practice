import React, { memo } from "react";

const HeaderMemo = memo(function HeaderMemo({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
});

export default HeaderMemo;
