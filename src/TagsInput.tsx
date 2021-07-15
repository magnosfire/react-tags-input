import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

export default function TagsInput(props) {
  const { onSelectTags, tags, ...other } = props;
  const [ selectedItem, setSelectedItem ] = React.useState([]);
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);

  const handleDelete = (item) => () => {
    console.log("must delete this chip", item);
  };

  return (
    <TextField
      InputProps={{
        startAdornment: selectedItem.map((item) => (
          <Chip
            key={item}
            tabIndex={-1}
            label={item}
            onDelete={handleDelete(item)}
          />
        ))
      }}
      {...other}
    />
  );
}
TagsInput.defaultProps = {
  tags: []
};
