import React, { useState} from 'react';

function Mycomponent3 (){

    const [cars,setCars]= useState([]);
    const [carYear, setcarYear]=useState(new Date().getFullYear());
    const [carMake, setcarMake]= useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

        const newCar ={year: carYear,
                        make: carMake,
                        model: carModel};

    setCars(c => [...c, newCar]);

    setcarYear(new Date().getFullYear());
    setcarMake("");
    setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter(( _, i => i !== index)));
    }

    function handleYearChange(event){
        setcarYear(event.target.value);
        
    }

    function handleMakeChange(event){
        setcarMake(event.target.value);
        
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
        
    }

    return(
        <div>
            <h2>list of car objects</h2>
            <ul>
                {cars.map((car, index)=> 
                     <li key= {index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}

                </li>)}

            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} />
            <input type="text" value={carMake}  onChange={handleMakeChange} placeholder='enter car make'/>
            <input type="text" value={carModel}  onChange={handleModelChange} placeholder='enter car model'/>
            <button onClick={handleAddCar}>add car</button>
        </div>
    )

}
export default Mycomponent3