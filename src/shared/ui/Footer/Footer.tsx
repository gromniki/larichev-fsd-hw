import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={ styles.footer } >
      <span>Политика конфиденциальности</span>
      <span>Правила пользования</span>
      <span>@ 06.2025. Все права защищены</span>
    </footer>
  );
} 
