import React,{useState} from 'react'
import "./Mystyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk,faTrash,faPenToSquare,faCheck  } from '@fortawesome/free-solid-svg-icons'

function TodoList() {
    const [lists,setLists]=useState([]);
    const [newList,setNewList]= useState("")
    const [editList,setEditList]=useState(null);
    const [indexList,setIndexList]= useState("")



function handleChange(event){
   setNewList( event.target.value)

}

 function addList(){
    if(newList.trim() !==""){
      setLists((l) => [...l, { text: newList, completed: false }])
        setNewList("")
    }
 }

 function handleInput(event){
    setIndexList(event.target.value)

 }
 
 function saveList(index) {
  if (indexList.trim() !== '') {
    const updatedList = lists.map((list, i) =>
      i === index ? { ...list, text: indexList } : list
    );
    setLists(updatedList);
    setEditList(null);
    setIndexList('');
  }
}

  function deleteList(index){
    const deleteFile = lists.filter((_,i)=>i !==index)
    setLists(deleteFile)
  }

  function editLoad(index){
    setEditList(index)
    setIndexList(lists[index].text)
  }

  function completeEdit(index){
    const upDatedList = lists.map((list,i)=> i===index ?{...list,completed: !list.completed}:list)
    setLists(upDatedList)
  }
  return (
    <div className='general'>
      <div className='container'>
      <h1>SHOPPING LIST</h1>
      <div >
      <div>
        <input type="text" placeholder='Enter List Items' value={newList} onChange={handleChange}/>
        <button onClick={addList}>Add To List</button>
      </div>
      <ul>
        {
        lists.map((list,index)=>
           <div className='list-head'><li key={index}>{editList===index?
           (<><input type="text" value={indexList} onChange={handleInput}/>
           <button onClick={()=>saveList(index)}><FontAwesomeIcon icon={faFloppyDisk} />
          </button></>):
          <div className='list-text'>  
          <div className='text-content'>
          <span className={list.completed?"completed":""}>{list.text}</span> 

          </div>
          <div className='btn-element'>
            <button onClick={()=>deleteList(index)}><FontAwesomeIcon icon={faTrash} />
            </button> <button onClick={()=>editLoad(index)}><FontAwesomeIcon icon={faPenToSquare} />
            </button> <button onClick={()=>completeEdit(index)}><FontAwesomeIcon icon={faCheck} /></button> 
          </div> 

          </div>} 
          </li>
          </div>
        )}
      </ul>

      </div>

      </div>

    </div>
  )
}

export default TodoList
