import React from "react";
function ToDoItem(props) {
  // const [marked,setMarked]=useState(false);
  // function mark(){
  //   setMarked(!marked)
  //   console.log(marked)
  // }
  // return <li onClick={mark} style={{textDecoration:marked?"line-through":"none"}}>{props.text}</li>;

  return (
    // so this we using a property we can call a function which is inside parent component
    <div
      onClick={() => {
        props.onChecking(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoItem;
