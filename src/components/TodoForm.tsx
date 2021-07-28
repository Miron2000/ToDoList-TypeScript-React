import React, {useState} from "react";

interface ToDoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<ToDoFormProps> = ({onAdd}) => {
  const [title, seTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    seTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title);
      seTitle('');
    }
  }

  return (
      <div className="input-field mt2">
        <input value={title}
               onChange={changeHandler}
               onKeyPress={keyPressHandler}
               type="text"
               id="title"
               placeholder="Enter case name"/>
        <label htmlFor="title" className="active">Enter case name</label>
      </div>
  )
}