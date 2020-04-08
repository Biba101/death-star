import React, {Component} from 'react';
import classes from './AuthForm.module.css'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class AuthForm extends Component {
    render() {
        return (
            <div className={classes.container}>
                    <form className={classes.authForm}>
                        <h1>Авторизация</h1>
                        <TextField
                            id="standard-full-width"
                            label="Email"
                            style={{ margin: 8 }}
                            placeholder="Введите email"
                            helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            type="password"
                            label="Пароль"
                            style={{ margin: 8 }}
                            placeholder="Введите пароль"
                            helperText="Не мене 8 символов!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button variant="contained" color="primary">
                            Войти
                        </Button>
                        <Button variant="contained" color="primary">
                            Зарегистрироваться
                        </Button>
                    </form>
            </div>
        );
    }
}

export default AuthForm;

