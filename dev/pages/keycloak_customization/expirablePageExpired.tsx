import { NextPage } from "next"
import ExpirablePage from "../../../src/keycloak/customization/ExpirablePage"

const ExpirablePageExpired: NextPage = () => <ExpirablePage restartLoginUrl={""} continueLoginUrl={""} ftlPageName={"page-expired"}>Some page content</ExpirablePage>
export default ExpirablePageExpired