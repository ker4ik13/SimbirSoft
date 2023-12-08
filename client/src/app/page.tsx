import { CmsWeWork } from "@/widgets/CmsWeWork/CmsWeWork";
import { EscortFirstScreen } from "@/widgets/EscortFirstScreen/EscortFirstScreen";
import { EscortWorks } from "@/widgets/EscortWorks/EscortWorks";
import { GetOrder } from "@/widgets/GetOrder/GetOrder";
import { OneHour } from "@/widgets/OneHour/OneHour";
import OurClients from "@/widgets/OurClients/OurClients";

export default function Home() {
  return <main>
    <EscortFirstScreen/>
    <EscortWorks/>
    <CmsWeWork/>
    <OneHour/>
    <OurClients/>
    <GetOrder/>
  </main>;
}
