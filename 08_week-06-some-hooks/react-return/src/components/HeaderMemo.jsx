import React, { memo } from "react";

// memo: skip re-rendering when the props are unchanged
const HeaderMemo = memo(function HeaderMemo({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
});

export default HeaderMemo;
