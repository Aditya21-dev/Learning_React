import Child from "./Child"

function Parent() {

  let studentName = "Adi"
  let studentAge = 19

  return (
    <>
      <h2>Parent Component</h2>

      <Child 
        name={studentName} 
        age={studentAge}
      />
    </>
  )
}

export default Parent
