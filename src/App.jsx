import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <div className="flex-center h-[100vh]">
            <h1 className="text-7xl text-indigo-350">Testing 1,2,3</h1>
        </div>
    )
}
export default App
// test comment