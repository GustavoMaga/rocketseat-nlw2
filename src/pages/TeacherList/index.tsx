import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList () {
    return(
        <div id="page-teacher-list" className="container">

            <PageHeader title="Estes são os Proffys dísponiveis.">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="Subject">Matéria</label>
                        <input type="text" id="Subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="time"/>
                    </div>

                </form>
            </PageHeader>

            <main>
                <TeacherItem>

                </TeacherItem>
                <TeacherItem>

                </TeacherItem>
                <TeacherItem>

                </TeacherItem>
            </main>

        </div>
    );
}

export default TeacherList