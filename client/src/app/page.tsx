import { EscortFirstScreen } from "@/widgets/EscortFirstScreen/EscortFirstScreen";
import { EscortWorks } from "@/widgets/EscortWorks/EscortWorks";
import { OneHour } from "@/widgets/OneHour/OneHour";

export default function Home() {
  return <main>
    <EscortFirstScreen/>
    <EscortWorks/>
    <OneHour/>
  </main>;
}
