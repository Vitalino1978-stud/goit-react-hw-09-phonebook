import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import  authOperations  from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.logIn({ email: `${email}`, password: `${password}` }));

    setEmail('');
    setPassword('');
  };

// class LoginPage extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

    return (
      <div>
        <h1>Сторінка логина</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Пошта
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </label>

          <button type="submit">Ласкаво просимо!</button>
        </form>
      </div>
    );
  }


// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginPage);
export default LoginPage;