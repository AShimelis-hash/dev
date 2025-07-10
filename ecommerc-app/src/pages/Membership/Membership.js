import React, {useState} from 'react'


function MemberShip() {


  const [selectedValue, setSelectedValue] = useState("option1")
   const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };
  const handleRadioChange = (value) => {
    setSelectedValue(value)
  }
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div>
      <div className='flex justify-center align-center  flex-row align-middle border-spacing-4 px-2 shadow-md'>
        <div className='inline justify-center align-middle'>
        <div></div>
        </div>
        <div>
          <label  className= 'ring-cyan-400' htmlFor='option1'>student</label>
          <input type='radio' id='option1' value='option1' checked={ selectedValue==="option1"} onChange={() => handleRadioChange("option1")}/> 
        </div>
        <div>
          <label className= 'ring-cyan-400' htmlFor='option3'>Farmers association </label>
          <input type='radio' id='option2' value='option2' checked={ selectedValue === "option2"}  onChange={() => handleRadioChange("option2")}/>
        </div>
        <div>
          <label className= 'ring-cyan-400' htmlFor='option4'> Business class</label>
          <input type='radio' id='option4' value='option4' checked={ selectedValue === "option4"}  onChange={() => handleRadioChange("option4")}/>
        </div>
        <div>
          <label className= 'ring-cyan-400' htmlFor='option5'>Professional association </label>
          <input type='radio' id='option5' value='option5' checked={ selectedValue === "option5"}  onChange={() => handleRadioChange("option5")}/>
        </div>
        <div className='flex justify-center align-middle'>
          <label>
        <input
          type="checkbox"
          checked={checkedOne}
          onChange={handleChangeOne}
        />
        New Member
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkedTwo}
          onChange={handleChangeTwo}
        />
        Existing Member
      </label>
        </div>
    </div>
      <div>
        <form>
          <p> Members registration</p>
          <div> 

          </div>
          <div>
            <label>First Name</label>
            <input className='focus:border-blue-500 border-2 border-red-500' type='name'placeholder='inter your Fist name' />
            <label>First Name</label>
            <input className='focus:border-blue-500 border-2 border-red-500' type='name'placeholder='inter your Middle name' />
            <label>First Name</label>
            <input className='focus:border-blue-500 border-2 border-red-500' type='name'placeholder='inter Last name' />

          </div>

        </form>
      </div>
      <div>

      </div>
    </div>
  )
}

export default MemberShip