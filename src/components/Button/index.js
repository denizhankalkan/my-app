
import { Button, withStyles } from "@material-ui/core";

const StyledButton = withStyles(() => ({
    root: {
        minWidth: '70px',
        marginBottom: 5,
        boxShadow: 'none',
    },
}))(Button);

export default StyledButton;