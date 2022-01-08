import cls from './Logo.module.css'

function Logo(props) {
  return (
    <div className={cls.wrapper}>
      <svg className={cls.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
       <path d="M13 3.056v-1.056c0-.552-.448-1-1-1s-1 .448-1 1v1.052c-6.916.522-10.372 5.594-11 9.906 1.864-2.677 6.136-2.677 8 0 1.839-2.641 6.047-2.685 7.917 0 1.864-2.677 6.219-2.677 8.083 0-.625-4.291-4.125-9.333-11-9.902zm0 10.101v6.843c0 1.657-1.343 3-3 3s-3-1.343-3-3v-1h2v1c0 .551.449 1 1 1s1-.449 1-1v-6.866c.68-.226 1.27-.242 2 .023z"/>
      </svg>
      <span className={cls.name}>I-Weather</span>
    </div>
  );
}

export default Logo;
