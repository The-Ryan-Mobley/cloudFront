import React from 'react';
import { styled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const HeaderButton = styled(Button)({
    backgroundColor: "#dbfeff",
    borderRadius: "10px 10px 10px 10px",
    boxShadow: "-10px -10px 10px -2px #e8ffff, 10px 10px 14px -10px #000000",

});
export const FrontPageProductGrid = styled(Grid)({
    borderRadius: "10px 10px 10px 10px",
    boxShadow: "-10px -10px 10px -2px #ffffff, 10px 10px 14px -10px #000000",
})