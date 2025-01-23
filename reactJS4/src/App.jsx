import ColorPicker from "./ColorPicker.jsx";
import Mycomponent from "./Mycomponent.jsx";
import Mycomponent2 from "./Mycomponent2.jsx";
import Mycomponent3 from "./Mycomponent3.jsx";
import Mycomponent4 from "./Mycomponent4.jsx";




 // useEffect()----- react hook that tells react to do some code
    ///when(pick one)
    //the component rendres,mounts  the state of a value
    // useEffect(() =>{})  runs after every re-render
    // useEffect(()=> {},[]) runs only on mount
    //useEffect(() => {}, [value]) runs mount and after the value changes
// useEffect (function,[dependencies])

    //uses
    //event listeners
    //DOM manipulation
    //subscriptions(realtime updates)
    //fetching data from API
    //clean up after a component unmounts(removing a component from a DOM)




function App() {
  return (
    <>
    <ColorPicker />
    <Mycomponent />
    <Mycomponent2 />
    <Mycomponent3 />
    <Mycomponent4 />

    </>
       
  )
}

export default App
