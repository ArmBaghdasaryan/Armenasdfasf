import { NextPage } from "next"
import Login from "../../../src/keycloak/customization/Login"

const LoginStub: NextPage = () => <Login usernameValue={"some value"} hasLoginError={true} loginErrorMsg={"some error"} loginAction={""} loginResetCredentialsUrl={""} registrationUrl={""} templateErrorMsgType={""} templateErrorMsg={""} />

export default LoginStub