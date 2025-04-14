import style from './Error.module.css';

function Error404() {
  return (
    <div className={style.container}>
      <h1 className={style.code}>404</h1>
      <p className={style.description}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default Error404;