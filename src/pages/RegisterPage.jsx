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

const RegisterPage = () =>  {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      authOperations.register({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    );
    setName('');
    setEmail('');
    setPassword('');
  };

	return (
      <div>
        <h1>Сторінка реєстрації</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Ім'я
            <input
              type="text"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </label>

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

          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    );
};

export default RegisterPage;
// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);
	

// class RegisterPage extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1>Страница регистрации</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Имя
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Почта
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Пароль
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">Зарегистрироваться</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterPage);
