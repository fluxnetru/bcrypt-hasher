function InfoSection() {
    return (
        <div className="info-section animate-info">
            <h3>
                <i className="fas fa-info-circle"></i> Зачем это нужно?
            </h3>
            <p>Никогда не передавайте HR свои настоящие пароли. Вместо этого:</p>
            <ol>
                <li>Создайте временный пароль</li>
                <li>Захешируйте его здесь с помощью bcrypt</li>
                <li>Передайте хеш HR-специалисту</li>
            </ol>
            <p>Все вычисления происходят прямо в вашем браузере — данные никуда не отправляются.</p>
        </div>
    );
}
  
export default InfoSection;