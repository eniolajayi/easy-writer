import { getServerUrl } from "../utils/server";

export const getInitialData = (groupId) => {
  let initialEditorContent = [
    {
      type: "paragraph",
      children: [{ text: "Start typing here... " }],
    },
  ];
  let result = initialEditorContent;
  fetch(`${getServerUrl()}/groups/${groupId}`)
    .then((value) => {
      value.json().then((data) => {
        result = data;
      });
    })
    .catch(() => {});
  return result;
};
