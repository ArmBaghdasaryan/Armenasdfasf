import { NextPage } from "next"
import Registration from "../../../src/keycloak/customization/Registration"

const RegistrationStub: NextPage = () => <Registration registerFirstNameValue={""} registerLastNameValue={""} registerEmailValue={"incorrect email"} registerUsernameValue={""} registerFirstNameError={""} registerLastNameError={""} registerUsernameError={""} registerEmailError={"Something is wrong with your email"} registerPassError={""} registerConfirmPassError={""} registrationAction={""} loginUrl={""}/>
export default RegistrationStub