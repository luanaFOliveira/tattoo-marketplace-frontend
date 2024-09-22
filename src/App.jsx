import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './router';
import { AuthProvider } from './context/AuthProvider';


function App() {
  

  return (
    <div className='App'>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={themeMode}
        />
        <RouterProvider router={router}/>
      </AuthProvider>
    </div>
  );
}


// estava comecando a fazer autenticacao, faltava colocar as chamadas nas paginas e teria que ver como fazer uma navbar  e paginas separadas para o tatuador e para o user, usndo um contexto global - assim como no controle de estoque
// falta a parte de pedir um orcamento e aprovar um orcamento e na api falta ver como salvar imagens no banco de dados e aqui tem que ver como fazer o upload dessas imagens
export default App;
