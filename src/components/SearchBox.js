import React, {useState } from 'react'
import  { Button, TextField, Container, Grid, MenuItem, } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';


const currencies = [
    {
        value: 'NewDate',
        label: 'New to old',
    },
    {
        value: 'OldDate',
        label: 'Old to new',
    },
    {
      value: 'Like',
      label: 'Number of likes',
    },
    {
      value: 'View',
      label: 'Number of views',
    },
    {
      value: 'Comment',
      label: 'Number of comments',
    },
    {
      value: '----',
      label: '----',
    },
  ];

  const useStyles = makeStyles({
    wrapper: {
      marginTop: 20,
    },
      searchBox: {
        marginTop: 20,
      }
  })

  
const SearchBox = () => {
    const styles = useStyles();
    const [currency, setCurrency] = React.useState('NewDate');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    
    return (
        <Container className={styles.wrapper} maxWidth="sm">
            <TextField className={styles.searchBox} id="outlined-basic" label="Search..." variant="outlined" />
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <div>
              <TextField
                    id="filled-select-currency-native"
                    select
                    label="Sort"
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your currency"
                    variant="outlined"
                    >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                  id="filled-select-currency-native"
                  select
                  label="Filter"
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                      native: true,
                  }}
                  helperText="Please select your currency"
                  variant="outlined"
                  >
                  {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                      {option.label}
                      </option>
                ))}
              </TextField>
            </div>
        </Container>
    )
}



export default SearchBox;