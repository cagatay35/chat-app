import React, {Component} from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
    txtEnterMessageField: {
        width: 200,
    },
};

export default class EnterMessageComponent extends Component {

    constructor(props) {
        super(props);
    }

    onClickBtnSendMessage() {

    }

    render() {
        return (
            <Box>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs>
                        <TextField
                            id="txtEnterMessage"
                            label=""
                            style={{margin: 8}}
                            placeholder="Enter Message ..."
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                    <Button variant="contained" color="primary" onClick={() => {this.onClickBtnSendMessage()}}>
                        Send
                    </Button>
                    </Grid>
                </Grid>
            </Box>

            );
    }
}
