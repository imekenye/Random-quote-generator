import Head from 'next/head';
import Author from '../components/Author/Author';
import Quote from '../components/Quote/Quote';
import Random from '../components/Random/Random';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer/Footer';

export default function Home() {
  // console.log(quote);
  const [randomQuote, setRandomQuote] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);
  const getQuote = async () => {
    console.log('clicked');
    const res = await fetch(
      'https://quote-garden.herokuapp.com/api/v2/quotes/random'
    );
    const quote = await res.json();
    setRandomQuote({
      quote: quote.quote.quoteText,
      author: quote.quote.quoteAuthor,
      genre: quote.quote.quoteGenre,
    });
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Quote Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Random getQuote={getQuote} isAuthor={isAuthor} />
        <Quote quote={randomQuote.quote} />
        <Author author={randomQuote.author} genre={randomQuote.genre} />
      </main>

      <Footer />
    </div>
  );
}
