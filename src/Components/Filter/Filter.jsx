import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import './Filter.css'
const animatedComponents = makeAnimated();  
  
const Filter =() => { 
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (newOption) => {
      setSelectedOption([...selectedOption,newOption]);
      console.log(selectedOption);
    }

    const Gender = [
        { label: "Male",value:11},
        { label: "Female", value:12 },
        { label: "Bigender", value: 13 }
      ];


    return (
        <>
        <div className="filter_container">
            <div className="filter">
                <Select options={Gender}
                defaultValue={selectedOption} 
                components={animatedComponents}
                value={selectedOption}
                onChange= {setSelectedOption}
                />

                <button onClick={() => console.log(selectedOption)}>test</button>
            </div>
            {/* <div className="filter">
                <Select options={Age} components={animatedComponents} isMulti />
            </div>
            <div className="filter">
                <Select options={Place} components={animatedComponents} isMulti />
            </div>
            <div className="filter">
                <Select options={Race} components={animatedComponents} isMulti />
            </div> */}
        </div>
        </>
    );
  };


   
//   const Race = [
//       { label: "Asian",value:21},
//       { label: "African", value:22 },
//       { label: "Caucasaian", value: 23 }
//     ];
  
    // const Place = [
    //   { label:"India",value:21},
    //   { label: "USA", value:22 },
    //   { label: "England", value: 23 }
    // ];
  
//    const Age = [
//       { label: "18-25",value:31},
//       { label: "25-32", value:32 },
//       { label: "32-40", value: 33 }
//     ];
    
 
 
export default Filter;
