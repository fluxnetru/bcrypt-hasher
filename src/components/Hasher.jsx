import { useState } from 'react';
import { FaEye, FaEyeSlash, FaCopy, FaKey } from 'react-icons/fa';
import * as bcrypt from 'bcryptjs';

function Hasher({ showToast }) {
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [hash, setHash] = useState('');
    const [rounds, setRounds] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateHash = () => {
        if (!password) {
            showToast('Введите пароль', true);
            return;
        }

        setIsLoading(true);
        try {
            const salt = bcrypt.genSaltSync(rounds);
            const hash = bcrypt.hashSync(password, salt);
            setHash(hash);
            showToast('Хеш успешно сгенерирован!');
        } catch (error) {
            setHash('');
            showToast('Ошибка при хешировании', true);
            console.error('Ошибка:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        if (!hash) {
            showToast('Нет хеша для копирования', true);
            return;
        }
        navigator.clipboard.writeText(hash);
        showToast('Хеш скопирован!');
    };

    return (
        <div className="card animate-card">
            <div className="card-header">
                <h2>Генератор хеша</h2>
                <div className="rounds-selector">
                    <label htmlFor="rounds">Раунды:</label>
                    <select
                        id="rounds"
                        className="interactive-select"
                        value={rounds}
                        onChange={(e) => setRounds(parseInt(e.target.value))}
                    >
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </div>
            </div>

            <div className="card-body">
                <div className="input-group">
                    <input
                        type={isVisible ? 'text' : 'password'}
                        id="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => {
                        setPassword(e.target.value);
                        setHash('');
                        }}
                        className="interactive-input"
                    />
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                        className="interactive-btn"
                        title="Показать/скрыть пароль"
                    >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <button
                onClick={handleGenerateHash}
                className="primary-btn animate-btn"
                disabled={isLoading}
                >
                {isLoading ? (
                    <span className="spinner"></span>
                ) : (
                    <>
                        <FaKey /> Захешировать
                    </>
                )}
                </button>

                <div className="result-container">
                    <label htmlFor="hash-result">Захешированный пароль:</label>
                    <div className="output-group">
                        <textarea
                        id="hash-result"
                        value={hash}
                        readOnly
                        placeholder="Хеш появится здесь"
                        className="interactive-textarea"
                        />
                        <button onClick={handleCopy} className="icon-btn interactive-btn" title="Скопировать хеш">
                            <FaCopy />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hasher;