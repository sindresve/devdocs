function NotFoundPage() {
    return (
      <div className='w-screen h-screen flex justify-center items-center overflow-hidden z-10 fixed flex-col top-0'>
        <a href="/" className="w-screen flex justify-center">
              <img src="/glemmen-logo.png" alt="Glemmen Logo" className="w-1/2 m-5" />
        </a>
        <h1>404 - Page Not Found</h1>
        <p>Siden du leter etter finnes ikke</p>
      </div>
    );
  }
  
  export default NotFoundPage;