import './styles.css';
import TweetCard from './TweetCard';

const MOCK_TWEETS = [
  {
    profileImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
    name: 'John Doe',
    handle: 'johndoe',
    date: 'Dec 25',
    message: "I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.",
    replyCount: '1,094',
    retweetCount: '512',
    likeCount: '512',
  },
  {
    profileImage: 'https://xsgames.co/randomusers/avatar.php?g=female',
    name: 'John Doe',
    handle: 'johndoe',
    date: 'Dec 25',
    message: "I got my wife a fridge for Christmas. I can't wait to see her face light up when she opens it.",
    replyCount: '1,094',
    retweetCount: '512',
    likeCount: '512',
  },
  {
    profileImage: 'https://xsgames.co/randomusers/avatar.php?g=male',
    name: 'WALL-E',
    handle: 'walle',
    date: 'Jul 1',
    message: "The best way to predict the future is to invent it.",
    replyCount: '3,960',
    retweetCount: '512',
    likeCount: '40.5 K',
  }
]

const Tweets = () => {
  return (
    <div className="tweet-list-container">
      <h2>Tweets</h2>
      <div className="tweet-list">
        {
          MOCK_TWEETS.map((tweet, index) => (
            <TweetCard
              key={index}
              profileImage={tweet.profileImage}
              name={tweet.name}
              handle={tweet.handle}
              date={tweet.date}
              message={tweet.message}
              replyCount={tweet.replyCount}
              retweetCount={tweet.retweetCount}
              likeCount={tweet.likeCount}
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default Tweets;