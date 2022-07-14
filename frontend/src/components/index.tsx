import icon from '../assets/img/notification-icon.svg'
import '../components/NotificationButton/styles.css'

function NotificationButton() {
  return (
    <>
      <p>teste de pagina</p>

      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar dívida" />
      </div>
    </>
  );
}

export default NotificationButton;
