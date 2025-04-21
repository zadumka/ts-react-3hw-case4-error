import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FormEvent } from 'react';

interface SearchBarProps {
    onSubmit: (searchQuery: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('query') as string;
        if (query === '') {
            toast.error('Please enter your search query.');
            return;
        }
        onSubmit(query);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href=""https://www.themoviedb.org/""
                    target=""_blank""
                    rel=""noopener noreferrer""
                >
                    Powered by TMDB
                </a>
                <form className={styles.form} onSubmit={handleSubmit}> {/* Помилка: має бути action={handleSubmit} */}
                    <input
                        className={styles.input}
                        type=""text""
                        name=""query""
                        autoComplete=""off""
                        placeholder=""Search movies...""
                        autoFocus
                    />
                    <button className={styles.button} type=""submit"">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}
