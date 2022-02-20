import React from 'react'

function EditTask({isEdit,item}) {
  return (
    <>
         {isEdit  && <div className='task-modal-wrap'>
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nemo voluptatum.

<div className='modal_end'></div>
</div>}
    </>
  )
}

export default EditTask;