import { useState } from 'react';
import Hasher from './components/Hasher.jsx';
import InfoSection from './components/InfoSection.jsx';
import Toast from './components/Toast.jsx';
import { FaLock } from 'react-icons/fa';

function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const showToast = (message, error = false) => {
    setToastMessage(message);
    setIsError(error);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="container">
      <header>
        <div className="logo animate-logo">
          <FaLock className="logo-icon" />
          <h1>Password Hasher</h1>
        </div>
        <p className="tagline">Безопасное хеширование паролей для HR</p>
      </header>

      <main>
        <Hasher showToast={showToast} />
        <InfoSection />
      </main>

      <footer>
        <p>© 2025 Password Hasher</p>
        <p className="disclaimer">
          Бесплатный сервис от <a href="https://fluxnet.ru" target="_blank">Fluxnet.ru</a> для безопасной передачи данных HR. Хеширование выполняется локально с использованием bcrypt.
        </p>
      </footer>

      {toastMessage && <Toast message={toastMessage} isError={isError} />}
    </div>
  );
}

export default App;