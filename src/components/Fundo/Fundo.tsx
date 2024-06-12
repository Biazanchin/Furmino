import { ReactNode } from 'react';

const Fundo = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-back py-24">
      <div className="container mx-auto text-center">
        <img 
          src="https://desafio3furniro.s3.us-east-2.amazonaws.com/header/logo.png" 
          alt="Logo" 
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">{children}</h1>
        <nav className="mt-4">
          <a href="/" className='font-semibold'>
            Home
          </a>
          <span className="mx-2">{'>'}</span>
          <span>{children}</span>
        </nav>
      </div>
    </div>
  );
};

export default Fundo;
