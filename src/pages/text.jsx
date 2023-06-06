import { FormControl, FormHelperText, InputAdornment, OutlinedInput } from "@mui/material"


export const Text = () => {
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        />
        </FormControl>
    )
}

export default Text;