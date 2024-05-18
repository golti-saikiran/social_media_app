import { useStyles } from './LoginStyles'
import logo from '../../Assets/Logo.svg'
import LoginCard from './LoginCard/LoginCard'

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.infoSection}>
        {/* <img  className={classes.img} src={logo} alt=''/> */}
        <img  className={classes.img} src={logo} alt="" height="106px"/>
        <div className={classes.description}>Facebook helps you connect and share with the people in your life.</div>
        </div>
        <div className={classes.section}>
          <LoginCard/>
          <div className={classes.paragraph}><strong>Create a Page</strong> for a celebrity, brand or business.</div>
        </div>
    </div>

   
  )
}

export default Login
