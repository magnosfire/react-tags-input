import React, { useCallback, useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import validator from 'validator';

export default function TagsInput(props) {

  const classes = useStyles();
  const { onSelectTags, tags, ...other } = props;
  const [selectedItem, setSelectedItem] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [, updateState] = useState(0);

  useEffect(() => {

    setSelectedItem(tags);

  }, [tags]);

  const handleDelete = (item: string) => () => {

    const index = tags.indexOf(item);

    if (index > -1) {
      tags.splice(index, 1);
    }

    updateState(Math.random());
    setSelectedItem(tags);

    return newTag;

  };

  const handleDeleteLastItem = () => {

    tags.pop();

    updateState(Math.random());
    setSelectedItem(tags);

    return tags;

  };

  const handleNewTag = (event) => {

    setNewTag(event.target.value);
    return event.target.value;

  };

  const handleTag = () => {

    if (!tags.includes(newTag)) {

      if (newTag.includes(';')) {

        const tagsArray: string[] = newTag.split(';');

        tagsArray.map((email) => {
          if (validator.isEmail(email)) {
            tags.push(email);
          }
        });

      } else {

        if (validator.isEmail(newTag)) {
          tags.push(newTag);
        }

      }

    }

    setNewTag('');

  }

  const handleKeyPressed = (event) => {

    switch (event.key) {
      case 'Backspace': {
        if (newTag.length == 0) {
          handleDeleteLastItem();
        }
        break;
      }
      case 'Enter': {
        handleTag();
        break;
      }
      case 'Tab': {
        event.preventDefault()
        handleTag();
        break;
      }
      default:
        break;
    }

  }

  return (
    <TextField
      value={newTag}
      onChange={handleNewTag}
      onKeyDown={(event) => handleKeyPressed(event)}
      className={classes.textField}
      InputProps={{
        startAdornment: selectedItem.map((item) => (
          <Chip
            key={item}
            tabIndex={-1}
            label={item}
            variant={"outlined"}
            color={'primary'}
            className={classes.chip}
            onDelete={handleDelete(item)}
          />
        )),
        classes: {
          root: classes.root
        }
      }}
      {...other}
    />
  );
}

TagsInput.defaultProps = {
  tags: []
};

const useStyles = makeStyles(() => ({
  root: {
    flexWrap: "wrap",
    paddingTop: 16
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
    fontWeight: 700,
  },
  textField: {
    borderBottomColor: "red",
    borderBottom: 1
  }
}));