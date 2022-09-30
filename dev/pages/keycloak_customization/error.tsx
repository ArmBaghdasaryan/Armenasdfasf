import { NextPage } from "next";
import ErrorPage from "../../../src/keycloak/customization/ErrorPage";

const ErrorStubPage: NextPage = () => <ErrorPage errorMessageSummary={"Some error has happened"} backToAppUrl={""} skipLinkErrorPage={false}/>
export default ErrorStubPage