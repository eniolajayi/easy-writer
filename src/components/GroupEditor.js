import React from "react";
import SyncingEditor from "./SyncingEditor";

const GroupEditor = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div>
      <SyncingEditor groupId={id} />
    </div>
  );
};

export default GroupEditor;
