import { Greet } from "./Greet.jsx";
import KgButton from "./KgButton.jsx"
import { Random } from "./Random.jsx";


function App(){
return <div>
<h1> Hello React </h1>
{/* <KgButton></KgButton> */}
<KgButton />
<Greet></Greet>
<Random></Random>
</div>
}
export default App;