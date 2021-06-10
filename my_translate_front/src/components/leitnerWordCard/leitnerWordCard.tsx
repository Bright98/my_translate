import React from 'react';
import { Frown, Meh, Smile, Check, Play } from 'react-feather';
import { ExpandedButton, WordCard } from '..';
import axios from 'axios';
import { BASE_URL } from '../../services/config';

const LeitnerWordCard: React.FC = () => {
    const qs = require("query-string");

    const [word, sayWord] = React.useState(false);
    const [start, getStart] = React.useState(false);
    const [words, getWords] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const [now, getNow] = React.useState(0);
    const [time, getTime] = React.useState(5);
    const [alertMessage, showAlertMessage] = React.useState('');
    const globalCycle = [1, 3, 7, 21, 40];
    var tomorrow = now + 24 * 60 * 60 * 1000;

    React.useEffect(() => {
        setTimeout(() => {
            if (time > 0) {
                getTime(time - 1);
            }
        }, 1000);
        if (time === 0) {
            showAlertMessage('');
            getTime(5);
        }
        return () => clearTimeout(time);
    })


    const get_start = async () => {
        var _now = Date.now()
        getNow(_now);

        var res = await axios.post(
            `${BASE_URL}/show_words/`,
            qs.stringify({ time_stamp: _now }),
        );

        if (Object.keys(res.data).length != 0) {
            getWords(res.data);
            getStart(true);
        }
        else {
            showAlertMessage('کلمه ای برای امروز وجود نداره :)');
        }
    }

    const remember = async () => {
        var res = await axios.post(
            `${BASE_URL}/remember_word/`,
            qs.stringify({
                word: words[index]["word"],
                cycle: words[index]["cycle"] + 1,
                time_stamp: now + globalCycle[words[index]["cycle"] + 1] * tomorrow
            }),
        );
        if (res.status === 200) {
            sayWord(false);
            if (index < words.length - 1) {
                setIndex(index + 1)
            }
            else {
                getWords([]);
                sayWord(false);
                getStart(false);
            }
        }

    }

    const soso_remember = async () => {
        var res = await axios.post(
            `${BASE_URL}/remember_word/`,
            qs.stringify({
                word: words[index]["word"],
                cycle: words[index]["cycle"],
                time_stamp: now + tomorrow
            }),
        );
        if (res.status === 200) {
            sayWord(false);
            if (index < words.length - 1) {
                setIndex(index + 1)
            }
            else {
                getWords([]);
                sayWord(false);
                getStart(false);
            }
        }
    }

    const not_remember = async () => {
        var res = await axios.post(
            `${BASE_URL}/remember_word/`,
            qs.stringify({
                word: words[index]["word"],
                cycle: 1,
                time_stamp: now + tomorrow
            }),
        );
        if (res.status === 200) {
            sayWord(false);
            if (index < words.length - 1) {
                setIndex(index + 1)
            }
            else {
                getWords([]);
                sayWord(false);
                getStart(false);
            }
        }
    }

    return (
        <>
            {alertMessage ?
                <div className='translate__alert'>{alertMessage}</div> :
                <></>
            }
            <div className='container leitnerWordCard'>
                <div className='col-md-7'>
                    {(words.length && start) ?
                        <>
                            <WordCard text={word ? words[index]["translate"] : words[index]["word"]} />
                            {word ?
                                <div className='leitnerWordCard__moods'>
                                    <ExpandedButton
                                        icon={<Smile />}
                                        expandedText='بلد بودم'
                                        className='leitnerWordCard__moods__mood'
                                        btnClick={remember}
                                    />
                                    <ExpandedButton
                                        icon={<Meh />}
                                        expandedText='یکم گیر داشتم'
                                        className='leitnerWordCard__moods__mood'
                                        btnClick={soso_remember}
                                    />
                                    <ExpandedButton
                                        icon={<Frown />}
                                        expandedText='بلد نبودم'
                                        className='leitnerWordCard__moods__mood'
                                        btnClick={not_remember}
                                    />
                                </div> :
                                <div className='leitnerWordCard__sayBtn'>
                                    <ExpandedButton
                                        icon={<Check />}
                                        expandedText='گفتم'
                                        className='leitnerWordCard__moods__mood'
                                        btnClick={() => sayWord(true)}
                                    />
                                </div>
                            }
                        </> :
                        <div>
                            <ExpandedButton
                                icon={<Play />}
                                expandedText='شروع'
                                className='leitnerWordCard__start'
                                btnClick={get_start}
                            />
                        </div>
                    }
                </div>
            </div>
        </>

    )
}

export default LeitnerWordCard;