import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItemSecondaryAction, ListItem, ListItemText, Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
  }
}));
  
export default function CheckboxListSecondary(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div id="space">
    <List dense className={classes.root}>
      {[0].map((value) => {
        const labelId = `checkbox-list-secondary-label-${props.text}`;
        return (
          <ListItem key={props.text} button>
            <ListItemText id={labelId} primary={props.text} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(props.text)}
                  checked={checked.indexOf(props.text) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </div>
  );
}