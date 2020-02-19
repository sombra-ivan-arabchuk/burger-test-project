import React, { FC } from 'react';
import { TableContainer } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import withStyles from '@material-ui/core/styles/withStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useIngredients } from '../../hooks/useIngredients';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {},
});

const roundValue = (value: number) => Math.round(value);

const BurgerDetailsTable: FC<any> = ({ ingredients: ingredientsCounts }) => {
  const classes = useStyles();
  const { ingredients } = useIngredients();
  console.log(ingredients);

  const calculatedIngredients = Object.keys(ingredientsCounts).reduce(
    (result, currentKey) => {
      const ingredientCount = ingredientsCounts[currentKey];
      const ingredient = ingredients.find(
        (ingredient: any) => ingredient.key === currentKey,
      );
      const {
        vitaminA = 0,
        vitaminC = 0,
        sodium = 0,
        calories = 0,
      } = ingredient ? ingredient.detailedInfo : {};
      return {
        vitaminA: roundValue(
          result.vitaminA + vitaminA * parseInt(ingredientCount),
        ),
        vitaminC: roundValue(
          result.vitaminC + vitaminC * parseInt(ingredientCount),
        ),
        sodium: roundValue(result.sodium + sodium * parseInt(ingredientCount)),
        calories: roundValue(
          result.calories + calories * parseInt(ingredientCount),
        ),
      };
    },
    // initial value
    { vitaminA: 0, vitaminC: 0, sodium: 0, calories: 0 },
  );
  console.log(calculatedIngredients);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Vitamin A</StyledTableCell>
              <StyledTableCell align="right">Vitamin C</StyledTableCell>
              <StyledTableCell align="right">Sodium</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="right">
                {calculatedIngredients.vitaminA}
              </StyledTableCell>
              <StyledTableCell align="right">
                {calculatedIngredients.vitaminC}
              </StyledTableCell>
              <StyledTableCell align="right">
                {calculatedIngredients.sodium}
              </StyledTableCell>
              <StyledTableCell align="right">
                {calculatedIngredients.calories}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BurgerDetailsTable;
