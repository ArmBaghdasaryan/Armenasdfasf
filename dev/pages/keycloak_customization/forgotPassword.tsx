import { NextPage } from "next"
import ForgotPassword from "../../../src/keycloak/customization/ForgotPassword"

const ForgotPasswordStub: NextPage = () => <ForgotPassword loginAction={""} loginUrl={""} fpUsernameError={""} fpUsernameValue={""}/>
export default ForgotPasswordStub