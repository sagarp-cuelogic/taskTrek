import "./Tag.css";

export const Tag = ({ tagName, handleTag }) => {
  return (
    <button type="button" className="tag" onClick={() => handleTag(tagName)}>
      {tagName}
    </button>
  );
};
