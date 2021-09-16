import React, { useState } from 'react';
import Popup from './components/Popup/Popup';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const popup = goalId => {
    setId(goalId);
    setIsOpen(true);
    return;
  }
  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {

      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      setIsOpen(false);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={popup} />
    );
  }

  function isSurefn() {
    deleteItemHandler(id);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        
        {content}
        
      </section>

      {isOpen && <Popup isSurefn={isSurefn} isOpen={isOpen} close={close}></Popup>}
    </div>
  );
};

export default App;
