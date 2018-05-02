import './coursequiz.scss';
import React from 'react';
import RestService from '../../../../services/RestService';

export default class CourseQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {quizzes: []}
        };
    }

    componentDidMount() {
        this._loadCourse();
    }

    _loadCourse() {
        RestService
            .get('/api/course/basic/info/' + this.props.params.courseId)
            .done(function (data) {
                this.setState({data: data});
            }.bind(this));
    }

    _addQuiz(e) {
        e.preventDefault();
        this.state.data.quizzes.push({
            question: 'New Question',
            answers: [
                {
                    answer: '',
                    checked: true
                },
                {
                    answer: '',
                    checked: false
                },
                {
                    answer: '',
                    checked: false
                },
                {
                    answer: '',
                    checked: false
                }
            ]
        });
        this.setState({quizzes: this.state.data.quizzes});
    }

    _saveQuiz(quiz, index, e) {
        e.preventDefault();
        quiz.question = $('#question' + index).val();
        quiz.answers[0].checked = $('#checked-0-' + index).is(':checked');
        quiz.answers[0].answer = $('#answer-0-' + index).val();
        quiz.answers[1].checked = $('#checked-1-' + index).is(':checked');
        quiz.answers[1].answer = $('#answer-1-' + index).val();
        quiz.answers[2].checked = $('#checked-2-' + index).is(':checked');
        quiz.answers[2].answer = $('#answer-2-' + index).val();
        quiz.answers[3].checked = $('#checked-3-' + index).is(':checked');
        quiz.answers[3].answer = $('#answer-3-' + index).val();
        RestService
            .post('/api/quiz/' + this.props.params.courseId, quiz)
            .done(function (data) {
                this.setState({data: data});
            }.bind(this));
    }

    _deleteQuiz(quiz, e) {
        e.preventDefault();
        RestService
            .delete('/api/quiz/' + this.props.params.courseId, quiz)
            .done(function (data) {
                this.setState({data: data});
            }.bind(this));
    }

    render() {

        if (!this.state.data.id) {
            return (<div></div>);
        }

        var self = this;

        var nodes = this.state.data.quizzes.map(function (quiz, index) {

            var subNodes = quiz.answers.map(function (answer, subIndex) {
                return (
                    <div key={subIndex} className="form-group input-group">
                        <span className="input-group-addon">
                            <input type="radio" name="answer-radio" id={'checked-'+subIndex+'-'+index} defaultChecked={answer.checked}/>
                        </span>
                        <input type="text" className="form-control" placeholder="Add an answer" id={'answer-'+subIndex+'-'+index} defaultValue={answer.answer}/>
                    </div>
                );
            });

            return (
                <div key={index} className="panel panel-default">
                    <div className="panel-heading">
                        <div className="btn-group pull-right">
                            <button className="btn btn-default btn-xs" onClick={self._deleteQuiz.bind(self,quiz)}>Delete</button>
                        </div>
                        <h4 className="panel-title heading-title">
                            <a data-toggle="collapse" data-parent="#accordion" href={'#collapse'+index}>{quiz.question}</a>
                        </h4>
                    </div>
                    <div id={'collapse'+index} className="panel-collapse collapse">
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor={'question'+index}>Question:</label>
                                    <textarea type="text" className="form-control" id={'question'+index} rows="3" placeholder="Add question" defaultValue={quiz.question}/>
                                </div>
                                <div className="form-group">
                                    <label>Answer:</label>
                                    {subNodes}
                                </div>
                                <div className="col-xs-12 text-center">
                                    <button className="btn btn-primary btn-sm" onClick={self._saveQuiz.bind(self,quiz,index)}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="course-quiz">
                <div className="panel-group" id="accordion">
                    {nodes}
                </div>

                <div className="btn-group">
                    <button className="btn btn-default btn-sm" onClick={this._addQuiz.bind(this)}>Add Quiz</button>
                </div>
            </div>
        );
    }
}