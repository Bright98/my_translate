import React from 'react';
import { Plus, Search } from 'react-feather';
import { ExpandedButton, Header } from '../../components';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../services/config';


type Props = RouteComponentProps;


class TranslatePage extends React.Component<Props> {
    state = {
        alert: false,
        alert_message: '',
        time: 4,
        translate: '',
        word: '',
    }

    componentDidUpdate() {
        if (this.state.alert) {
            setTimeout(() => {
                if (this.state.time > 0) {
                    this.setState({
                        time: this.state.time - 1,
                    })
                }
            }, 1000);
            if (this.state.time === 0)
                this.setState({
                    alert: false,
                    time: 4,
                });
            return () => clearTimeout(this.state.time);
        }
    }

    render() {
        const qs = require("query-string");

        const wordChange = async (e: any) => {
            this.setState({
                word: e.target.value,
            })
        };


        const translateClick = async () => {
            if (this.state.word) {
                var res = await axios.post(
                    `${BASE_URL}/translate/`,
                    qs.stringify({ word: this.state.word }),
                );
                this.setState({
                    translate: res.data,
                })
            }
        }

        const addToLeitner = async () => {

            if (this.state.word && this.state.translate) {
                try {
                    var res = await axios.post(
                        `${BASE_URL}/add_to_leitner/`,
                        qs.stringify({
                            word: this.state.word,
                            translate: this.state.translate,
                            cycle: 1,
                            time_stamp: Date.now(),
                        }),
                    );
                    if (res.status === 201)
                        this.setState({
                            alert: true,
                            alert_message: 'کلمه به لایتنر اضافه شد ... :)'
                        })
                } catch (error) {
                    if (error.response.status === 400)
                        this.setState({
                            alert: true,
                            alert_message: 'این کلمه در لایتنر وجود داره !'
                        })
                }
            }
        }


        return (
            <div className='translate__layout'>
                <Header
                    leading={false}
                    title='سرویس ترجمه'
                    actionClick={() => this.props.history.push('/leitner')} />
                {this.state.alert ?
                    <div className='translate__alert'>{this.state.alert_message}</div> :
                    <></>
                }
                <div className='col-md-11'>
                    <div className='translate'>
                        <div className='col-md-6 translate__box'>
                            <div className='translate__box__translateTitle'>
                                <span className='translate__box__title'>ترجمه</span>
                                <span className='translate__box__lang'>
                                    (فارسی)
                                </span>
                            </div>
                            <div className='translate__box__translateBox'>{this.state.translate}</div>
                        </div>
                        <div className='col-md-6 translate__box'>
                            <div className='translate__box__wordTitle'>
                                <span className='translate__box__title'>کلمه</span>
                                <span className='translate__box__lang'>
                                    (انگلیسی)
                                </span>
                            </div>
                            <textarea onChange={wordChange} autoFocus />
                        </div>
                    </div>

                    <div className='translate__btn'>
                        <ExpandedButton
                            icon={<Search />}
                            btnClick={translateClick}
                            expandedText='ترجمه'
                            className='translate__btn__translate'
                        />
                    </div>
                </div>
                <ExpandedButton
                    icon={<Plus />}
                    expandedText='افزودن به جعبه لایتنر'
                    className='translate__addBtn'
                    btnClick={addToLeitner}
                />
            </div>
        )
    }
}

export default withRouter(TranslatePage);