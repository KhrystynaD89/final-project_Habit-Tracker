


// import React, { useState, useEffect } from 'react';
// import '../styles/HabitCard.css';

// const HabitCard = ({ id, text: initialText, completed: initialCompleted, onUpdate, onDelete }) => {
//   const [text, setText] = useState(initialText || '');
//   const [completed, setCompleted] = useState(initialCompleted || false);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleCheckboxChange = () => {
//     setCompleted(!completed);
//   };

//   const handleDelete = () => {
//     onDelete(id);
//   };

//   useEffect(() => {
//     if (text !== initialText || completed !== initialCompleted) {
//       onUpdate({ id, text, completed });
//     }
//   }, [text, completed, onUpdate, initialText, initialCompleted, id]);

//   return (
//     <div className="box">
//       <div className="input-container">
//       <div className="rectangle-eat-card">
        
//           {isEditing ? (
//             <div className="input-content">
//               <input
//                 type="text"
//                 className="card-input"
//                 placeholder="Enter your habit"
//                 value={text}
//                 onChange={handleTextChange}
//               />
//               <img
//                 src={require('../assets/trash.svg').default}
//                 alt="Trash Icon"
//                 onClick={handleDelete}
//                 className="trash-icon"
//               />
//             </div>
//           ) : (
//             <>
//               <span className="habit-text">{text}</span>
//               <input
//                 type="checkbox"
//                 className="card-checkbox"
//                 checked={completed}
//                 onChange={handleCheckboxChange}
//               />
//             </>
//           )}
//         </div>
//         <div className="card-options" onClick={() => setIsEditing(!isEditing)}>
//           <img
//             src={require('../assets/ellipsis.svg').default}
//             alt="Ellipsis Icon"
//             className="ellipsis-icon"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HabitCard;

import React, { useState, useEffect } from 'react';
import '../styles/HabitCard.css';

const HabitCard = ({ id, text: initialText, completed: initialCompleted, onUpdate, onDelete }) => {
  const [text, setText] = useState(initialText || '');
  const [completed, setCompleted] = useState(initialCompleted || false);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  useEffect(() => {
    if (text !== initialText || completed !== initialCompleted) {
      onUpdate({ id, text, completed });
    }
  }, [text, completed, onUpdate, initialText, initialCompleted, id]);

  return (
    <div className="box">
      <div className="input-container">
        <div className="rectangle-eat-card">
          {isEditing ? (
            <div className="input-content">
              <input
                type="text"
                className="card-input"
                placeholder="Enter your habit"
                value={text}
                onChange={handleTextChange}
              />
              <img
                src={require('../assets/trash.svg').default}
                alt="Trash Icon"
                onClick={handleDelete}
                className="trash-icon"
              />
            </div>
          ) : (
            <>
              <span className="habit-text">{text}</span>
              <input
                type="checkbox"
                className="card-checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
              />
            </>
          )}
        </div>
        <div className="card-options" onClick={toggleEditing}>
          {isEditing ? (
           <img
           src={require('../assets/save.svg').default}
           alt="Checkbox Icon"
           className="checkbox-icon"
         />
          ) : (
            <img
              src={require('../assets/ellipsis.svg').default}
              alt="Ellipsis Icon"
              className="ellipsis-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HabitCard;



