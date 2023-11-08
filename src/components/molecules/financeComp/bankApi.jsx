import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'FCMB Bank',
  'Kuda Bank',
  'UBA Bank',
  'Diamond Bank',
  'First Bank',
  'Zenith Bank',
  'Eco Bank',
  'Heritage Bank',
  'MicroFinance Bank',
  'Stanbic Bank',
];

function getStyles(name, personName) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? 'normal' : 'bold',
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControl className="w-[100%]" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#5B2682' }, '&:hover fieldset': { borderColor: '#5B2682' }, '&.Mui-focused fieldset': { borderColor: '#421638' }, }, }}>
        <InputLabel id="demo-single-select-label">Bank</InputLabel>
        <Select
          labelId="demo-single-select-label"
          id="demo-single-select"
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          <MenuItem value="">Select a bank</MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
