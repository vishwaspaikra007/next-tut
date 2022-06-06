import styles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

export default function ArticleList({articles}) {
  return (
    <div className={styles.grid}>
      {articles.map((article, key) => (
        <ArticleItem key={article.id + "_" + key} article={article}/>
      ))}
    </div>
  )
}
