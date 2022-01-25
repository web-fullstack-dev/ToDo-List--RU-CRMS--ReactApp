import React from 'react';
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Детали о задаче" />
      <Section 
        title={task ? task.content : "Не найдено задание 😢"} 
        body={!!task && (
          <><strong>Завершено:</strong> {task.done ? "Да" : "Нет"}</>
        )} 
      />

  </Container>
  );
};

export default TaskPage;