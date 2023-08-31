import * as React from 'react';
import './aiCoachSelect.css';
import { CenterLayout } from '../../components/layout';
import { ShortTitleBar } from '../../components/titleBar';
import { Link } from 'react-router-dom';

interface IAiCoachSelectProps {
}

const questionList = [
  {
    question: 'What is Bettermi.io?',
    ans: "Bettermi.io is a web application designed to enhance users' lifestyles by integrating fitness, wellness, and social elements."
  }
]


const AiCoachSelect: React.FunctionComponent<IAiCoachSelectProps> = (props) => {
  const [showQuestion, setShowQuestion] = React.useState(false);
  const [answer, setAnswer] = React.useState('');
  const handleExportAns = (questionIndex: number) => {
    setAnswer(questionList[questionIndex].ans);
    console.log(answer);
    setShowQuestion((prev) => !prev);
  }
  

  const content: JSX.Element = (
    <div className="screen">
      <div className="bettermidapp-ai-coach">
      <ShortTitleBar title='Your AI coaches' />
      <img className="bg-O0wesW" src="img/aiCoachSelect/bg-7@1x.png" alt="BG" />
      <div className="bg-C4VecI"></div>
      <div className="time-indicator-O0wesW">
        <img className="x15-pqjZDK" src="img/aiCoachSelect/file---16@1x.png" alt="15" />
        <div className="today-pqjZDK inter-normal-white-12px-2">Today</div>
        <img className="x16-pqjZDK" src="img/aiCoachSelect/file---16@1x.png" alt="16" />
      </div>
      <p className="know-more-about-bettermiio-O0wesW inter-bold-royal-blue-15px">KNOW MORE ABOUT BETTERMI.IO :</p>
      <div className="x9-O0wesW">
        <div className="bettermi_qa-j4ugSM">
          <div className="size-DIcdLh size" onClick={(e) => handleExportAns(0)}>
            <div className="talking-container" >
              <div className="x425-ZFGQqm x425" ></div>
            </div>
            <div className="what-is-bettermiio-nVZFoH inter-normal-white-15px">What is Bettermi.io?</div>
          </div>
          {showQuestion && (
            <div className="ans-container">
              <div className="talking-container" >
                <div className="answer-box inter-normal-white-15px" >
                  {answer}
                </div>
              </div>
              
            </div>
          )}
          {!showQuestion && (
            <>
              <div className="size-F1ipSf size">
                <div className="talking-container">
                  <div className="x425-U7TqLi x425"></div>
                </div>
                <div className="how-does-bettermiio-work-4kIHJA inter-normal-white-15px">How does Bettermi.io work?</div>
              </div>
              <div className="size-XuahuD size">
                <div className="talking-container">
                  <div className="x425-CldZpK x425"></div>
                </div>
                <p className="what-are-the-key-features-of-bettermiio-MGMwe3 inter-normal-white-15px">
                  What are the key features of Bettermi.io?
                </p>
              </div>
              <div className="size-pREf5B size">
                <div className="talking-container">
                  <div className="x425-nCPlS4 x425"></div>
                </div>
                <p className="how-can-i-earn-rewards-on-bettermiio-R6LMwU inter-normal-white-15px">
                  How can I earn rewards on Bettermi.io?
                </p>
              </div>
              <div className="size-MqzVLg size">
                <div className="talking-container">
                  <div className="x425-Q9y5XS x425"></div>
                </div>
                <p className="are-the-nf-ts-on-bettermiio-valuable-fWbW1Y inter-normal-white-15px">
                  Are the NFTs on Bettermi.io valuable?
                </p>
              </div>
              <div className="size-d8uTg1 size">
                <div className="talking-container">
                  <div className="x425-TexyRD x425"></div>
                </div>
                <p className="can-i-connect-with-other-users-k5mvEy inter-normal-white-15px">
                  Can I connect with other users?
                </p>
              </div>
              <div className="size-D87IBR size">
                <div className="talking-container">
                  <div className="x425-glM2wM x425"></div>
                </div>
                <p className="is-my-personal-information-safe-KoUJ4p inter-normal-white-15px">
                  Is my personal information safe?
                </p>
              </div>
              <div className="size-TQoxDx size">
                <div className="talking-container">
                  <div className="x425-I1YSAZ x425"></div>
                </div>
                <p className="how-can-i-get-started-CqVjCz inter-normal-white-15px">How can I get started ?</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="user-O0wesW">
        {/* <Link to="/aiCoachDetail/1"> */}
          <div className="ai-chatbot_-mmi-NgcGm6">
            <div className="bg-Kcwf64"></div>
            <img className="ai-chatbot_-mimi-Kcwf64" src="img/aiCoachSelect/ai-chatbot-mimi-2@1x.png" alt="Ai Chatbot_Mimi" />
            <div className="mental-coach-Kcwf64 inter-normal-white-12px">Mental coach</div>
            <div className="mimi-Kcwf64 inter-semi-bold-white-15px">Mimi</div>
          </div>
        {/* </Link> */}
        {/* <Link to="/aiCoachDetail/2"> */}
          <div className="ai-chatbot_io-NgcGm6 ai-chatbot_io">
            <div className="bg-aeJf5z"></div>
            <img className="ai-chatbot_io-aeJf5z ai-chatbot_io" src="img/aiCoachSelect/ai-chatbot-io@1x.png" alt="Ai Chatbot_io" />
            <div className="physical-coach-aeJf5z inter-normal-white-12px">Physical coach</div>
            <div className="io-aeJf5z inter-semi-bold-white-15px">.io</div>
          </div>
        {/* </Link> */}
      </div>
    </div>

    </div>
  )
  

  return (
    <CenterLayout
      content={content}
      bgImg={false}
    />
  )
};

export default AiCoachSelect;
