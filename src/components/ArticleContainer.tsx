import { AppDispatch, RootState } from "../store/store";
import styles from "../styles/ArticleContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setVisibility } from "../store/visibilitySlice";
import { Link } from "react-router-dom";

export default function ArticleContainer(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const newsData = useSelector((state: RootState) => state.newsData);

  return (
    <div className={styles.articleList}>
      {newsData.map((item, index) => {
        // 날짜 포맷 변경하기
        const dateString = item.pubDate;
        const date = new Date(dateString);

        function formatDate(d: Date): string {
          const year = d.getFullYear();
          const month = d.getMonth() + 1;
          const day = d.getDate();
          const hours = d.getHours();
          const minutes = d.getMinutes();

          const pad = (num: number) => num.toString().padStart(2, "0");

          return `${year}년 ${pad(month)}월 ${pad(day)}일 ${pad(hours)}:${pad(minutes)}`;
        }
        const changedDate = formatDate(date);

        // JSX에서 이벤트 핸들러 사용
        return (
          <div
            key={index}
            className={styles.article}
            onMouseOver={() => {
              dispatch(setVisibility(index));
            }}
            onFocus={() => {
              dispatch(setVisibility(index));
            }}
          >
            <Link to={`/news/${index}`} onClick={() => console.log(1)}>
              <span style={{ display: "none" }}>{index}</span>
              <h3>{item.title}</h3>
              <p>{changedDate}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
