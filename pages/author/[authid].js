import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Quote from '../../components/Quote/Quote';
import Random from '../../components/Random/Random';
import { StyledAuthorQuotes } from './authorquotes.styled';

const AuthorQuotes = () => {
  const router = useRouter();
  const authid = router.query.authid;
  const [quotes, setQuotes] = useState([]);
  const [authname, setAuthName] = useState(authid);
  const getAuthorQuote = async () => {
    console.log('clicked');
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authid}?page=1&limit=3`
    );
    const quote = await res.json();
    // console.log(quote.quotes);
    setQuotes(quote.quotes);
  };
  const getRandomAuthorQuote = async () => {
    console.log('clicked');
    const quoteRes = await fetch(
      `https://quote-garden.herokuapp.com/api/v2/quotes/random`
    );
    const rQuote = await quoteRes.json();
    const author = rQuote.quote.quoteAuthor;
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${author}?page=1&limit=3`
    );
    const quote = await res.json();
    // console.log(quote.quotes);
    setQuotes(quote.quotes);
    setAuthName(author);
  };

  useEffect(() => {
    getAuthorQuote();
    // getRandomAuthorQuote();
  }, []);

  return (
    <StyledAuthorQuotes>
      <div onClick={() => router.back()} className="back">
        {`<- Back`}
      </div>
      <Random getRandom={getRandomAuthorQuote} isAuthor={true} />
      <h1 className="authname">{authname}</h1>
      {quotes.map((quote) => (
        <Quote quote={quote.quoteText} />
      ))}
      <Footer />
    </StyledAuthorQuotes>
  );
};

export default AuthorQuotes;
