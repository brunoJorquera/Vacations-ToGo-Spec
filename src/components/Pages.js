import React from "react";

export default function Pages({ gotoPrevPage, gotoNextPage }) {
  return (
    <div id="page-btns">
      {gotoPrevPage && <button id="nexprev" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button id="nexprev" onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
