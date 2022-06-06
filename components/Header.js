import styles from '../styles/Header.module.css'

export default function Header() {
  let x = 5
  return (
    <div className={styles.title}>
      <h1 className="title">
        This is our <span>Header</span>
      </h1>
      <p className={styles.description}>
        veniam nisi exercitation voluptate esse laboris pariatur. Cupidatat do
      </p>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'};
            font-size: 40px;
          }
        `}
      </style>
    </div>
  )
}
