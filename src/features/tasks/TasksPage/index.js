import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Projects from "../../../common/Projects";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Projects />
      <Header title="Список заданий  " />
      <Section 
        title="Добавить новое задание" 
        body={<Form />} 
        />
        <Section 
        title="Поисковик" 
        body={<Search />} 
        />
      <Section 
        title="Список заданий  "
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        />
  </Container>
  );
};


export default TasksPage;
