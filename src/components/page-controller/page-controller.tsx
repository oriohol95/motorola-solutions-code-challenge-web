'use client'
import styles from './page-controller.module.css'

type Props = {
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

export default function PageController ({
  currentPage,
  onPageChange = () => {}
}: Props) {
  const handlePrevious = () => {
    onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    onPageChange(currentPage + 1)
  }

  const isFirstPage = currentPage === 1
  const isSecondPage = currentPage === 2

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.box} ${isFirstPage && styles.disabled}`}
        disabled={isFirstPage}
        onClick={handlePrevious}
      >
        {'< Previous'}
      </button>
      <button
        className={`${styles.box} ${isFirstPage && styles.selected}`}
        disabled={isFirstPage}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
      <button
        className={`${styles.box} ${isSecondPage && styles.selected} ${currentPage > 3 && styles.disabled}`}
        disabled={currentPage === 2 || currentPage > 3}
        onClick={() => onPageChange(2)}
      >
        {currentPage <= 3 ? '2' : '...'}
      </button>
      <button
        className={`${styles.box} ${!(isFirstPage || isSecondPage) && styles.selected}`}
        onClick={() => onPageChange(3)}
      >
        {currentPage <= 3 ? '3' : currentPage}
      </button>
      <button
        className={styles.box}
        onClick={() => onPageChange(currentPage <= 3 ? 4 : currentPage + 1)}
      >
        {currentPage <= 3 ? '4' : currentPage + 1}
      </button>
      <button
        className={styles.box}
        onClick={() => onPageChange(currentPage <= 3 ? 5 : currentPage + 2)}
      >
        {currentPage <= 3 ? '5' : currentPage + 2}
      </button>
      <button
        className={styles.box}
        onClick={handleNext}
      >
        {'Next >'}
      </button>
    </div>
  )
}
