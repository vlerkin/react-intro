import axios from "axios";
import { useState, useEffect } from "react";

interface NewsType {
  date: string;
  emoji: string;
  announcement: string;
}

const newsPage = () => {
  const [newsState, setNewsState] = useState<NewsType[]>([]);
  useEffect(() => {
    const getNewsFromAPI = async () => {
      const news = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/news"
      );
      setNewsState(news.data);
    };
    getNewsFromAPI();
  }, []);
  return (
    <div>
      {newsState.map((newsDay: NewsType) => {
        return (
          <div>
            <p>News for {newsDay.date}</p>
            <p>{newsDay.emoji}</p>
            <p>
              {newsDay.announcement} <br />
              -----------------------------
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default newsPage;
