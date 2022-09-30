import PageExpired from "./PageExpired"

export default function ExpirablePage({ftlPageName, restartLoginUrl, continueLoginUrl, children}: {
  restartLoginUrl: string,
  continueLoginUrl: string,
  ftlPageName: string,
  children: React.ReactNode
}) {
  return ftlPageName === 'page-expired' 
  ? <PageExpired {...{restartLoginUrl, continueLoginUrl}}/>
  : <>{ children }</>
}