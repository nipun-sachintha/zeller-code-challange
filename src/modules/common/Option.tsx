import { Radio } from '@material-ui/core';
import { styled } from '@mui/system';

const Option = styled(Radio)({
  '&.MuiRadio-colorSecondary.Mui-checked': {
    color: 'blue',
  }
});

export default Option;
