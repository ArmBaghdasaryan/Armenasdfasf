import { NextPage } from "next"
import VerifyEmail from "../../../src/keycloak/customization/VerifyEmail"

const VerifyEmailStub: NextPage = () => <VerifyEmail verifyEmailUserEmail={""} verifyEmailResendLink={""}/>
export default VerifyEmailStub