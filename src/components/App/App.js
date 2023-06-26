import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [countTotal, setCountTotal] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [positivePercent, setPositivePercent] = useState(0);

  const countTotalFeedback = () => {
    setCountTotal(countTotal + 1);
  };

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countPositiveFeedbackPercentage = () => {
    setPositivePercent(good > 0 ? Math.ceil((good / countTotal) * 100) : 0);
  };

  return (
    <div className="App">
      <Section title="Pleace leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />

      {countTotal > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal}
          positivePercent={positivePercent}
        />
      ) : (
        <Notification message="There is no feedback " />
      )}
    </div>
  );
};

export default App;
