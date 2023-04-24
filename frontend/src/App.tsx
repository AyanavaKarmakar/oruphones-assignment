import {
  LowIncomeCarsTable,
  LuxuryCarAndNoDigitEmail,
  MaleExpensivePhoneTable,
  Top10Cities,
  UsersWithLastNameAndQuote,
} from "./components";

function App() {
  return (
    <div className="flex flex-col gap-3 m-5 justify-center items-center text-center min-h-screen">
      <LowIncomeCarsTable />
      <MaleExpensivePhoneTable />
      <UsersWithLastNameAndQuote />
      <LuxuryCarAndNoDigitEmail />
      <Top10Cities />
    </div>
  );
}

export default App;
