import Script from 'next/script';

const GoogleRecaptcha = () => {
  return (
    <div>
      {/* Memuat skrip eksternal */}
      <Script 
        src="https://www.google.com/recaptcha/api.js?render=6LcEgaYqAAAAAJYATqo66A4IbJlgh6JyGwK2q2Vn" 
        strategy="lazyOnload" 
      />
    </div>
  );
};

export default GoogleRecaptcha;
