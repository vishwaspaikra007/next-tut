import styles from '../styles/Article.module.css'
import Link from 'next/link'

export default function ArticleItem({article}) {
  return (
    // <Link href="/article/{id}" as={`/article/${article.id}`}>
    <Link href={`article/${article.id}`}>
        <a className={styles.card}>
            <h4>{article.title} &rarr;</h4>
            <p>{article.excerpt}</p>
        </a>
    </Link>
  )
}